// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';



// prompt("hello");

// document.getElementsByClassName('more-line').animate(
//     { transform: ['scaleY(0)', 'scaleY(1)']},
//     { duration: 100, // Totally arbitrary!
      
//       timeline: new ScrollTimeline({
//           scrollOffsets: [
//               new CSSUnitValue(0, 'px'),
//               new CSSUnitValue(200, 'px')
//           ]
//       }),

//     });

// const lineAnimate = document.querySelector(".more-line");

// const scrollLineAnimate = new ScrollTimeline({
//     source: document.scrollingElement,
//     orientation: "block",
//     scrollOffsets: [CSS.percent(0), CSS.percent(100)],

// });

// lineAnimate.animate(
//     {
//     transform : ["scaleX(0)", "scaleX(1)"],
// },
// {
//     duration: 1,
//     timeline: scrollLineAnimate,
// }

// );




// Newsletter Popup
window.onload = function () {
setTimeout( popup , 5000);
}
function popup() {
    document.querySelector(".newsletter").classList.remove("hide");
    document.querySelector("body").classList.add("newsletter-active");
}
var reject = document.querySelector(".newsletter-cancel");
reject.addEventListener("click", deletePopup);

function deletePopup() {
  document.querySelector(".newsletter").classList.add("hide");
  document.querySelector("body").classList.remove("newsletter-active");

}





// Animation
window.addEventListener('scroll', reveal);

function reveal(){
var reveals = document.querySelectorAll('.reveal')

for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealpoint < windowheight-revealtop){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }

}

var slider = document.querySelectorAll('.slide')

for(var i = 0; i < slider.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = slider[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealpoint < windowheight-revealtop){
        slider[i].classList.add('active');
    }
    else{
        slider[i].classList.remove('active');
    }

}

var appear = document.querySelectorAll('.appear')

for(var i = 0; i < appear.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = appear[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealpoint < windowheight-revealtop){
        appear[i].classList.add('active');
    }
    else{
        appear[i].classList.remove('active');
    }

}

var grow = document.querySelectorAll('.grow')

for(var i = 0; i < grow.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = grow[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealpoint < windowheight-revealtop){
        grow[i].classList.add('active');
    }
    else{
        grow[i].classList.remove('active');
    }

}
}

// let path = document.querySelector('path')
// let pathLength = path.getTotalLength() 

// path.style.strokeDasharray = pathLength + '' + pathLength;

// path.style.strokeDashoffset = pathLength; 

// window.addEventListener('scroll', () => {

//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//     var drawLength = pathLength * scrollPercentage;

//     path.style.strokeDashoffset = pathLength - drawLength; 
// })

let size = 5;
let flag = 0;

const step = 1;

const changeHeight = () => {
    if (size >= window.innerHeight / 2 && flag === 0) {
        flag = 1;
    } else if (size <= 0 && flag === 1) {
        flag = 0;
    }

    div.style.height = "${flag ? size-=step : size+=step}px";
}
document.body.style.height= "100px";
div.style.position = "fixed";

const div = document.querySelector(".more-line");

window.addEventListener("scroll", changeHeight);