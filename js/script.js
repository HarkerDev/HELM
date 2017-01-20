var NUM_PAGES = 14;

var KEY_LEFT = 37;
var KEY_RIGHT = 39;

var PAGE_MATCHER = /(p\d{1,2}|welcome)/;

function getPageNumber(href) {
    var res = PAGE_MATCHER.exec(href)[0];
    if (res == "welcome") return 0; 
    else return parseInt(res.substring(1));
}

document.addEventListener("keydown", function(event) {
    switch(event.keyCode) {
        case KEY_LEFT: 
            pageNumberCurr = getPageNumber(window.location.href);
            if (pageNumberCurr != 0) {
                pageNumberNew = pageNumberCurr - 1;
                if (pageNumberNew == 0) {
                    window.location.href = "./welcome.html";
                }
                else {
                    pageNumberNewStr = ((pageNumberNew < 10) ? "0" : "") + pageNumberNew;
                    window.location.href = "./p" + pageNumberNewStr + ".html";
                }
            }
        break;
        case KEY_RIGHT:
            pageNumberCurr = getPageNumber(window.location.href);
            if (pageNumberCurr != NUM_PAGES) {
                pageNumberNew = pageNumberCurr + 1;
                pageNumberNewStr = ((pageNumberNew < 10) ? "0" : "") + pageNumberNew;
                window.location.href = "./p" + pageNumberNewStr + ".html";
            }
        break;
    }
});

/*
* 
* Credits to http://css-tricks.com/long-dropdowns-solution/
*
*/
var maxHeight = 400;
$(function(){
    $(".dropdown > li").hover(function() {
         var $container = $(this),
             $list = $container.find("ul"),
             $anchor = $container.find("a"),
             height = $list.height() * 1.1,       // make sure there is enough room at the bottom
             multiplier = height / maxHeight;     // needs to move faster if list is taller
        
        // need to save height here so it can revert on mouseout            
        $container.data("origHeight", $container.height());
        
        // so it can retain it's rollover color all the while the dropdown is open
        $anchor.addClass("hover");
        
        // make sure dropdown appears directly below parent list item    
        $list
            .show()
            .css({
                paddingTop: $container.data("origHeight")
            });
        
        // don't do any animation if list shorter than max
        if (multiplier > 1) {
            $container
                .css({
                    height: maxHeight,
                    overflow: "hidden"
                })
                .mousemove(function(e) {
                    var offset = $container.offset();
                    var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
                    if (relativeY > $container.data("origHeight")) {
                        $list.css("top", -relativeY + $container.data("origHeight"));
                    };
                });
        }
        
    }, function() {
    
        var $el = $(this);
        
        // put things back to normal
        $el
            .height($(this).data("origHeight"))
            .find("ul")
            .css({ top: 0 })
            .hide()
            .end()
            .find("a")
            .removeClass("hover");
    
    });  
    
});




