$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 30,
        loop: false,
        mouseDrag: false


    })
    window.onscroll = function() { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    AOS.init();
});