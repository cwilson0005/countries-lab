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

  //Code found online to display animated background
//   function ground() {
//
//     var tl = new TimelineMax({
//       repeat: -1
//     });
//
//     tl.to("#ground", 20, {
//         backgroundPosition: "1301px 0px",
//         force3D:true,
//         rotation:0.01,
//         z:0.01,
//         autoRound:false,
//         ease: Linear.easeNone
//       });
//
//     return tl;
//   }
//
//   function clouds() {
//
//     var tl = new TimelineMax({
//       repeat: -1
//     });
//
//     tl.to("#clouds", 52, {
//       backgroundPosition: "-2247px bottom",
//       force3D:true,
//       rotation:0.01,
//       z:0.01,
//       //autoRound:false,
//       ease: Linear.easeNone
//     });
//
//     return tl;
//   }
//
//   var masterTL = new TimelineMax({
//     repeat: -1
//   });
//
// // window load event makes sure image is
// // loaded before running animation
//   window.onload = function() {
//     masterTL
//     .add(ground(),0)
//     .add(clouds(),0)
//     .timeScale(0.7)
//     .progress(1).progress(0)
//     .play();
//   };
});
