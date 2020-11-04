// Init Body
document.querySelector("body").onload = () => {
  let header = document.querySelector('header.header.fixed-top')
  if (header) {
    let headerHeight = header.offsetHeight
    document.querySelector("body").style.marginTop = headerHeight + "px"
  }
}

// Init Bootstrap Tooltip
$('[data-toggle="tooltip"]').tooltip()

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

// Init Plyr
new Plyr(document.querySelector('video#player'), {
  tooltips: { controls: true },
  invertTime: true,
  captions: { active: true, update: true },
  previewThumbnails: { enabled: false, src: '' }
})

// Fix Bootstrap's Dropdown Links Redirection
$('.dropdown .dropdown-menu a.dropdown-item').on('click', function (e) {
  e.preventDefault();
  window.location.href = $(this).attr('href');
})

/**
 * Toggle Password Visibility
 */
function togglePassword(el, target) {
  // Get HTML Elements
  let icon = el.children[0]
  let input = document.getElementById(target)

  // If Elemants Exists
  if (icon && input) {

    // Check Input Type
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