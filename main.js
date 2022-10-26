document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#navToggler').addEventListener('click', event => {
        // toggle active class
        event.currentTarget.classList.toggle('active');
        document.querySelector('#navList').classList.toggle('active');

        // disable scroll on navlist active
        if (event.currentTarget.classList.contains('active')) {
            document.body.style.cssText = 'max-height: 100vh; overflow: hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.removeAttribute('style');
        }
    });

    // remove active class on navToggler and navList on media query change
    window.matchMedia('(max-width: 768px)').addEventListener('change', () => {
        document.querySelector('#navToggler').classList.remove('active');
        document.querySelector('#navList').classList.remove('active');
        document.body.removeAttribute('style');
    })
});