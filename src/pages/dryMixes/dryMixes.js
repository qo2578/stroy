$(document).ready(function() {
    $('ul.dryMixes-tabs__caption').on('click', 'li:not(dryMixes-tabs__btn_active)', function() {
        $(this)
          .addClass('dryMixes-tabs__btn_active').siblings().removeClass('dryMixes-tabs__btn_active')
          .closest('div.dryMixes-tabs').find('div.dryMixes-tabs__content').removeClass('dryMixes-tabs__content_active').eq($(this).index()).addClass('dryMixes-tabs__content_active');
      });
})