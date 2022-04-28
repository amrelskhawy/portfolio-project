/* --------------- Grab elements from DOM --------------- */
const header = document.getElementById('header')
const links = document.querySelectorAll('.nav--link')


/* --------------- Sticky Navbar --------------- */
window.addEventListener("scroll", ()=> {
    header.classList.toggle('sticky', window.pageYOffset > 0)
})

const setActive = () => {
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(link=> {
                link.classList.remove('active')
            })
            link.classList.add('active')
        })
    })
}

links.forEach(ele => {
    ele.addEventListener('click', setActive)
})

/* --------------- Reveal Animation --------------- */

/* --------------- Skills Progress Bar Animation --------------- */

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */
