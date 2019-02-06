const PubSub = require('../helpers/pub_sub.js');

const CountriesInfoView = function(container){
  this.container = container;
};

CountriesInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:selected-country-ready', (evt) => {
    const country = evt.detail;
    this.render(country);
  });
};

CountriesInfoView.prototype.render = function(country){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `Country name: ${country.name} | Country region: ${country.region} | Country flag: ${country.flag}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = CountriesInfoView;
