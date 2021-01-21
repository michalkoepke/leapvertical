const box = document.querySelector("#logo-box");

const logoInner = document.querySelector("#logo-inner");

const logoKontener = document.querySelector(".logo-kontener");

const navbar = document.querySelector(".navbar");


const mybutton = document.getElementById("floating");


// formularz


const formularz = document.querySelector(".formularz");

formularz.addEventListener('submit', e => {
    e.preventDefault();






});







function zmniejsz() {

    box.classList.remove('logo-kontener');
    box.classList.add('logo-kontener-small');

    logoInner.classList.remove('logotop');
    logoInner.classList.add('logotop-no-typo');

    navbar.classList.add('navbar-small');

    mybutton.style.display = "flex";

}

function powieksz() {


    box.classList.remove('logo-kontener-small');
    box.classList.add('logo-kontener');

    logoInner.classList.remove('logotop-no-typo');
    logoInner.classList.add('logotop');

    navbar.classList.remove('navbar-small');

    mybutton.style.display = "none";

}




// sprawdzanie media query



const mediaQuery = window.matchMedia('(min-width: 600px)');

function sprawdz(e) {

    // sprawdzanie:

    if (e.matches) {

        window.onscroll = function () { shrink() };



        function shrink() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

                zmniejsz();



            } else {

                powieksz();

            }


        }


    } else {

        zmniejsz();



    }

}

mediaQuery.addListener(sprawdz);

sprawdz(mediaQuery);