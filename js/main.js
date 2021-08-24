
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1366: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
  }
});



var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    },
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    loop: true
});




function swapStyleSheet(kk){

	document.getElementById("theme").setAttribute("href", kk);

	}
  
  
	function initate() {

		var defaultstyle = document.getElementById("defaultstyle");
		var css1 = document.getElementById("css1");
		var css2 = document.getElementById("css2");
		var css3 = document.getElementById("css3");
	
		defaultstyle.onclick = function () { swapStyleSheet("css/default.css") };
		css1.onclick = function () { swapStyleSheet("css/css1.css"); };
		css2.onclick = function () { swapStyleSheet("css/css2.css"); };
		css3.onclick = function () { swapStyleSheet("css/css3.css"); };

	}
	
	window.onload = initate;
		  


  var el = document.querySelectorAll("html");

  var fontSize = 16;

function IncreaseFontSize() {
  fontSize = (fontSize + 1);
 
 // document.body.style.fontSize = fontSize + 'px';

  for ( var i = 0; i < el.length; i ++ ) {
    el[i].style.fontSize = fontSize + 'px';
}


}


function DecreaseFontSize() {
  fontSize = (fontSize - 1);
  //document.body.style.fontSize = fontSize + 'px';

  for ( var i = 0; i < el.length; i ++ ) {
    el[i].style.fontSize = fontSize + 'px';
}
}




 
var slide = document.querySelectorAll(".sliderwrapper > div");
var leftimg = document.querySelectorAll(".sliderwrapper > div > div > div > div .leftimg");
var righttext = document.querySelectorAll(".sliderwrapper >  div > div > div > div .righttext");

var tl = gsap.timeline({repeat:-1})
tl.set(slide,{autoAlpha:0, display:"none" })
tl.set(leftimg,{autoAlpha:0})
tl.set(righttext,{autoAlpha:0})

slide.forEach(function(slides, element) {
  
  tl.to(slide[element], {duration:.5, autoAlpha:1, display:"block"})

  tl.from(leftimg[element], {duration:1, right:"-3000px", autoAlpha:0, ease: "expo.out",})

  tl.from(righttext[element], {duration:1, left:"-1000px", scale:3, autoAlpha:0, ease: "expo.out", delay:-.5} )

  tl.to(slide[element], {duration:.5,   autoAlpha:0, delay:5})
  tl.to(slide[element], {duration:0, display:"none"})

   } )


tl.play();

