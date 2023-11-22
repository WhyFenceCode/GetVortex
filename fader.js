$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.scrollopacity').each( function(i){
            
            var top_of_object = $(this).position().top;
            var bottom_of_object = top_of_object + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_window = $(window).scrollTop();
            
            /* If more than 10% of the object is visible in the window, remove the class */
            if( bottom_of_window > top_of_object + 0.5*$(this).outerHeight() && top_of_window < bottom_of_object - 0.5*$(this).outerHeight()){
                
                $(this).removeClass('hide');
                    
            } else {
                /* If less than 10% of the object is visible in the window, add the 'hide' class */
                $(this).addClass('hide');
            }
            
        }); 
    
    });
    
});
