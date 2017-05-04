/*                                     JQUERY ON DOC READY
__________________________________________________________
*/

$(document).ready(function(){



    /* ---SMOOTH SCROLL----------------------------- */
    
    $('div#navbar a').smoothScroll({
        afterScroll: function() {
            /* location.hash = this.hash; */
        }
    });
    
    



    /* ---NAV BAR ANIMATION------------------------- */

       var w = $(window).width();
       
       var nav_about = (w/2)-315;
       var nav_work = (w/2)-235;
       var nav_projects = (w/2)-146;
       var nav_contact = (w/2)-46;
       
       var lastclicked = 315;
    
    $('div#navbar').css({backgroundPosition: nav_about +'px 0'});
    
    
    
    /* ---FOOTER HEIGHT FIX------------------------- */
    
    var h = $(window).height();
    $("div#contact").css("min-height", h - 0 +'px');



    /* ---NAV BAR ANIMATION------------------------- */
    
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
    }

    $(window).scroll(function() {
                
        if(isScrolledIntoView('#about')) {
            $('div#navbar').stop().animate({backgroundPosition: nav_about +'px 0'}, {duration:300});
               lastclicked = 315;
        } else if(isScrolledIntoView('#work')) {
            $('div#navbar').stop().animate({backgroundPosition: nav_work +'px 0'}, {duration:300});
               lastclicked = 233;
        } else if(isScrolledIntoView('#projects')) {
               $('div#navbar').stop().animate({backgroundPosition: nav_projects +'px 0'}, {duration:300});
            lastclicked = 144;
        } else {
            $('div#navbar').stop().animate({backgroundPosition: nav_contact +'px 0'}, {duration:300});
            lastclicked = 44;
        }
    });



    /* ---BROWSER RESIZE - NAVBAR FIX--------------- */
    
    $(window).resize(function() {
        var w = $(window).width();
        
           var nav_about = (w/2)-315;
           var nav_work = (w/2)-233;
           var nav_projects = (w/2)-144;
           var nav_contact = (w/2)-44;
        
        $('div#navbar').css({backgroundPosition: (w/2)-lastclicked +'px 0'});
        
        $(window).scroll(function() {
            
            if(isScrolledIntoView('#about')) {
                $("div#nav_logo_w").css("display", 'none');
                $('div#navbar').stop().animate({backgroundPosition: nav_about +'px 0'}, {duration:300});
                   lastclicked = 315;
            } else if(isScrolledIntoView('#work')) {
                $('div#navbar').stop().animate({backgroundPosition: nav_work +'px 0'}, {duration:300});
                   lastclicked = 233;
            } else if(isScrolledIntoView('#projects')) {
                   $('div#navbar').stop().animate({backgroundPosition: nav_projects +'px 0'}, {duration:300});
                lastclicked = 144;
            } else {
                $('div#navbar').stop().animate({backgroundPosition: nav_contact +'px 0'}, {duration:300});
                lastclicked = 44;
            }
        });
        
        
        // Footer height fix after resize
        var h = $(window).height();
        $("div#contact").css("min-height", h - 100 +'px');
        
    });
    
        
    /* ---IE FIXES---------------------------------- */
    
    if ($.browser.msie && $.browser.version.substr(0,1)<=7) {
        $("a#switch").css("margin-top", "-35px");
        $("div#extras").css("background-position", "0 150px");
    }
    
    else {
        $("a#switch").css("margin-top", "6px");
        $("div#extras").css("background-position", "0 192px");
    }
    

});
