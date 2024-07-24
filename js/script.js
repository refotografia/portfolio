(function(){
 "use strict";

//=================================modal load==========================================
 var wrapp = $('#myModal .modal-dialog .modal-body');
    $('a.load-contact').on('click', function(e){
        var href = $(this).attr('rel');
        wrapp.load(href + ' .contactForm');
        e.preventDefault();
    });
    
var wrapp2 = $('#myModal2 .modal-dialog .modal-body');
    $('a.load-about').on('click', function(e){
        var href2 = $(this).attr('rel');
        wrapp2.load(href2 + ' .main-about');
        e.preventDefault();
    });
//=================================tooltip==========================================    
 $("[data-gal='tooltip']").tooltip();
    
//===================== progress ========================================= 
 
boxHeight();
initFlexSliders();   




})();


$(window).resize(function() {
    boxHeight();
    initFlexSliders();
	if($(window).width() <= 991){
$('.cp-right, .social').appendTo($('.footer-attr'));
} else {
$('.cp-right, .social').appendTo($('.main-attr'));
}

});
$(document).ready(function() {
  initFlexSliders();  
 });   
$(window).load(function() {
   //=================================flex gallery==========================================    
initFlexSliders();
valid();
  $('#myModal').on('shown.bs.modal', function (e) {
  valid();
  });
 $('#myModal2').on('shown.bs.modal', function (e) {
  barSkill();
  });
$('.main-carousel').hide(10);
  $('.btn-toggle a').click(function(){
     
    $('.main-carousel').slideToggle();
    
    return false;
});
$('.footer-attr').hide(10);
  $('.btn-attr a').click(function(){
     
    $('.btn-attr a i').toggleClass('fa-angle-down');
    $('.footer-attr').slideToggle();
    
    return false;
});
});

//============================ flexslider fucntion ===========================
function initFlexSliders() {
$('.ri').resizeToParent();
    //The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
	useCSS: false,
    asNavFor: '#slider',
    itemWidth: 120,
    itemMargin: 10,
    minItems: 2,
    maxItems: 8,
      start: function(slider){
         $('#carousel .slides img').show(); 
		 $("#carousel li").css("width", "auto");
		  var sliderC = slider.data('flexslider');
		sliderC.resize(); 
    }
  });

  $('#slider').flexslider({
   animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    sync: "#carousel",
      start: function(slider){
            var slider1 = slider.data('flexslider');
		slider1.resize(); 
        var capText = $('#slider .slides .flex-active-slide .caption').text();
          $('.slide-thumb h3').text(capText);
      },
      before: function(slider){
         var slider1 = slider.data('flexslider');
		slider1.resize(); 
      },
      after: function(slider){
          
       var capText = $('#slider .slides .flex-active-slide .caption').text();
        $('.slide-thumb h3').text(capText);   
      }
      
  });
    
    
}
function valid(){
 $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
}
function boxHeight(){
 //==================================== height header============================

var wHeight = $(window).height() - 0,
    wWidth = $(window).width();
var thumbHeight = $('.slide-thumb').height();
$('#slider .slides li').css({'height': wHeight}); 
$('.slide-thumb').css('margin-top', -thumbHeight )
}
 function barSkill(){
     setTimeout(function(){

    $('.progress-bar').each(function() {
        var me = $(this);
        var pe =  $(this).children('.precent-value');
        var perc = me.attr("aria-valuenow");

        var current_perc = 0;

        var progress = setInterval(function() {
            if (current_perc>=perc) {
                clearInterval(progress);
            } else {
                current_perc +=1;
                me.css('width', (current_perc)+'%');
            }

            pe.text((current_perc)+'%');

        },90);
    });
}, 300);
 }