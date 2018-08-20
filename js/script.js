// SCROLL //
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1400);
    });
});


	

	


// OBJECTS FILTER MIXITUP //

// $(function () {
//     $('.wrapper-img').mixItUp({
//         selectors: {
//           target: '.wrapper-img_i',
//           filter: '.filter'
//         }
//     });                             
// }); 

// ACTIVE
$(function() {
    $(".portfolio-li").click(function() {
        $(".portfolio-li").removeClass("active");         
        $(this).toggleClass("active");
    })
});

// FILTER
$(document).ready(function(){
    $('.portfolio-li').click(function(){
      var category = $(this).attr('id');
      if (category == 'all'){
          $('.wrapper-img_i').addClass('hide');
      setTimeout(function(){
        $('.wrapper-img_i').removeClass('hide');
      }, 300);
  } else {
      $('.wrapper-img_i').addClass('hide');
      setTimeout(function(){
        $('.' + category).removeClass('hide');
      }, 300);
    }
  });
  });
  
    







 // VALIDATE FORM //
$(document).ready(function () {
    $("form").submit(function () {
        var clikedForm = $(this);
        if (clikedForm.find("[name='name']").val() == '') {
            alert('Введите ваше имя');
            return false;
        }
         if (clikedForm.find("[name='email']").val() == '') {
            alert('Введите e-mail адрес');
            return false;
        }
        if (clikedForm.find("[name='message']").val() == '') {
            alert('Введите Сообщение');
            return false;
        }
       
    });
});

 // SLIDER //
 $('.wrapper-img').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<div class="arrow_left"><i class="fas fa-arrow-left"></i></div>',
  nextArrow: '<div class="arrow_right"><i class="fas fa-arrow-right"></i></div>'
});
	
