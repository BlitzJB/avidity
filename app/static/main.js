const determine_mode = () => {
  if ($(window).width() < 770) {
    return 'mobile'
  } else {
    return 'desktop'
  }
}





$(document).ready(() => {
  
  const nav_items = [
    $('#home__icon'),
    $('#latest__icon'),
    $('#membership__icon'),
    $('#contact__icon')
  ]
  nav_items.forEach((item) => {
    item.tooltip({
      position: {
        my: "left top",
        at: "right+8 top-10"
      }
    })
  })
  
  const mode = determine_mode()
  console.log(mode)
  if (mode === 'desktop') {
    $('.main_content').addClass('desktop')
  }
  else {
    $('.main_content').addClass('mobile')
  }
  
  $.ajax({
    url: `/get_components?mode=${mode}`
  }).done((data) => {
    $('#loading').fadeOut('200')
    data.forEach((component) => {
      $('.main_content').append(`<div style="width:100vw" id="svg${component.index}"">${component.markup}</div>`)
    })
  })
  


})