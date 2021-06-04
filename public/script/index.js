$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            300:{
                items: 2
            },
            500: {
                items: 3
            },
            1280: {
                items: 5
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        stagePadding: 40,
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 10,
        loop:true,
        responsive: {
            300:{
                items: 2
            },
            500: {
                items: 3
            },
            780: {
             items:4
            },
            1280: {
                items: 6
            },
            1600: {
                items: 8
            }
        }
    })
})