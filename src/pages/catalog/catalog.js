$(document).ready(function() {
    $('ul.catalog-tabs__caption').on('click', 'li:not(.catalog-tabs__btn_active)', function() {
        $(this)
          .addClass('.catalog-tabs__btn_active').siblings().removeClass('.catalog-tabs__btn_active')
          .closest('div.catalog-tabs').find('div.catalog-tabs__content').removeClass('catalog-tabs__content_active').eq($(this).index()).addClass('catalog-tabs__content_active');
      });
})