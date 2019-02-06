const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountriesInfoView = require('./views/countries_info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

  const selectElement = document.querySelector('select#countries');
  const countriesDropdown = new SelectView(selectElement);
  countriesDropdown.bindEvents();

  const infoDiv = document.querySelector('div#country');
  const countriesInfoDisplay = new CountriesInfoView(infoDiv);
  countriesInfoDisplay.bindEvents();
});
