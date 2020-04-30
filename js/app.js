/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// var createLi = document.createElement('li');
// console.log(createLi);
// var createA=document.createElement('a');
// createA.setAttribute('class','menu__link');
// createA.innerText= 'Section 1';
// createLi.appendChild(createA);
// var navbarUl = document.getElementById('navbar__list');
// navbarUl.appendChild(createLi);
// console.log(navbarUl);
var createA;
var data2;
//var data = document.getElementById('section1').attributes[1].value;
var y = window.scrollY;
var addClassData1 = document.getElementById('section1');
var addClassData2 = document.getElementById('section2');
var addClassData3 = document.getElementById('section3');
console.log(addClassData3);

var data = document.getElementsByTagName('section').length;
for(var i=0; i<data; i++){
     data2 =document.getElementsByTagName('section')[i].id;
    var createLi = document.createElement('li');
    console.log(createLi);
    createA=document.createElement('a');
    createA.setAttribute('id',data2.toString());
    createA.href= `#${data2.toString()}`
    createA.setAttribute('class','menu__link');
    createA.innerText=data2;
    createLi.appendChild(createA);
    var navbarUl = document.getElementById('navbar__list');
    navbarUl.appendChild(createLi);
    console.log(navbarUl);
    document.getElementById('section1').classList.add('scroll__link');
}
console.log(document.getElementsByTagName('section'));

//scroll work
window.addEventListener('scroll',function(){
    y  = window.scrollY;
     if( y>=0 && y<900){
     document.getElementById('section1').classList.add('scroll__link');
     document.getElementById('section2').classList.remove('scroll__link');
     document.getElementById('section3').classList.remove('scroll__link');
      addClassData2.classList.remove('your-active-class');
     addClassData3.classList.remove('your-active-class');
 }else if(y>= 900 && y <1300){
      addClassData2.classList.add('your-active-class');
     addClassData3.classList.remove('your-active-class');
     document.getElementById('section2').classList.add('scroll__link');
     document.getElementById('section1').classList.remove('scroll__link');
     document.getElementById('section3').classList.remove('scroll__link');
     addClassData1.classList.remove('your-active-class');
 }else{
     addClassData1.classList.remove('your-active-class');
     document.getElementById('section3').classList.add('scroll__link');
     document.getElementById('section1').classList.remove('scroll__link');
     document.getElementById('section2').classList.remove('scroll__link');
     addClassData2.classList.remove('your-active-class');
     addClassData3.classList.add('your-active-class');
 }
 
  console.log(Math.round(y));
 })

function smoothScroll(target,duration){
    var target = document.getElementById(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startposition =window.pageYOffset;
    var distance = targetPosition-startposition;
    var startTime= null;
    function animation(currentTime){
        if(startTime ===null)startTime =currentTime;
        var timeElapsed = currentTime-startTime;
        var run =ease(timeElapsed,startposition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed <duration) requestAnimationFrame(animation)
    }
    function ease(t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };
    requestAnimationFrame(animation);
    
}

 var section1 = document.getElementById('section1');
 
 addClassData1.addEventListener('click',function(){
     smoothScroll('section1',1000);
     console.log('vikash');
 })



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active