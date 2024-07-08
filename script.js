// locomotive

const scroll = new LocomotiveScroll({
    el: document.querySelector('.parent'),
    smooth: true
});

// cursor animation

var imgdiv = document.querySelector('.page-2 img');
var cursor = document.querySelector('.page-2 .cursor')

document.addEventListener('DOMContentLoaded', () => {
    imgdiv.addEventListener('mouseenter', () => {
        cursor.style.visibility = 'visible';
        cursor.style.scale = 1
        // cursor.style.transitionDuration = "0.2s"
    });

    imgdiv.addEventListener('mouseleave', () => {
        cursor.style.visibility = 'hidden';
        cursor.style.scale = 0
        // cursor.style.transitionDuration = "0.2s"
    });

    imgdiv.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

// nav-bar animation

let anchorAni = document.querySelectorAll('.page-1 .child2 a');

var tl = gsap.timeline()

tl.from('.page-1 .child1 img',{
    y:-20
})
tl.to('.page-1 .main h1',{
    y:-10
})

// page-3 animation

function clickAnimation(){
  let box1 = document.querySelector('.page-3 .child1 .box1');
  let boxChild = document.querySelector('.page-3 .child1 .box1-child');
  let boxChildson3 = document.querySelector('.page-3 .child1 .box1-child #imbox1');
  let boxChildson4 = document.querySelector('.page-3 .child1 .box1-child #imbox2');
  box1.addEventListener('mouseover', function(){
    boxChild.style.backgroundColor = "#F5DFCF"
    boxChildson3.style.visibility = "visible"
    boxChildson4.style.visibility = "visible"
    boxChild.style.transitionDuration = "0.3s"
  })
  box1.addEventListener('mouseout', function(){
    boxChild.style.backgroundColor = "transparent"
    boxChildson3.style.visibility = "hidden"
    boxChildson4.style.visibility = "hidden"
  })

  let box2 = document.querySelector('.page-3 .child2 .box1');
  let boxChild2 = document.querySelector('.page-3 .child2 .box1-child');
  let boxChild2son3 = document.querySelector('.page-3 .child2 .box1-child #imbox3');
  let boxChild2son4 = document.querySelector('.page-3 .child2 .box1-child #imbox4');
  box2.addEventListener('mouseover', function(){
    boxChild2.style.backgroundColor = "#FFFFFF"
    boxChild2son3.style.visibility = "visible"
    boxChild2son4.style.visibility = "visible"
    boxChild2.style.transitionDuration = "0.3s"
  })
  box2.addEventListener('mouseout', function(){
    boxChild2.style.backgroundColor = "transparent"
    boxChild2son3.style.visibility = "hidden"
    boxChild2son4.style.visibility = "hidden"
  })

  let box3 = document.querySelector('.page-3 .child3 .box1');
  let boxChild3 = document.querySelector('.page-3 .child3 .box1-child');
  let boxChild3son3 = document.querySelector('.page-3 .child3 .box1-child #imbox5');
  let boxChild3son4 = document.querySelector('.page-3 .child3 .box1-child #imbox6');
  box3.addEventListener('mouseover', function(){
    boxChild3.style.backgroundColor = "#FFFFFF"
    boxChild3son3.style.visibility = "visible"
    boxChild3son4.style.visibility = "visible"
    boxChild3.style.transitionDuration = "0.3s"
  })
  box3.addEventListener('mouseout', function(){
    boxChild3.style.backgroundColor = "transparent"
    boxChild3son3.style.visibility = "hidden"
    boxChild3son4.style.visibility = "hidden"
  })
}
clickAnimation();

//////// page-5 and 6 cursor animation

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".page-5 .cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelectorAll(".child1").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to(".page-5 .cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to(".page-5 .cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
cursorAnimation();

function secondcursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to(".page-6 .cursor", {
        left: dets.x,
        top: dets.y,
      });
    });
    document.querySelectorAll(".child2").forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {
        gsap.to(".page-6 .cursor", {
          transform: "translate(-50%,-50%) scale(1)",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to(".page-6 .cursor", {
          transform: "translate(-50%,-50%) scale(0)",
        });
      });
    });
  }
secondcursorAnimation();

//// page-7 animation


function iconAnimation(){

  let cirAni = document.querySelector('.section1 #box1 i')
  let cirBox = document.querySelector('.section1 .box-1 ')

  let cirAni2 = document.querySelector('.section1 #box2 i')
  let cirBox2 = document.querySelector('.section1 #box2 ')

  let cirAni3 = document.querySelector('.section1 #box3 i')
  let cirBox3 = document.querySelector('.section1 #box3 ')

  cirBox.addEventListener('click', function() {
      cirAni.style.color = "gray"
      cirAni2.style.color = "black"
      cirAni3.style.color = "black"
})

  cirBox2.addEventListener('click', function() {
      cirAni2.style.color = "gray"
      cirAni.style.color = "black"
      cirAni3.style.color = "black"
})

  cirBox3.addEventListener('click', function() {
      cirAni3.style.color = "gray"
      cirAni.style.color = "black"
      cirAni2.style.color = "black"
})
}
iconAnimation();

function buttonAnimation(){
  let btn = document.querySelector('.page-8 button');
  let btnChild = document.querySelector('.page-8 .buttonChild');

  btn.addEventListener('click', function(){
    btnChild.style.visibility = "visible";
    btnChild.style.transitionDuration = "0.8s";
    btn.style.transform = "translateY(300px)";
    btn.style.transitionDuration = "0.7s";
  })
  btn.addEventListener('dblclick', function(){
    btnChild.style.visibility = "hidden";
    btnChild.style.transitionDuration = "0.4s";
    btn.style.transform = "translateY(-10px)";
    btn.style.transitionDuration = "0.7s";
  })
}
buttonAnimation();