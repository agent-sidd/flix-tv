$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
    var navText2 = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
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
            770:{
                items:4
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
                items: 6
            }
           
        }
    })

$('.recmnd-owl').owlCarousel({
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
        700: {
         items:4
        },
        900: {
            items:5
        },
        1100: {
            items:6
        },
        1300: {
            items: 8
        },
        1600: {
            items: 10
        }
       
    }
})
$('.credit-carousel').owlCarousel({
   
    items: 2,
    dots: false,
    nav:true,
    navText: navText,
    margin: 10,
    loop:true,
    responsive: {
        300:{
            items: 3,
            stagePadding: 20
        },
        400: {
            items: 3,
            stagePadding: 20
        },
        500: {
         items:4,
         stagePadding: 20
        },
        600: {
            items:4,
            stagePadding: 40
        },
        700: {
            items:4,
            stagePadding: 40
        },
        800: {
            items:5,
            stagePadding: 40
        },
        900: {
            items:6,
            stagePadding: 40
        },
        1000: {
            items:7,
            stagePadding: 40
        },
        1100: {
            items:8,
            stagePadding: 40
        },
        1300: {
            items: 9,
            stagePadding: 40
        },
        1600: {
            items: 10,
            stagePadding: 40
        }
       
    }
})
})


var close_search = document.getElementsByClassName('close-btn') 
var open_search = document.getElementsByClassName('full-page-srch')
var search = document.getElementsByClassName('srch')
var search_model = document.getElementsByClassName('overlay-search')
search_model[0].style.display="none"
close_search[0].addEventListener('click',function(){
search_model[0].style.display="none"
})
open_search[0].addEventListener('click',function(){
    search_model[0].style.display="flex"  
})
search[0].addEventListener('click',function(){
    search_model[0].style.display="flex"  
})

open_search[0].addEventListener('click',function(){
    search_model[0].style.display="flex"  
})
var wp = document.getElementsByClassName('watch-provider')
var pst_img = document.getElementsByClassName('pst-img')
if(!wp[0]){
pst_img[0].classList.add('btm-radius')
}
var open_mdl = document.getElementsByClassName('open-mdl');
var close_mdl = document.getElementsByClassName('close-model');
var mdl =document.getElementsByClassName('trailer-model')
open_mdl[0].addEventListener('click',function(){
   mdl[0].style.display="block"
})
close_mdl[0].addEventListener('click',function(){
    mdl[0].style.display="none"
 })
 var title = document.getElementsByClassName('title-title')[0].textContent;
document.title = title;