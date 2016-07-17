$(document).ready(function(){
    
    //Animate horizontal elements 
    $(window).load(function animate(){
        $('.square-small')
        .animate({width: 106}, 
        { 
            duration: 1000,
            
            complete: function() {
              
       $('.square-small')
      .animate({
            width: 0
         }); animate(); },
            progress: function(animation, progress) {
                $('#percentage').text(Math.round(progress * 100));
            }
        } 
                );
        
        
    });
    
    //Animate vertical elements 
    $(window).load(function animate(){
        $('.square-small2')
        .animate({height: 0}, 
        { 
            duration: 1000,
            
            complete: function() {
              
       $('.square-small2')
      .animate({
            height: 70
         }); animate(); },
            progress: function(animation, progress) {
                $('#percentage2').text(Math.round(progress * 100));
            }
        } 
                );
        
        
    });
    

});


