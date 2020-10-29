// Menu active
const MENU = document.getElementById('navmain');
MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById('overlay-tint').classList.add('hidden');
    document.getElementById('burger-menu').classList.remove('move');
    document.getElementById('menu-icon').classList.remove('doun');
    document.getElementById('button').classList.remove('rotate');
    document.getElementById('h1').classList.remove('hidden');
});

// Menu burger
const MENUC = document.getElementById('button');
MENUC.addEventListener('click', () =>{
    if(MENUC.getAttribute('class') == 'rotate') {
        document.getElementById('overlay-tint').classList.add('hidden');
        document.getElementById('burger-menu').classList.remove('move');
        document.getElementById('menu-icon').classList.remove('doun');
        document.getElementById('button').classList.remove('rotate');
        document.getElementById('h1').classList.remove('hidden');
    } else {
    document.getElementById('h1').classList.add('hidden');
    document.getElementById('overlay-tint').classList.remove('hidden');
    document.getElementById('burger-menu').classList.add('move');
    document.getElementById('menu-icon').classList.add('doun');
    MENUC.classList.add('rotate');
    }
});

window.addEventListener(`resize`, event => {
    if(window.innerWidth > 768 && (MENUC.getAttribute('class') == 'rotate')) {
        document.getElementById('overlay-tint').classList.add('hidden');
        document.getElementById('burger-menu').classList.remove('move');
        document.getElementById('menu-icon').classList.remove('doun');
        document.getElementById('button').classList.remove('rotate');
        document.getElementById('h1').classList.remove('hidden');
    }


});

let heightHeader = 95;
document.addEventListener('scroll', onScroll);
    function onScroll() {
    const POS = window.scrollY;
    const DIVS = document.querySelectorAll('main>div');
    if(window.innerWidth > 768) {
        heightHeader = 95;
    } else {
        heightHeader = 76;
    }

    DIVS.forEach((el) => {
        if(el.offsetTop - heightHeader <= POS && (el.offsetTop - heightHeader + el.offsetHeight) > POS){
            MENU.querySelectorAll('a').forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('class').slice(0, 4) === a.getAttribute('class').slice(0, 4)) {
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
let a = 0;
let arr2 = [];
for(var i = arr1.length - 1; i >= 0; i--){
        arr2[i] = a;
}
TAB.querySelectorAll('li').forEach(el => {
el.addEventListener('click', (event) =>{
    TAB.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    MIXED.querySelectorAll('img').forEach(el => el.remove());
    for (var i = arr1.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    while (i < arr1.length) {
        var j = Math.floor(Math.random() * (arr1.length));
        if (arr2[j] == a){
            arr2[j] = a + 1;
            MIXED.prepend(arr1[j]);
            ++i;
        }
    }
    ++a;   
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
    if(SLIDE1.getAttribute('class').indexOf('top', 0) > 0) {
        SLIDE1.classList.remove('top');
        SLIDE2.classList.add('left');
        SLIDE2.classList.add('top');
        setTimeout(() => { 
            SLIDE1.classList.remove('left');
            SLIDE1.classList.remove('right');}, 1500);
        } else {
            SLIDE2.classList.remove('top');
            SLIDE1.classList.add('left');
            SLIDE1.classList.add('top');
            setTimeout(() => { 
                SLIDE2.classList.remove('right');
                SLIDE2.classList.remove('left'); }, 1500);
        }
};

function clickLeft (){
    if(SLIDE1.getAttribute('class').indexOf('top', 0) > 0) {
        SLIDE1.classList.remove('top');
        SLIDE2.classList.add('right');
        SLIDE2.classList.add('top');
        setTimeout(() => { 
            SLIDE1.classList.remove('left');
            SLIDE1.classList.remove('right');}, 1500);
        } else {
            SLIDE2.classList.remove('top');
            SLIDE1.classList.add('right');
            SLIDE1.classList.add('top');
            setTimeout(() => { 
                SLIDE2.classList.remove('right');
                SLIDE2.classList.remove('left'); }, 1500);
        }
};

let autoClick = setInterval(clickRight, 7000);
RIGHT.addEventListener('click', () =>{
    clearInterval(autoClick);
    clickRight();
    autoClick = setInterval(clickRight, 7000);
});

LEFT.addEventListener('click', () =>{
    clearInterval(autoClick);
    clickLeft();
    autoClick = setInterval(clickLeft, 7000);
});

// Display phone active
const PHONEV = document.getElementById('phone-vertical');
const DISPLAY = document.getElementById('vertical-display');
PHONEV.addEventListener('click', () =>{
    if(DISPLAY.getAttribute('class').indexOf('hidden', 0) > 0) {
        DISPLAY.classList.remove('hidden');
    } else {
        DISPLAY.classList.add('hidden');
    }
});