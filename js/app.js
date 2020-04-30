
var createA;
var data2;
var y = window.scrollY;
var addClassData1 = document.getElementById("section1");
var addClassData2 = document.getElementById("section2");
var addClassData3 = document.getElementById("section3");

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

//scroll bar
window.addEventListener("scroll", function () {
  y = window.scrollY;
  if (y >= 0 && y < 900) {
    document.getElementById("1").classList.add("scroll__link");
    document.getElementById("2").classList.remove("scroll__link");
    document.getElementById("3").classList.remove("scroll__link");
    addClassData1.classList.add("your-active-class");
    addClassData2.classList.remove("your-active-class");
    addClassData3.classList.remove("your-active-class");
  } else if (y >= 900 && y < 1300) {
    addClassData2.classList.add("your-active-class");
    addClassData3.classList.remove("your-active-class");
    document.getElementById("2").classList.add("scroll__link");
    document.getElementById("1").classList.remove("scroll__link");
    document.getElementById("3").classList.remove("scroll__link");
    addClassData1.classList.remove("your-active-class");
  } else {
    addClassData1.classList.remove("your-active-class");
    document.getElementById("3").classList.add("scroll__link");
    document.getElementById("1").classList.remove("scroll__link");
    document.getElementById("2").classList.remove("scroll__link");
    addClassData2.classList.remove("your-active-class");
    addClassData3.classList.add("your-active-class");
  }
});
