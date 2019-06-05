$(function () {
    $('#home').click(function (event) {
        event.preventDefault();
        $('#top-bar')[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
    $('.service').click(function (event) {
        event.preventDefault();
        $('#offer')[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
    $('.faq').click(function (event) {
        event.preventDefault();
        $('#history')[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
    $('.news').click(function (event) {
        event.preventDefault();
        $('.recent-news')[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
    $('.contact').click(function (event) {
        event.preventDefault();
        $('#inquiry')[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
})


// Control home navigation fixed scrolling mechanism
window.onscroll = function () { navfixedScroll() };
// Get the navbar
var navbar = document.getElementById("breadcrumb");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navfixedScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
