// Init Body
document.querySelector("body").onload = function () {
  let header = document.querySelector('header.header.fixed-top')
  if (header) {
    let headerHeight = header.offsetHeight
    document.querySelector("body").style.marginTop = headerHeight + "px"
  }
}

// Init AOS
$('main.home section.info .box').attr('data-aos', 'flip-left')
$('main.home section.testimonials .slick').attr('data-aos', 'zoom-in')
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
})

// Init Slick
$('main.home section.testimonials .slick').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true
})