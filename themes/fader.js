$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, remove the class */
            if( bottom_of_window > (bottom_of_object - 10)){
                
                $(this).removeClass('hideme');
                    
            } else {
                /* If the object is not completely visible in the window, add the 'hide' class */
                $(this).addClass('hide');
            }
            
        }); 
    
    });
    
});
