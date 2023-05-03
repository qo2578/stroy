$(document).ready(function () {
    $('.accordion').click(function () {
        $(this).toggleClass('active')
    });
    $('.burger-menu').on('click', function(){
        $('.header-bottom').toggleClass('active')
        $('.burger-menu').toggleClass('active')
    })
})

// const accArr = Array.from(document.getElementsByClassName('accordion'))

// accArr.map((el) => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('active')
//     })
// })