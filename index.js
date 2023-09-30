const Line1 = document.getElementById("Line1");
const Line2 = document.getElementById("Line2");
const Line3 = document.getElementById("Line3");
const Line4 = document.getElementById("Line4");

const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");
const circle5 = document.getElementById("circle5");

let circle1Bottom = circle1.style.bottom;
circle1Bottom = circle1Bottom.replace("%", "");
Line1.y1.baseVal.value =((-2.5) * circle1Bottom + 254)  ;

let circle2Bottom = circle2.style.bottom;
circle2Bottom = circle2Bottom.replace("%", "");
Line1.y2.baseVal.value =((-2.5) * circle2Bottom + 254)  ;
Line2.y1.baseVal.value = ((-2.5) * circle2Bottom + 254) ;

let circle3Bottom = circle3.style.bottom;
circle3Bottom = circle3Bottom.replace("%", "");
Line2.y2.baseVal.value =((-2.5) * circle3Bottom + 254)  ;
Line3.y1.baseVal.value = ((-2.5) * circle3Bottom + 254) ;

let circle4Bottom = circle4.style.bottom;
circle4Bottom = circle4Bottom.replace("%", "");
Line3.y2.baseVal.value =((-2.5) * circle4Bottom + 254)  ;
Line4.y1.baseVal.value = ((-2.5) * circle4Bottom + 254) ;

let circle5Bottom = circle5.style.bottom;
circle5Bottom = circle5Bottom.replace("%", "");
Line4.y2.baseVal.value =((-2.5) * circle5Bottom + 254)  ;
