$(document).ready(function(){
  $('.slider').slick({
       autoplay : true,
    autoplaySpeed : 1000,
    dots : true,
    dotsClass : 'myDots'
  });
});



 $(window).scroll(function(){

	var fix = $('.top-box')

	if($(this).scrollTop() > 700){
		fix.addClass('fix')
	}
	else{
		fix.removeClass('fix')
	}
})



 $('.gall-box').magnificPopup({
  		delegate: 'a', 
  		type: 'image',
  		navigateByImgClick: true,
  		gallery: {
          enabled:true
        },
  		 zoom: {
		    enabled: true, 
		    duration: 300, 
		    easing: 'ease-in-out', 
		    opener: function(openerElement) {
		      return openerElement.is('img') ? openerElement : openerElement.find('img');
		    }
  		},
		 
});