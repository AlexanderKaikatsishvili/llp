/* PRELOADER INITIATION */

// $(window).on('load', function() {
//     $('.preloader').delay(2000).fadeOut('slow');
// });


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
let heroSection = $('.hero-section');

window.addEventListener('scroll', () => {
    if(this.scrollY > 0) {
        header.addClass('header--active');
        // heroSection.css('z-index', 'unset');
    } else {
        header.removeClass('header--active');
        // heroSection.css('z-index', '20');
    }
});


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
    $(".order").css("z-index", "30");
    orderBlock.addClass('transition');
    $('.close').delay(1000).queue(function(){
        $( this ).addClass('d-block');
        $( this ).dequeue();
    });
    if(orderBlock.hasClass('transition')) {
        email.addClass('e-mail-active-imp');
        socials.addClass('social-links-active-imp');
        // header.addClass('header--active');
    }
});

$(".close").on('click', function(){
    $(".order").delay(1000).queue(function(){
        $( this ).css("z-index", "inherit");
        $( this ).dequeue();
    });
    orderBlock.removeClass('transition');
    $(".close").removeClass('d-block');
    email.removeClass('e-mail-active-imp');
    socials.removeClass('social-links-active-imp');
});

$("#menu-icon").on('click', function(){
    $(this).addClass('open');
    $(".menu").addClass("z-index");
    $("#menu-icon-wrapper").addClass("d-block");

    menuBlock.addClass('transition');
    email.addClass('e-mail-active-imp');
    socials.addClass('social-links-active-imp-b');
});

$("#menu-icon-wrapper").on('click', function(){
    $("#menu-icon").removeClass('open');
    menuBlock.removeClass('transition');
    email.removeClass('e-mail-active-imp');
    socials.removeClass('social-links-active-imp-b');
    $(".menu").delay(1000).queue(function(){
        $( this ).removeClass("z-index");
        $( this ).dequeue();
    });
    $(this).removeClass("d-block");
});



/* INITIALISATION AOS PLUGIN */

AOS.init({
    offset: -200,
    once: true,
});


/* GSUP SMOOTH PAGE SCROLL */

let html = document.documentElement;
let body = document.body;

let scroller = {
    target: document.querySelector(".content-container"),
    ease: 0.07, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0,
};

let requestId = null;

TweenLite.set(scroller.target, {
    force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {
    updateScroller();
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);
}

function updateScroller() {

    let resized = scroller.resizeRequest > 0;

    if (resized) {
        let height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
    }

    let scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
    }

    TweenLite.set(scroller.target, {
        y: -scroller.y
    });

    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
}

function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
    }
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


/* LAX PLUGIN INITIALIZATION */

// window.onload = function() {
//     lax.setup(); // init
//
//     const updateLax = () => {
//         lax.update(window.scrollY);
//         window.requestAnimationFrame(updateLax);
//     };
//
//     window.requestAnimationFrame(updateLax);
// };


/* CURSOR */

// Cursor animations

// Utilities
// const MathUtils = {
//     lineEq: (y2, y1, x2, x1, currentVal) => {
//         // y = mx + b
//         let m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
//         return m * currentVal + b;
//     },
//     lerp: (a, b, n) =>  (1 - n) * a + n * b
// };
//
// // Window size
// let winsize;
// const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
// calcWinsize();
// window.addEventListener('resize', calcWinsize);
//
// // Mouse Position -> Edited
// const getMousePos = (ev) => {
//     let posx = 0;
//     let posy = 0;
//     if (!ev) ev = window.event;
//     if (ev.pageX || ev.pageY) {
//         posx = ev.clientX;
//         posy = ev.clientY;
//     }
//     else if (ev.clientX || ev.clientY)  {
//         posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
//         posy = ev.clientY + body.scrollTop + docEl.scrollTop;
//     }
//     return {x: posx, y: posy};
// };
//
// // Track the mouse position
// let mousePos = {x: winsize.width/2, y: winsize.height/2};
// window.addEventListener('mousemove', ev => mousePos = getMousePos(ev));
//
// // Custom mouse cursor -> edited
// class CursorFx {
//     constructor(el) {
//         this.DOM = {el: el};
//         this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
//         this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot');
//         this.DOM.text = this.DOM.el.querySelector('.cursor__inner--text');
//         this.DOM.arrow = this.DOM.el.querySelector('.cursor__inner--text::after');
//
//         this.bounds = {
//             dot: this.DOM.dot.getBoundingClientRect(),
//             circle: this.DOM.circle.getBoundingClientRect(),
//             text: this.DOM.text.getBoundingClientRect()
//         };
//
//         this.scale = 1;
//         this.lastScale = 1;
//         this.opacity = 1;
//         this.lastOpacity = 1;
//         this.textOpacity = 1;
//         this.lastTextOpacity = 0;
//
//         this.mousePos = {x:0, y:0};
//         this.lastMousePos = {
//             circle: {x: mousePos.x - this.bounds.circle.width/1.5, y: mousePos.y - this.bounds.circle.height/2},
//             dot: {x: mousePos.x - this.bounds.dot.width/2, y: mousePos.y - this.bounds.dot.height/2},
//             text: {x: mousePos.x - this.bounds.text.width/2, y: mousePos.y - this.bounds.text.height/2}
//         };
//
//         requestAnimationFrame(() => this.render());
//     }
//     render() {
//         // Mouse movement distance on the x-axis
//         const diff = this.lastMousePos.circle.x - (mousePos.x - this.bounds.circle.width/2);
//         // Check if mouse is on the right side of the viewport
//         const rightSide = mousePos.x >= winsize.width/1;
//         // The position of the figure/circle and the viewport side will determine the speed for both of these elements
//         const lerpFactor = {
//             circle: rightSide ? diff < 0 ? 0.15 : 0.1 : diff < 0 ? 0.1 : 0.15,
//             dot: rightSide ? diff < 0 ? 1 : 1 : diff < 0 ? 1 : 1,
//             text: rightSide ? diff < 0 ? 1 : 1 : diff < 0 ? 1 : 1
//         };
//
//         // Update the mouse position values given the previous calculated lerp value
//         this.lastMousePos.circle.x = MathUtils.lerp(this.lastMousePos.circle.x, mousePos.x - this.bounds.circle.width/2, lerpFactor.circle);
//         this.lastMousePos.circle.y = MathUtils.lerp(this.lastMousePos.circle.y, mousePos.y - this.bounds.circle.height/2, lerpFactor.circle);
//         this.lastMousePos.dot.x = MathUtils.lerp(this.lastMousePos.dot.x, mousePos.x - this.bounds.dot.width/2, lerpFactor.dot);
//         this.lastMousePos.dot.y = MathUtils.lerp(this.lastMousePos.dot.y, mousePos.y - this.bounds.dot.height/2, lerpFactor.dot);
//         this.lastMousePos.text.x = MathUtils.lerp(this.lastMousePos.text.x, mousePos.x - this.bounds.text.width/2, lerpFactor.text);
//         this.lastMousePos.text.y = MathUtils.lerp(this.lastMousePos.text.y, mousePos.y - this.bounds.text.height/2, lerpFactor.text);
//
//         // Also the scale and opacity values for the circle
//         this.lastScale = MathUtils.lerp(this.lastScale, this.scale, 0.15);
//         this.lastOpacity = MathUtils.lerp(this.lastOpacity, 1, 0.1);
//         this.lastTextOpacity = MathUtils.lerp(this.lastTextOpacity, this.textOpacity, 0);
//
//         // Apply the styles
//         this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.circle.x)}px) translateY(${this.lastMousePos.circle.y}px) scale(${this.lastScale})`;
//         this.DOM.dot.style.transform = `translateX(${(this.lastMousePos.dot.x)}px) translateY(${this.lastMousePos.dot.y}px) scale(${this.lastScale})`;
//         this.DOM.text.style.transform = `translateX(${(this.lastMousePos.text.x)}px) translateY(${this.lastMousePos.text.y}px) scale(${this.lastScale})`;
//         this.DOM.circle.style.opacity = this.lastOpacity;
//         this.DOM.text.style.opacity = this.lastTextOpacity;
//
//         requestAnimationFrame(() => this.render());
//     }
//     enter() {
//         cursor.scale = 1.3;
//     }
//     leave() {
//         cursor.scale = 1;
//     }
//     click() {
//         // Scales down and fades out the mouse circle
//         this.lastScale = .5;
//         this.lastOpacity = 0;
//     }
//     textEnter() {
//         cursor.scale = 2;
//         this.lastTextOpacity = 1;
//         this.DOM.circle.style.display = "none";
//         this.DOM.dot.style.display = "none";
//     }
//
//     textEnterBlueSection() {
//         this.DOM.circle.style.border = "1px solid #fff";
//         this.DOM.dot.style.background = "#fff";
//     }
//
//     textEnterBlue() {
//         cursor.scale = 1.25;
//         this.lastTextOpacity = 1;
//         this.DOM.text.style.color = "#fff";
//         this.DOM.circle.style.display = "none";
//         this.DOM.dot.style.display = "none";
//     }
//
//     textLeave() {
//         cursor.scale = 1;
//         this.lastTextOpacity = 0;
//         this.DOM.circle.style.display = "block";
//         this.DOM.dot.style.display = "block";
//     }
//
//     textLeaveBlueSection() {
//         this.DOM.circle.style.border = "1px solid #023da7";
//         this.DOM.dot.style.background = "#023da7";
//     }
//
//     textLeaveBlue() {
//         cursor.scale = 1;
//         this.lastTextOpacity = 0;
//         this.DOM.text.style.color = "#111";
//         this.DOM.circle.style.display = "block";
//         this.DOM.dot.style.display = "block";
//     }
// }
//
// // Custom cursor changes state when hovering on elements with 'data-section-blue'.
// [...document.querySelectorAll('[data-section-blue]')].forEach((link) => {
//     link.addEventListener('mouseenter', () => cursor.textEnterBlueSection() );
//     link.addEventListener('mouseleave', () => cursor.textLeaveBlueSection() );
//     link.addEventListener('click', () => cursor.click() );
// });
//
// // Custom cursor chnages state when hovering on elements with 'data-hover'.
// [...document.querySelectorAll('[data-hover]')].forEach((link) => {
//     link.addEventListener('mouseenter', () => cursor.enter() );
//     link.addEventListener('mouseleave', () => cursor.leave() );
//     link.addEventListener('click', () => cursor.click() );
// });
//
// // Custom cursor changes state when hovering on elements with 'data-textHover'.
// [...document.querySelectorAll('[data-textHover]')].forEach((link) => {
//     link.addEventListener('mouseenter', () => cursor.textEnter() );
//     link.addEventListener('mouseleave', () => cursor.textLeave() );
//     link.addEventListener('click', () => cursor.click() );
// });
//
// // Custom cursor changes state when hovering on elements with 'data-textHover'.
// [...document.querySelectorAll('[data-textHover-blue]')].forEach((link) => {
//     link.addEventListener('mouseenter', () => cursor.textEnterBlue() );
//     link.addEventListener('mouseleave', () => cursor.textLeaveBlue() );
//     link.addEventListener('click', () => cursor.click() );
// });
//
//
//
// document.addEventListener('click', () => cursor.click() );
//
//
//
//
//
// function is_touch_device() {
//     let prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
//     let mq = function(query) {
//         return window.matchMedia(query).matches;
//     }
//
//     if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
//         return true;
//     }
//
//     // include the 'heartz' as a way to have a non matching MQ to help terminate the join
//     // https://git.io/vznFH
//     let query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
//     return mq(query);
// }
//
// let cursor;
//
// if (is_touch_device()) {
//     document.querySelector('.cursor').style.display = "none";
// } else {
//     document.querySelector('.cursor').style.display = "block";
//     // Init custom cursor
//     cursor = new CursorFx(document.querySelector('.cursor'));
// }