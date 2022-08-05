const navigation = document.querySelector('.navigation__links');
const dropdown = document.querySelectorAll('.navigation__links-dropdown');
const dropdownFeatures = document.querySelector('.navigation__links-dropdown--features');
const dropdownCompany = document.querySelector('.navigation__links-dropdown--company');
const iconFeature = document.querySelector('.icon-feature');
const iconCompany = document.querySelector('.icon-company');

//Dropdown menu
navigation.addEventListener('click', function(e) {
   e.preventDefault();
   const nav = e.target.closest('.dropdown');
   // const navButton = e.target.closest('.nav')
   
   //Guard clause
   if (!nav) return;
   const img = nav.querySelector('.navigation__links-item--icon');
   
   //Specific navigation selected
   const navSpec = nav.dataset.link;

   //Helper function
   //Change dropdown parent icon
   const hidden = function(nav) {
      img.src = nav.classList.contains('hidden') ? 'images/icon-arrow-down.svg' : 'images/icon-arrow-up.svg';
   }

   if (navSpec === 'features') {
      dropdownFeatures.classList.toggle('hidden');
      hidden(dropdownFeatures);
      dropdownCompany.classList.add('hidden');
      iconCompany.src = 'images/icon-arrow-down.svg';
   };

   if (navSpec === 'company') {
      dropdownCompany.classList.toggle('hidden');
      hidden(dropdownCompany);
      dropdownFeatures.classList.add('hidden');
      iconFeature.src = 'images/icon-arrow-down.svg';
   };
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

// document.querySelector('.navigation__icon').addEventListener('click', ()=> {
//    navigation.style.display = 'hidden';
// })
