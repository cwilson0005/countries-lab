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
  const img = this.createImage(country);
  const languageDetails = country.languages;
  console.log(languageDetails);

  // for (let language of languageDetails){
  //   console.log(language.name);
  //   return language.name;
  // }

  const languageNameArray = [];

  for (let language of languageDetails){
    languageNameArray.push(language.name);
  }

  infoParagraph.textContent = `Country name: ${country.name} | Country region: ${country.region} | languages: ${languageNameArray} `;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  this.container.appendChild(img);
  this.container.setAttribute("align", "center");
};

CountriesInfoView.prototype.createImage = function(country){
  const img = document.createElement('img');
  img.classList.add('medium-image');
  img.src = country.flag;
  return img;
};

module.exports = CountriesInfoView;
