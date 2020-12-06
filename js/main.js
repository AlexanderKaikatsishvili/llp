/* PRELOADER INITIATION */

$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
});


/* SCROLL TOP BUTTON INIT */

var st = $('#scroll-top');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        st.addClass('scroll-top--active');
    } else {
        st.removeClass('scroll-top--active');
    }
});

st.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});


/* SLICK SLIDER INITIATION */

$(document).ready(function(){
    $(".hero-slider").slick({
        // autoplay:true,
        autoplaySpeed:6000,
        speed:600,
        pauseOnHover: false,
        cssEase:'linear',
        fade:true,
        arrows: false,
    });

    $(".slider").slick({
        // autoplay:true,
        autoplaySpeed:10000,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        dots:true,
        pauseOnDotsHover:true,
        cssEase:'linear',
        fade:true,
        // draggable:false,
        // prevArrow:'<button class="PrevArrow"></button>',
        // nextArrow:'<button class="NextArrow"></button>',
    });
});


/* SCROLL INDICATOR */

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


/* FLIP THE PHONE'S DIVS */

$(".navbar-contacts__arrow").on('click', function(){
    $(".navbar-contacts").toggleClass("flip");
});


/* ADDING SMOOTH SCROLLING HREF */

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});


/* CHANGE COLOR OF THE LINKS AFTER SCROLLING THE PAGE */
/* MAKE THE HERO SECTION ON THE TOP OF THE PAGE */

let header = $('.header');

$(window).scroll(function(){
    if($(this).scrollTop()>=100){
        header.addClass('header--active');
    } else {
        header.removeClass('header--active');
    }
});


/* CONTAINER MARGIN BOTTOM CALCULATION */

let footer = $('.footer');
let contentWrapper = $('.content-container__wrapper');

let footerHeight = footer.outerHeight();
contentWrapper.css("margin-bottom", footerHeight);

window.addEventListener('resize', resizedFooterHeight);

function resizedFooterHeight() {
    footerHeight = footer.outerHeight();
    contentWrapper.css("margin-bottom", footerHeight);
}


/* CHANGING COLOR OF THE SOCIALS LINKS ASIDE */

let email = $('.e-mail');
let socials = $('.social-links');

let viewportHeight = $(window).height();

window.addEventListener('scroll', () => {
    if(this.scrollY > viewportHeight / 2) {
        email.addClass('e-mail-active');
        socials.addClass('social-links-active');
    } else {
        email.removeClass('e-mail-active');
        socials.removeClass('social-links-active');
    }
});


/* ORDER AND MENU BLOCKS MANIPULATIONS */

let orderBlock = $(".order__block");
let menuBlock = $(".menu__block");

$(".order__btn").on('click', function(){
    $(".order").css("z-index", "90");
    orderBlock.addClass('transition');
    $('.close').delay(1000).queue(function(){
        $( this ).addClass('d-block');
        $( this ).dequeue();
    });
    if(orderBlock.hasClass('transition')) {
        email.addClass('e-mail-active-imp');
        socials.addClass('social-links-active-imp');
    }
});

$(".close").on('click', function(){
    $(".order").delay(1000).queue(function(){
        $( this ).css("z-index", "-10");
        $( this ).dequeue();
    });
    orderBlock.removeClass('transition');
    $(".close").removeClass('d-block');
    email.removeClass('e-mail-active-imp');
    socials.removeClass('social-links-active-imp');
});

$("#menu-icon").on('click', function(){
    $(".menu").css("z-index", "90");
    $('.menu-close').delay(1000).queue(function(){
        $( this ).addClass('d-block');
        $( this ).dequeue();
    });

    menuBlock.addClass('transition');
    email.addClass('e-mail-active-imp');
    socials.addClass('social-links-active-imp-b');
});

$(".menu-close").on('click', function(){
    menuBlock.removeClass('transition');
    email.removeClass('e-mail-active-imp');
    socials.removeClass('social-links-active-imp-b');

    $(".menu").delay(1000).queue(function(){
        $( this ).css("z-index", "-10");
        $( this ).dequeue();
    });
    $(this).removeClass("d-block");
});



/* GSUP SMOOTH PAGE SCROLL */

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(".grid--dark").addClass("grid--dark-mobile");
    $("[data-aos^=fade][data-aos^=fade]").css("opacity", "1");

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
        } else {
            document.getElementById("header").style.top = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }

} else {

    /* INITIALISATION AOS PLUGIN */

    AOS.init({
        offset: -300,
        once: true,
    });


    (function() {

        const container = document.getElementById('app');

        const options = {
            onSpeedUp: (ev) => {
            },
            onSlowDown: (ev) => {
            },
            // mountainDistortion || LongRaceDistortion || xyDistortion || turbulentDistortion || turbulentDistortionStill || deepDistortionStill || deepDistortion
            distortion: LongRaceDistortion,

            length: 400,
            roadWidth: 10,
            islandWidth: 5,
            lanesPerRoad: 2,

            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,

            totalSideLightSticks: 50,
            lightPairsPerRoadWay: 70,

            // Percentage of the lane's width
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,

            /*** These ones have to be arrays of [min,max].  ***/
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],

            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],

            /****  Anything below can be either a number or an array of [min,max] ****/

            // Length of the lights. Best to be less than total length
            carLightsLength: [400 * 0.05, 400 * 0.15],
            // Radius of the tubes
            carLightsRadius: [0.05, 0.14],
            // Width is percentage of a lane. Numbers from 0 to 1
            carWidthPercentage: [0.3, 0.5],
            // How drunk the driver is.
            // carWidthPercentage's max + carShiftX's max -> Cannot go over 1.
            // Or cars start going into other lanes
            carShiftX: [-0.2, 0.2],
            // Self Explanatory
            carFloorSeparation: [0.05, 1],

            colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                backgroundCanvas: 0x111111,
                shoulderLines: 0x131318,
                brokenLines: 0x131318,
                /***  Only these colors can be an array ***/
                leftCars: [0xFF5F73, 0xE74D60, 0xff102a],
                rightCars: [0xA4E3E6, 0x80D1D4, 0x53C2C6],
                sticks: 0xA4E3E6,
            }
        };

        const myApp = new App(container, options);
        myApp.loadAssets().then(myApp.init)
    })()
}




/* YOUTUBE FRAME INITIALISATION */

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
// after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'Tj_j2Jy580s',
    });
}

function play() {
    player.playVideo();
}

function pause() {
    player.pauseVideo();
}

$('.play-button').on('click', function(){
    $('#player').css('display', 'block');
    $('.overlay').css('display', 'block');
    player.playVideo();
});

$('.overlay').on('click', function(){
    $('#player').css('display', 'none');
    $('.overlay').css('display', 'none');
    player.pauseVideo();
});