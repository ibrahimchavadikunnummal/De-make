var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    effect : 'cube',
    speed: 5000,
    spaceBetween:0,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
autoplay:{
       delay: 3000,
   },
});