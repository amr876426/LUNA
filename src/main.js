
$(function(){
    //adjust header hight
       $('.header').height($(window).height());
       $(window).resize(function () {
       $('.header').height($(window).height());
       }); 
        
       
             /*  smoothscroll
       -----------------------------------------------*/
      $(function() {
           $('.navbar-default a').bind('click', function(event) {
               var $anchor = $(this);
               $('html, body').stop().animate({
                   scrollTop: $($anchor.attr('href')).offset().top - 49
               }, 1500);
               event.preventDefault();
           });
       });
       
        //scroll to iptv
        $('.button ').click(function(){
           $('html, body').animate({
                  scrollTop: $('.iptv').offset().top
               },1500);
           });
        
    
    
   $(document).ready(function() {
   
     /* Hide mobile menu after clicking on a link
       -----------------------------------------------*/
       $('.navbar-collapse a').click(function(){
           $(".navbar-collapse").collapse('hide');
       }); 
   
        });
       });
   
      