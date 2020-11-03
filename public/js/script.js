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

/**
 * Toggle Password Visibility
 */
function togglePassword(el, target) {
  let icon = el.children[0]
  let input = document.getElementById(target)

  if (icon && input) {

    switch (input.type) {
      case 'password':
        input.type = 'text'
        icon.classList.add('ri-eye-off-line')
        break;

      case 'text':
        input.type = 'password'
        icon.classList.remove('ri-eye-off-line')
        break;

      default:
        input.type = 'text'
        icon.classList.add('ri-eye-off-line')
        break;
    }
  }
}