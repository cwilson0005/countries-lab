const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function(onComplete) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) return;
    // console.log(xhr.responseText);
    const data = JSON.parse(xhr.responseText);
    // console.log(data);
    onComplete(data);
  });

  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
};

module.exports = RequestHelper;
