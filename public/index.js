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
// button animation//
let btn = document.querySelector(".button")

document.addEventListener("mouseover", function() {
  btn.classList.add("over");
})

// Landing Page Animation  //
let div1 = document.querySelector(".landing-1");
let div2 = document.querySelector(".landing-2");
let timer;

document.addEventListener("mousemove", function() {
  clearTimeout(timer);
  timer = setTimeout(rotateDiv, 10000);
});

function rotateDiv() {
  if(div1.classList.contains("active")){
    div1.classList.remove("active");
    div1.classList.add("inactive");
    div2.classList.remove("inactive");
    div2.classList.add("active");
  } else {
    div1.classList.remove("inactive");
    div1.classList.add("active");
    div2.classList.remove("active");
    div2.classList.add("inactive");
  }
}

div1.addEventListener("click", function() {
  if(div1.classList.contains("active")){
    div1.classList.remove("active");
    div1.classList.add("inactive");
    div2.classList.remove("inactive");
    div2.classList.add("active");
  } else {
    div1.classList.remove("inactive");
    div1.classList.add("active");
    div2.classList.remove("active");
    div2.classList.add("inactive");
  }
})

div2.addEventListener("click", function() {
  if(div2.classList.contains("active")){
    div2.classList.remove("active");
    div2.classList.add("inactive");
    div1.classList.remove("inactive");
    div1.classList.add("active");
  } else {
    div2.classList.remove("inactive");
    div2.classList.add("active");
    div1.classList.remove("active");
    div1.classList.add("inactive");
  }
})


// Navbar//
var prevScrollpos = window.pageYOffset;


window.onscroll = function() {
  var currentscrollpos = window.pageYOffset;

  if (prevScrollpos> currentscrollpos) {
    document.querySelector(".navbar").classList.add("visible");
  } else {
    document.querySelector(".navbar").classList.remove("visible")
  }
  prevScrollpos = currentscrollpos;
}


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



// var zoom = document.querySelectorAll('.zoom')

// for(var i = 0; i < zoom.length; i++){
//     var windowheight = window.innerHeight;
//     var revealtop = zoom[i].getBoundingClientRect().top;
//     var revealpoint = 150;

//     let zooms = 1;

//     const zoomSpeed = 0.1;

//     if(revealpoint < windowheight-revealtop){
//         zoom[i].classList.add('active');
//     }
//     else{
//         zoom[i].classList.remove('active');
//     }

// }
}


// CTA Zoom animation//

// function zoom() {
// const zoomElement = document.querySelector(".follow-up-cta");

// let zoom = 1;

// const zoomSpeed = 0.1;

// document.addEventListener("wheel", function(e){
//     if(e.deltaY > 100){    
//         zoomElement.style.transform = `scale(${zoom += zoomSpeed})`;  
//     }else{    
//         zoomElement.style.transform = `scale(${zoom -= zoomSpeed})`;  }

// });
// }


// Intersection Observer//
// const numSteps = 100.0;

// let boxElement;
// let prevRatio = 0.0;
// let increasingWidth = "ratio";
// let decreasingWidth =  "ratio";

// window.addEventListener("load", (event)=> {
//     boxElement = document.querySelector(".follow-up-img");

//     createObserver();
// },
// false
// );

// function createObserver() {
//     let observer;

//     let options = {
//         root : null,
//         rootMargin : "0px",
//         treshold : buildThresholdList(),
//     };

//     observer = new IntersectionObserver(handleIntersect, options);

//     observer.observe(boxElement);
// }

// function buildThresholdList() {
//     let tresholds = [];
//     let numSteps = 20;

//     for ( let i = 1; i <= numSteps; i++){
//         let ratio = i / numSteps;
//         tresholds.push(ratio);
//     }

//     tresholds.push(0);
//     return tresholds;
// }

// function handleIntersect(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.intersectionRatio > prevRatio){
//             entry.target.style.width = increasingWidth.replace("ratio", entry.intersectionRatio);
//         } else{
//             entry.target.style.width = decreasingWidth.replace("ratio", entry.intersectionRatio);
//         }

//         prevRatio = entry.intersectionRatio;
//     });
// }

// Copied //
// Higher number = more zoom
let scaleAmount = 0.3;

function scrollZoom() {
  const images = document.querySelectorAll("[data-scroll-zoom]");
  let scrollPosY = 0;
  scaleAmount = scaleAmount / 100;

  const observerConfig = {
    rootMargin: "0% 0% 0% 0%",
    threshold: 0
  };

  // Create separate IntersectionObservers and scroll event listeners for each image so that we can individually apply the scale only if the image is visible
  images.forEach(image => {
    let isVisible = false;
    const observer = new IntersectionObserver((elements, self) => {
      elements.forEach(element => {
        isVisible = element.isIntersecting;
      });
    }, observerConfig);

    observer.observe(image);

    // Set initial image scale on page load
    image.style.transform = `scale(${1 + scaleAmount * percentageSeen(image)})`;

    // Only fires if IntersectionObserver is intersecting
    window.addEventListener("scroll", () => {
      if (isVisible) {
        scrollPosY = window.pageYOffset;
        image.style.transform = `scale(${1 +
          scaleAmount * percentageSeen(image)})`;
      }
    });
  });

  // Calculates the "percentage seen" based on when the image first enters the screen until the moment it leaves
  // Here, we get the parent node position/height instead of the image since it's in a container that has a border, but
  // if your container has no extra height, you can simply get the image position/height
  function percentageSeen(element) {
    const parent = element.parentNode;
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const elPosY = parent.getBoundingClientRect().top + scrollY;
    const borderHeight = parseFloat(getComputedStyle(parent).getPropertyValue('border-bottom-width')) + parseFloat(getComputedStyle(element).getPropertyValue('border-top-width'));
    const elHeight = parent.offsetHeight + borderHeight;

    if (elPosY > scrollY + viewportHeight) {
      // If we haven't reached the image yet
      return 0;
    } else if (elPosY + elHeight < scrollY) {
      // If we've completely scrolled past the image
      return 100;
    } else {
      // When the image is in the viewport
      const distance = scrollY + viewportHeight - elPosY;
      let percentage = distance / ((viewportHeight + elHeight) / 100);
      percentage = Math.round(percentage);

      return percentage;
    }
  }
}

scrollZoom();


//Gallery Slideshow//





// //Get the date the form was created
// document.querySelector(".post-submit").addEventListener("click" , function() { 
//     var date = new Date(document.querySelector(".post-form").val()); 
//    var day = date.getDate(); 
//   var month = date.getMonth(); 

//   console.log(month); 
//    });

//  function createDates() { 
//     var date = new Date(document.getElementById("post-form").val()); 
//    var day = date.getDate(); 
//   var month = date.getMonth(); 

//  document.getElementsByClassName("blog-heading").innerHTML = month;
//   alert(month);  
//    };


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