$(document).ready(function() {
    $('ul.brand-tabs__caption').on('click', 'li:not(.brand-tabs__btn_active)', function() {
        $(this)
          .addClass('.brand-tabs__btn_active').siblings().removeClass('.brand-tabs__btn_active')
          .closest('div.brand-tabs').find('div.brand-tabs__content').removeClass('brand-tabs__content_active').eq($(this).index()).addClass('brand-tabs__content_active');
      });

})

const brandTabs = document.querySelector('.brand-tabs');
const firstLi = brandTabs.querySelector('.brand-tabs__btn:first-child');

firstLi.addEventListener('click', function() {
  const allContent = document.querySelectorAll('.brand-tabs__content');
  allContent.forEach(function(content) {
    content.style.display = 'block';
  });
});