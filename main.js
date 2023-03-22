

/// Click Toggle Bars
const icon_bars= document.getElementById("icon-bars");

icon_bars.onclick= ()=>{
    icon_bars.classList.toggle('fa-xmark')
}


/* Initialize Swiper*/
  var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var SwiperSimple = new Swiper(".SwiperSimple", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
 // let use counter 
  let count = 0;
		const counterElement = document.getElementById("counter");

		function increment() {
			count++;
			counterElement.innerHTML = count;}

      // let alert by user 

      const send_massge = document.getElementById("send-massge")
     

      window.onload=()=>{
        send_massge.onclick= ()=>{
          console.log(alert('Hello World'))
        }
      }
      
