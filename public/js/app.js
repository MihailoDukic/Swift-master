import gsap from './vendors/gsap.min';
import scrollTrigger from './vendors/ScrollTrigger.min';

// Cursor 

document.addEventListener("DOMContentLoaded", function (event) {
    let cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll(".hoverable");
    let initCursor = false;

    for (let i = 0; i < links.length; i++) {
        let selfLink = links[i];

        selfLink.addEventListener("mouseover", function () {
            cursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
            cursor.classList.remove("custom-cursor--link");
        });
    }

    window.onmousemove = function (e) {
        let mouseX = e.clientX;
        let mouseY = e.clientY;

        if (!initCursor) {
            TweenLite.to(cursor, 0.3, {
                opacity: 1
            });
            initCursor = true;
        }

        TweenLite.to(cursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px"
        });
    };

    window.onmouseout = function (e) {
        TweenLite.to(cursor, 0.3, {
            opacity: 0
        });
        initCursor = false;
    };
});




// Preloader 
window.addEventListener('DOMContentLoaded', () => {
    const preload = gsap.timeline(); 
preload.to('body', {position: 'fixed'})
preload.to('.txt', {opacity: 0, stagger: {from: 'start', amount: 0.5}, marginTop: '-1rem'})
preload.to('.preloader', {opacity: 0, zIndex: -1})
preload.to('.preload-anime', {opacity: 1, stagger: 0.1 })
preload.to('body', {position: 'relative'})

})




// Menu 

const openMenu = document.querySelector('.toggle-menu').addEventListener('click', () => {
    const menu = gsap.timeline({
        defaults: {
            duration: 0.4,
            ease: 'power1'
        }
    });

    menu.to('body', {
        position: 'fixed'
    })
    menu.to('.mobile-menu', {
        opacity: 1,
        visibility: 'visible'
    })
    menu.to('.overlay-dark ', {
        opacity: 1,
        visibility: 'visible'
    })
    menu.to('.anime-mobile', {
        marginLeft: 0,
        opacity: 1,
        stagger: 0.1
    })
    menu.to('.sl', {
        marginRight: 0,
        opacity: 1,
        stagger: 0.1
    })

    const closeMenu = document.querySelector('.close-menu').addEventListener('click', () => {
        menu.reversed(true);
    })
});

// Product details Toggle List
function prodDetails() {
    let headings = document.querySelectorAll('.heading-details');
    let hiddenDetails = document.querySelectorAll('.hidden-content');

    for (let i = 0; i < headings.length; i++) {
        headings[i].addEventListener('click', () => {
            for (let i = 0; i < hiddenDetails.length; i++) {
                headings[0].addEventListener('click', () => {
                    hiddenDetails[0].classList.add('openDetails')
                    hiddenDetails[1].classList.remove('openDetails')
                    hiddenDetails[2].classList.remove('openDetails')
                    hiddenDetails[3].classList.remove('openDetails')
                });

                headings[1].addEventListener('click', () => {
                    hiddenDetails[1].classList.add('openDetails')
                    hiddenDetails[0].classList.remove('openDetails')
                    hiddenDetails[2].classList.remove('openDetails')
                    hiddenDetails[3].classList.remove('openDetails')
                });


                headings[2].addEventListener('click', () => {
                    hiddenDetails[2].classList.add('openDetails')
                    hiddenDetails[0].classList.remove('openDetails')
                    hiddenDetails[1].classList.remove('openDetails')
                    hiddenDetails[3].classList.remove('openDetails')
                });


                headings[3].addEventListener('click', () => {
                    hiddenDetails[3].classList.add('openDetails')
                    hiddenDetails[0].classList.remove('openDetails')
                    hiddenDetails[1].classList.remove('openDetails')
                    hiddenDetails[2].classList.remove('openDetails')
                });
            }
        })
    };

};
prodDetails();








