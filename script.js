// Menu active
const MENU = document.getElementById('navmain');
const DIVS = document.querySelectorAll('main>div');

MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    event.target.classList.add('active');

    let scrollshift = document.querySelector('header').offsetHeight;
    DIVS.forEach((el) => {
        if (el.id === event.target.id) window.scrollTo(0, el.offsetTop - scrollshift)
    });

    closeBurger();
});

// Menu burger
const MENUC = document.getElementById('button');

MENUC.addEventListener('click', () => toggleBurger());

function toggleBurger(){
    document.getElementById('h1').classList.toggle('hidden');
    document.getElementById('overlay-tint').classList.toggle('hidden');
    document.getElementById('burger-menu').classList.toggle('move');
    document.getElementById('menu-icon').classList.toggle('doun');
    MENUC.classList.toggle('rotate');
}
function closeBurger(){
    document.getElementById('overlay-tint').classList.add('hidden');
    document.getElementById('burger-menu').classList.remove('move');
    document.getElementById('menu-icon').classList.remove('doun');
    document.getElementById('button').classList.remove('rotate');
    document.getElementById('h1').classList.remove('hidden');
}

window.addEventListener(`resize`, event => {
    if(window.innerWidth > 767 && MENUC.classList.contains('rotate')) {
        closeBurger();
    }
});

document.addEventListener('scroll', onScroll);
function onScroll() {
    const POS = window.scrollY;
    let heightHeader = document.querySelector('header').offsetHeight;

    DIVS.forEach((el) => {
        if(el.offsetTop - heightHeader <= POS && (el.offsetTop - heightHeader + el.offsetHeight) > POS){
            MENU.querySelectorAll('a').forEach((a) => {
                a.classList.remove('active');
                if (el.id === a.id) {
                    a.classList.add('active');
                }
            })
        }
    });
}

// Menu tab
const TAB = document.getElementById('tab');
const MIXED = document.getElementById('grid2');
let arr1 = MIXED.querySelectorAll('img');

TAB.querySelectorAll('li').forEach(el => {
    el.addEventListener('click', (event) =>{
        TAB.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        event.target.classList.add('active');
        MIXED.querySelectorAll('img').forEach(el => el.remove());
        
        let arr2 = [];
        let i = 0;    
        while (i < arr1.length) {
            var j = Math.floor(Math.random() * (arr1.length));
            if (!arr2[j]){
                arr2[j] = 1;
                MIXED.prepend(arr1[j]);
                ++i;
            }
        }
    });
});

// Border portfolio
MIXED.querySelectorAll('img').forEach(el => {
el.addEventListener('click', (event) => {
    MIXED.querySelectorAll('img').forEach(el => el.classList.remove('border-img'));
        event.target.classList.add('border-img');
    });
});

// SLIDER
const LEFT = document.getElementById('arrow-left');
const RIGHT = document.getElementById('arrow-right');
const SLIDE1 = document.getElementById('slide-1');
const SLIDE2 = document.getElementById('slide-2');

function clickRight (){
    if(SLIDE1.classList.contains('top')) {
        SLIDE1.classList.remove('top');
        SLIDE2.classList.add('left');
        SLIDE2.classList.add('top');
        timeoutSlider();
        setTimeout(() => removeLeftRightClassFromSlide(), 1500);
        } else {
            SLIDE2.classList.remove('top');
            SLIDE1.classList.add('left');
            SLIDE1.classList.add('top');
            timeoutSlider();
            setTimeout(() => removeLeftRightClassFromSlide(), 1500);
        }
};

function clickLeft (){
    if(SLIDE1.classList.contains('top')) {
        SLIDE1.classList.remove('top');
        SLIDE2.classList.add('right');
        SLIDE2.classList.add('top');
        timeoutSlider();
        setTimeout(() => removeLeftRightClassFromSlide(), 1500);
        } else {
            SLIDE2.classList.remove('top');
            SLIDE1.classList.add('right');
            SLIDE1.classList.add('top');
            timeoutSlider();
            setTimeout(() => removeLeftRightClassFromSlide(), 1500);
        }
};
function removeLeftRightClassFromSlide (){
    SLIDE1.classList.remove('left');
    SLIDE1.classList.remove('right');
    SLIDE2.classList.remove('right');
    SLIDE2.classList.remove('left');
}

let timeoutSliderBool = true;
let autoClick = setInterval(clickRight, 7000);
RIGHT.addEventListener('click', () =>{
    if(!timeoutSliderBool) return;
    clearInterval(autoClick);
    clickRight();
    autoClick = setInterval(clickRight, 7000);
});

LEFT.addEventListener('click', () =>{
    if(!timeoutSliderBool) return;
    clearInterval(autoClick);
    clickLeft();
    autoClick = setInterval(clickLeft, 7000);
});

function timeoutSlider() {
    timeoutSliderBool = false;
    setTimeout(() => timeoutSliderBool = true, 1500);
}

// Display phone active
const PHONEV = document.getElementById('phone-vertical');
const DISPLAY = document.getElementById('vertical-display');
PHONEV.addEventListener('click', () =>{
        DISPLAY.classList.toggle('hidden');
});