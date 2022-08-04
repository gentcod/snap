const navigation = document.querySelector('.navigation__links');
const dropdownFeatures = document.querySelector('.navigation__links-dropdown--features');
const dropdownCompany = document.querySelector('.navigation__links-dropdown--company');

navigation.addEventListener('click', function(e) {
   e.preventDefault();
   const nav = e.target.closest('.dropdown')

   //Guard clause
   if (!nav) return;

   //Specific navigation selected
   const navSpec = nav.dataset.link;
   const img = nav.closest('.navigation__links-item--icon')
   console.log(img)

   if (navSpec === 'features') {
      dropdownFeatures.classList.toggle('hidden');
      dropdownCompany.classList.add('hidden');
   };

   if (navSpec === 'company') {
      dropdownCompany.classList.toggle('hidden');
      dropdownFeatures.classList.add('hidden');
   };
})