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
    var data3 =i+1;
    console.log(data3);
    var createLi = document.createElement('li');
    console.log(document.getElementsByTagName('section'));
    console.log(createLi);
    createA=document.createElement('a');
   createA.setAttribute('id',data3.toString());
    createA.href= `#section${data3.toString()}`
    createA.setAttribute('class','menu__link');
    createA.innerText='Section '+data3.toString();
    createLi.appendChild(createA);
    var navbarUl = document.getElementById('navbar__list');
    navbarUl.appendChild(createLi);
    console.log(navbarUl);
    document.getElementById('1').classList.add('scroll__link');
}
console.log(document.getElementsByTagName('section'));

//scroll work
window.addEventListener('scroll',function(){
    y  = window.scrollY;
     if( y>=0 && y<900){
     document.getElementById('1').classList.add('scroll__link');
     document.getElementById('2').classList.remove('scroll__link');
     document.getElementById('3').classList.remove('scroll__link');
      addClassData2.classList.remove('your-active-class');
     addClassData3.classList.remove('your-active-class');
 }else if(y>= 900 && y <1300){
      addClassData2.classList.add('your-active-class');
     addClassData3.classList.remove('your-active-class');
     document.getElementById('2').classList.add('scroll__link');
     document.getElementById('1').classList.remove('scroll__link');
     document.getElementById('3').classList.remove('scroll__link');
     addClassData1.classList.remove('your-active-class');
 }else{
     addClassData1.classList.remove('your-active-class');
     document.getElementById('3').classList.add('scroll__link');
     document.getElementById('1').classList.remove('scroll__link');
     document.getElementById('2').classList.remove('scroll__link');
     addClassData2.classList.remove('your-active-class');
     addClassData3.classList.add('your-active-class');
 }
 
  console.log(Math.round(y));
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