
var createA;
var data2;
var y = window.scrollY;
var addClassData1 = document.getElementById("section1");
var addClassData2 = document.getElementById("section2");
var addClassData3 = document.getElementById("section3");
var addClassData4 = document.getElementById("section4");
var addClassData5 = document.getElementById("section5");

//navigation bar

var data = document.getElementsByTagName("section").length;
for (var i = 0; i < data; i++) {
  var data3 = i + 1;
  var createLi = document.createElement("li");
  createA = document.createElement("a");
  createA.setAttribute("id", data3.toString());
  createA.href = `#section${data3.toString()}`;
  createA.setAttribute("class", "menu__link");
  createA.innerText = "Section " + data3.toString();
  createLi.appendChild(createA);
  var navbarUl = document.getElementById("navbar__list");
  navbarUl.appendChild(createLi);
  document.getElementById("1").classList.add("scroll__link");
}


// scroll bar
window.addEventListener("scroll", function () {
  y = Math.round(window.scrollY);
  if (y <=850 ) {
    document.getElementById("4").classList.remove("scroll__link");
    document.getElementById("1").classList.add("scroll__link");
    document.getElementById("2").classList.remove("scroll__link");
    document.getElementById("3").classList.remove("scroll__link");
    document.getElementById("5").classList.remove("scroll__link");
    addClassData1.classList.add("your-active-class");
    addClassData2.classList.remove("your-active-class");
    addClassData3.classList.remove("your-active-class");
    addClassData4.classList.remove("your-active-class");
    addClassData5.classList.remove("your-active-class");
  } else if (y <= 1380) {
    document.getElementById("4").classList.remove("scroll__link");
    document.getElementById("1").classList.remove("scroll__link");
    document.getElementById("2").classList.add("scroll__link");
    document.getElementById("3").classList.remove("scroll__link");
    document.getElementById("5").classList.remove("scroll__link");
    addClassData1.classList.remove("your-active-class");
    addClassData2.classList.add("your-active-class");
    addClassData3.classList.remove("your-active-class");
    addClassData4.classList.remove("your-active-class");
    addClassData5.classList.remove("your-active-class");
  } else if(y <= 1950){
    document.getElementById("4").classList.remove("scroll__link");
    document.getElementById("1").classList.remove("scroll__link");
    document.getElementById("2").classList.remove("scroll__link");
    document.getElementById("3").classList.add("scroll__link");
    document.getElementById("5").classList.remove("scroll__link");
    addClassData1.classList.remove("your-active-class");
    addClassData2.classList.remove("your-active-class");
    addClassData3.classList.add("your-active-class");
    addClassData4.classList.remove("your-active-class");
    addClassData5.classList.remove("your-active-class");
  } else if(y <= 2540){
    document.getElementById("4").classList.add("scroll__link");
    document.getElementById("1").classList.remove("scroll__link");
    document.getElementById("2").classList.remove("scroll__link");
    document.getElementById("3").classList.remove("scroll__link");
    document.getElementById("5").classList.remove("scroll__link");
    addClassData1.classList.remove("your-active-class");
    addClassData2.classList.remove("your-active-class");
    addClassData3.classList.remove("your-active-class");
    addClassData4.classList.add("your-active-class");
    addClassData5.classList.remove("your-active-class");
  }else{
    document.getElementById("3").classList.remove("scroll__link");
    document.getElementById("1").classList.remove("scroll__link");
    document.getElementById("2").classList.remove("scroll__link");
    document.getElementById("4").classList.remove("scroll__link");
    document.getElementById("5").classList.add("scroll__link");
    addClassData5.classList.add("your-active-class");
    addClassData1.classList.remove("your-active-class");
    addClassData2.classList.remove("your-active-class");
    addClassData3.classList.remove("your-active-class");
    addClassData4.classList.remove("your-active-class");
  }
});


// Get the container element
var btnContainer = document.getElementById("navbar__list");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menu__link");

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


