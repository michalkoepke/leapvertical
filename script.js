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





// zmniejszanie paska




function zmniejsz() {

    box.classList.remove('logo-kontener');
    box.classList.add('logo-kontener-horizontal');

    logoInner.classList.remove('logotop');
    logoInner.classList.add('logotop-maly');

    navbar.classList.add('navbar-small');

    mybutton.style.display = "flex";

}






// function zmniejszNoTypo() {

//     box.classList.remove('logo-kontener');
//     box.classList.add('logo-kontener-small');

//     logoInner.classList.remove('logotop');
//     logoInner.classList.add('logotop-no-typo');

//     navbar.classList.add('navbar-small');

//     mybutton.style.display = "flex";

// }




function powieksz() {


    box.classList.remove('logo-kontener-horizontal');
    box.classList.add('logo-kontener');

    logoInner.classList.remove('logotop-maly');
    logoInner.classList.add('logotop');

    navbar.classList.remove('navbar-small');

    mybutton.style.display = "none";

}


// function powieksz2() {


//     box.classList.remove('logo-kontener-horizontal');
//     box.classList.add('logo-kontener-small');

//     logoInner.classList.remove('logotop-maly');
//     logoInner.classList.add('logotop-no-typo');

//     // navbar.classList.remove('navbar-small');

//     mybutton.style.display = "none";



// }


function zmniejszLogo() {


    box.classList.remove('logo-kontener');
    box.classList.add('logo-kontener-horizontal-mobile');

    console.log("zmniejszam logo");



}


function PowiekszLogo() {


    box.classList.remove('logo-kontener-horizontal-mobile');
    box.classList.add('logo-kontener');

    console.log("powiekszam logo");



}





// sprawdzanie media query



const mediaQuery = window.matchMedia('(min-width: 600px)');

function sprawdz(e) {

    // sprawdzanie:

    if (e.matches) {

        PowiekszLogo();



        window.onscroll = function () { shrink() };



        function shrink() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

                zmniejsz();



            } else if (e.matches) {

                powieksz();


            }



        }


    } else if (!e.matches) {

        zmniejszLogo();



    }








}

mediaQuery.addListener(sprawdz);

sprawdz(mediaQuery);