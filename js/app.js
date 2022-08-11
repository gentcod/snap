const navigation = document.querySelector('.navigation__links');
const dropdown = document.querySelectorAll('.navigation__links-dropdown');
const dropdownFeatures = document.querySelector('.navigation__links-dropdown--features');
const dropdownCompany = document.querySelector('.navigation__links-dropdown--company');
const iconFeature = document.querySelector('.icon-feature');
const iconCompany = document.querySelector('.icon-company');

// import icons from 'url:../../images/icon-arrow-down.svg';

//Dropdown menu
navigation.addEventListener('click', function(e) {
   e.preventDefault();
   const nav = e.target.closest('.dropdown');

   //Guard clause
   if (!nav) return;
   // const icon = nav.querySelector('.navigation__links-item--icon');
   // const imageSrc = iconCompany.src.slice(0, iconCompany.src.lastIndexOf('/'))
   // console.log(imageSrc)

   const iconDown = nav.querySelector('.icon-down');
   const iconUp = nav.querySelector('.icon-up')
   
   //Specific navigation selected
   const navSpec = nav.dataset.link;

   //Helper function
   //Change dropdown parent icon
   const hide = function(nav) {
      // icon.src = nav.classList.contains('hidden') ? `${imageSrc}/icon-arrow-down.svg` : `${imageSrc}/icon-arrow-up.svg`;
      iconDown.classList.toggle('hide')
      iconUp.classList.toggle('hide')
   }

   if (navSpec === 'features') {
      dropdownFeatures.classList.toggle('hidden');
      hide(dropdownFeatures);
      dropdownCompany.classList.add('hidden');
      // iconCompany.src = `${imageSrc}/icon-arrow-down.svg`;
   };

   if (navSpec === 'company') {
      dropdownCompany.classList.toggle('hidden');
      hide(dropdownCompany);
      dropdownFeatures.classList.add('hidden');
      // iconFeature.src = `${imageSrc}/icon-arrow-down.svg`;
   };
})

//Hide navigation
// const hideNavigation = function() {
//    if(!(window.screen.width <= 600)) return;
//    navigation.classList.add('hide');
// }

// hideNavigation();
window.addEventListener('load', function() {
   if(!(window.screen.width <= 600)) return;
   navigation.classList.add('hide')
})

//Toggle navigation sidebar
document.querySelector('.navigation__icon').addEventListener('click', function(e) {
   if (!e.target) return;
   navigation.classList.toggle('hide');
})

//Hide dropdown when other elements are clicked
// document.querySelector('body').addEventListener('click', function(e) {
//    e.preventDefault();
//    const nav = e.target.closest('.dropdown');

//    if(nav) return;
//    else {
//       dropdownCompany.classList.add('hidden');
//       dropdownFeatures.classList.add('hidden');
//       iconCompany.src = 'images/icon-arrow-down.svg';
//       iconFeature.src = 'images/icon-arrow-down.svg';
//    }
// })