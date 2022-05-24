$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        //        if (this.scrollY > 50) {
        //            $(".custome-navbar").addClass("sticky");
        //        } else {
        //            $(".custome-navbar").removeClass("sticky");
        //        }

        // scroll-up button show/hide script
        if (this.scrollY > 1600) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function () {
        $("html").animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
    });

    $(".custome-navbar .menu li a").click(function () {
        // applying again smooth scroll on menu items click
        $("html").css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $(".menu-btn").click(function () {
        $(".custome-navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });



    // owl-carousel for header slider
    $('.header-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    // owl-carousel for gallery slider
    $('.owl-carousel.gallery-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    // owl-carousel for profile slider
    $('.owl-carousel.profile-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    })
    // owl-carousel for head-of-factory-slider
    $('.owl-carousel.head-factory').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
// latest news owl carousel slider 
    $('.owl-carousel.latest-news').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    })
});
// login form accordion js
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
