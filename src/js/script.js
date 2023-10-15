let navLink = document.querySelectorAll('.nav-link');

const width = window.innerWidth;
console.log(width);

if (width < 992) {
    navLink.forEach((obj) => {
        obj.addEventListener('click', function() {
            document.querySelector('button.navbar-toggler').click();
        })
    })
}