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
    if (mode === 'desktop') {
      $('.nav').fadeIn('200')
      $('.main_content').css('width', 'calc(100vw - 55px)')
    }
    else if (mode === 'mobile') {
      
    }
    data.forEach((component) => {
      $('.main_content').append(`<div style="width:100vw" id="svg${component.index}" class="component">${component.markup}</div>`)
    })
    if (mode === 'mobile') {
      $('#mainnav').show()
      $('.component').css('margin-bottom', '40px')
      $('.component').css('display', 'flex')
      $('.component').css('justify-content', 'center')
      $('.contact').addClass('small')
    }

    

  })
  
  let clicked = false
  // JQUERY NAV TOGGLE
  $('#menu').bind('click',function(event){
    $('#mainnav ul').slideToggle();
    if (!clicked) {
      $('#mainnav').css('width', '100vw')
      $('#mainnav').css('background-color', '#333')
      
      clicked = true
    } else {
      setTimeout(function(){
        $('#mainnav').css('background-color', 'transparent')
        $('#mainnav').css('width', 'fit-content')
      }, 350);
      clicked = false
    }
  });

  $(window).resize(function(){  
    var w = $(window).width();  
    if(w > 768) {  
      $('#mainnav ul').removeAttr('style');  
    }  
  });

})

