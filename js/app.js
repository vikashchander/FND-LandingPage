
// Get the container element
var btnContainer = document.getElementById("navbar__list");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menu__link");
var addClassData1 = document.getElementById("section1");
var addClassData2 = document.getElementById("section2");
var addClassData3 = document.getElementById("section3");
var addClassData4 = document.getElementById("section4");
var addClassData5 = document.getElementById("section5");

//navigation bar

var data = document.getElementsByTagName("section").length;
for (var i = 0; i < data; i++) {
  let  data3 = i + 1;
  let createLi = document.createElement("li");
  let  createA = document.createElement("a");
  createA.setAttribute("id", data3.toString());
  createA.href = `#section${data3.toString()}`;
  createA.setAttribute("class", "menu__link");
  createA.innerText = "Section " + data3.toString();
  createLi.appendChild(createA);
  let navbarUl = document.getElementById("navbar__list");
  navbarUl.appendChild(createLi);
  document.getElementById("1").classList.add("scroll__link");
}


// scroll bar
window.addEventListener("scroll", function () {
  let y = Math.round(window.scrollY);
  if (y <=850 ) {
    removeClassElements();
    document.getElementById("1").classList.add("scroll__link");
    addClassData1.classList.add("your-active-class");
  } else if (y <= 1380) {
    removeClassElements();
    document.getElementById("2").classList.add("scroll__link");
    addClassData2.classList.add("your-active-class");
  } else if(y <= 1950){
    removeClassElements();
    document.getElementById("3").classList.add("scroll__link");
    addClassData3.classList.add("your-active-class");
  } else if(y <= 2540){
    removeClassElements();
    document.getElementById("4").classList.add("scroll__link");
    addClassData4.classList.add("your-active-class");
  }else{
    removeClassElements();
    document.getElementById("5").classList.add("scroll__link");
    addClassData5.classList.add("your-active-class");
  }
});


// Loop through the buttons and add the scroll__link class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName(" scroll__link");
   
    // If there's no scroll__link class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" scroll__link", "");
    }

    // Add the scroll__link class to the current/clicked button
    this.className += " scroll__link";     
  });
}

function removeClassElements(){
  let dataNavbar =document.getElementsByTagName('a');
  let dataSections = document.getElementsByTagName('section');
  //console.log(dataSections);

  for(let i=0; i<dataNavbar.length; i++){
    let data = `section${i+1}`;
    // console.log(data);
    // console.log(document.getElementById(data));
    if(document.getElementById(data).classList.contains('your-active-class')){
      document.getElementById(data).classList.remove('your-active-class')
    }
    if(dataNavbar[i].classList.contains("scroll__link"))
       dataNavbar[i].classList.remove("scroll__link")
  }
}
