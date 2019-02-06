const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function () {
  this.all = null;
};

Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    console.log(data);
    this.all = data;
    // console.log(this.all);
    PubSub.publish('Countries:all-countries-ready', this.all);
  });
};

module.exports = Countries;
