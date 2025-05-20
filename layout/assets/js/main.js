function sliderStart(){

    const Slider = $('.slider__sec .slider');
    const SliderButtons = $('.slider__sec .slider__nav .slider__btn');
    const SliderLine = $('.slider__sec .slider__line');
    const SliderArr = $('.slider__sec .slide');

    const SliderWidth = SliderLine.width();
    const SlideWidth = SliderWidth/SliderArr.length;

    SliderButtons.on('click', function(){

        let IndexBtn = SliderButtons.index(this);

        $('.slider__nav .active').removeClass('active');
        $(this).addClass('active');

        SliderLine.css('left', (SlideWidth * IndexBtn)*(-1)+"px");

    });

}

function loginRegForm(){

    const FormLogReg = $('.form__block form');
    const FormBtn = $(FormLogReg).find('.btn');
    const NavBtn = $('.login_reg__sec nav a');
    
    NavBtn.on('click', function(e){

        e.preventDefault();

        var typeForm = $(this).attr('data-form');

        $(NavBtn).filter('.active').removeClass('active');
        $(this).addClass('active');

        $(FormLogReg).attr('action', typeForm);

        typeForm == "login" ? $(FormBtn).text('авторизоваться') : $(FormBtn).text('зарегистрироваться');

    });

}

document.addEventListener('DOMContentLoaded', function(){

    $('.slider__sec') != null ? sliderStart() :'';
    $('.login_reg__sec') != null ? loginRegForm() :'';

    $('.media__nav p').click((e) => {
        if(!e.target.classList.contains('active')){
            $('.media__nav p.active').removeClass('active');
            $('.media__container .active').removeClass('active');
            e.target.classList.add('active');   
            $(`.media__container .${e.target.getAttribute('data-media')}__container`).addClass('active');
            return;
        }
    });

    $('.text__nav p').click((e) => {
        if(!e.target.classList.contains('active')){
            $('.text__nav p.active').removeClass('active');
            $('.text__container .active').removeClass('active');
            e.target.classList.add('active');   
            $(`.text__container .${e.target.getAttribute('data-text')}__container`).addClass('active');
            return;
        }
    });

    $('.profile__nav p').click((e) => {
        if(!e.target.classList.contains('active')){
            $('.profile__nav p.active').removeClass('active');
            $('.profile__container .active').removeClass('active');
            e.target.classList.add('active');   
            $(`.profile__container .${e.target.getAttribute('data-profile')}`).addClass('active');
            return;
        }
    });

})