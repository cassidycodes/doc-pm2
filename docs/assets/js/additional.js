$(function() {
    logoClick();
    pWarn();
    // sidebarActive(); // function removed, .active class added Jekyll on page built (server-side rendering)
    // sidebarOpen(); // function removed, hide and show submenu by Jekyll on page built (server-side rendering)
});

function helper(className, content) {
    return ("<p class=\"" + className + "\">" + (content.slice(5).trim()) + "</p>");
}

function transformClass(text) {
    var result;
    if (/^!&gt;/.test(text)) {
        result = helper('tip', text);
    } else if (/^\?&gt;/.test(text)) {
        result = helper('warn', text);
    } else {
        result = "<p>" + text + "</p>";
    }
    return result;
}

// if markdown & rendered HTML contains contains 'p tag &gt'
// render as p class=warn
function pWarn() {
    var allPtag = document.getElementsByTagName("p");
    var length = allPtag.length;
    var text = [];



    for (var i = 0; i < length; i++) {
        // console.log(allPtag[i].outerHTML)
        if(allPtag[i].innerHTML.indexOf("&gt") !== -1) {
        text[i] = transformClass(allPtag[i].innerHTML);
        allPtag[i].outerHTML = text[i];
        }
        // console.log(text[i])
        // console.log(`${i+1}/${allPtag.length}`)
    }
}

function logoClick() {
    $('.PM2_logo').click(function() {
        $('body').toggleClass('close');
    });
}

// function removed, .active class added Jekyll on page built (server-side rendering)
function sidebarActive() {
    var url = window.location.href;

    // passes on every "a" tag
    $(".sidebar-nav a").each(function() {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).closest("li").addClass("active");
            // $(this).closest("button").click();
            //for making parent of submenu active
            $(this).closest("li").parent().parent().addClass("active is-active");
            $(this).closest("lu").parent().parent().addClass("is-active");
        }
    });
}

// function removed, hide and show submenu by Jekyll on page built (server-side rendering)
// function sidebarOpen() {
//     $('.accordion-menu a').each(function(){
//          var myHref = $(this).attr('href');
//          var pathname = window.location.pathname;
//          if(pathname.match(myHref)) {
//            $('.accordion-menu').foundation('down', $(this).parent().parent());
//          }
//     });

//     // // Allow opening sidebar submenu without clicking a button
//     // $(".sidebar-nav li.is-accordion-submenu-parent > a").click(function() {
//     //     var $this = $(this);
//     //     event.preventDefault();
//     //     var goTo = this.getAttribute("href");
//     //     $this.next().click();
//     //     setTimeout(function() {
//     //     window.location = goTo;
//     //     }, 200);
//     //     // alert("A link was clicked!");
//     //  });

// }