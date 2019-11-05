"use strict";
//la console dans le browser génère des erreur dans les boucles for alors qu'il n'y en a pas.

//fonction anonyme qui gère le menu responsive (ajouter/enlever des classes pour afficher ou faire disparaitre les icones)
(function () {

    const boutonToggle = document.querySelector(".toggle > a");

    boutonToggle.addEventListener("click", () => {

        const lesItems = document.querySelectorAll(".item");
        const iconesAImage = document.querySelector(".toggle > a > i");

        //désactiver le menu
        if (lesItems[0].classList.contains("active")) {
            for (let item of lesItems) {
                item.classList.remove("active");
                iconesAImage.innerText = "menu";
                document.querySelector(".barre-menu").classList.remove("activated");
                
            };

        //activer le menu
        } else {
            for (let item of lesItems) {
                item.classList.add("active");
                iconesAImage.innerText = "cancel";
                document.querySelector(".barre-menu").classList.add("activated");
                
            };

        }
    });
})();

//fonction qui enleve le menu activé si on change l'orientation de la tablette/téléphone et que ca dépasse 900px
window.onresize = () => {
    const lesItems = document.querySelectorAll(".item");
    const iconesAImage = document.querySelector(".toggle > a > i");
    if (window.innerWidth >= 900) {
        if (lesItems[0].classList.contains("active")) {
            for (let item of lesItems) {
                item.classList.remove("active");
                iconesAImage.innerText = "menu";
                document.querySelector(".barre-menu").classList.remove("activated");
                
            }
        }
    }
}

//fonction anonyme pour activer la classe qui anime le ballon de soccer
(function () {
    const animation1 = document.querySelector(".animation1");
    const ballon = document.querySelector(".ballon");

    animation1.addEventListener("click", () => {
        ballon.classList.toggle("animBallon");
    })
})();

//gérer l'animation "d'arc en ciel" aléatoire
const lesRonds = document.querySelectorAll(".arc");
const [rouge, bleu, vert, jaune, orange, mauve] = lesRonds;

setInterval(() => {
    //pour chaque rond de couleur, on change son scale aléatoirement a chaque 800ms
    let scale1 = Math.random() * 5;
    rouge.style.transform = `scale(${scale1},${scale1})`;

    let scale2 = Math.random() * 5;
    bleu.style.transform = `scale(${scale2},${scale2})`;

    let scale3 = Math.random() * 5;
    vert.style.transform = `scale(${scale3},${scale3})`;

    let scale4 = Math.random() * 5;
    jaune.style.transform = `scale(${scale4},${scale4})`;

    let scale5 = Math.random() * 5;
    orange.style.transform = `scale(${scale5},${scale5})`;

    let scale6 = Math.random() * 5;
    mauve.style.transform = `scale(${scale6},${scale6})`;

}, 800);


// fonction anonyme pour associer des écouteurs d'événements sur les boutons du menu
(function () {

    //déclaration des boutons
    const themeSombre = document.querySelectorAll(".boutonMenu")[0];
    const arrondir = document.querySelectorAll(".boutonMenu")[1];
    const rendreCarre = document.querySelectorAll(".boutonMenu")[2];
    const parDefaut = document.querySelectorAll(".boutonMenu")[3];

    //thème sombre
    themeSombre.addEventListener("click", () => {
        //déclaration des éléments qui verront leur styles changer
        const fond = document.querySelector(".conteneur");
        const barreHaut = document.querySelector(".barre-menu");
        const leFooter = document.querySelector("footer");

        //changement des styles des éléments
        fond.classList.add("theme-sombre-conteneur");
        barreHaut.classList.add("theme-sombre-menu");
        leFooter.classList.add("theme-sombre-footer");
    });

    //arrondir le tout
    arrondir.addEventListener("click", () => {
        //déclaration des éléments qui verront leur styles changer
        const barreHaut = document.querySelector(".barre-menu");
        const leFooter = document.querySelector("footer");
        const lesCartes = document.querySelectorAll(".cartes");
        const lesPoints = document.querySelectorAll(".point");
        const arcEnCiel = document.querySelectorAll(".arc");
        const boutonCliquer = document.querySelector(".bouton1");
        const leCarre = document.querySelector(".carre");

        //changement des styles des éléments
        barreHaut.style.borderRadius = "0 0 25% 25%";
        leFooter.style.borderRadius = "25% 25% 0 0";
        boutonCliquer.style.borderRadius = "50%";
        leCarre.style.borderRadius = "50%";

        const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = lesPoints;
        p1.style.borderRadius = "50%";
        p2.style.borderRadius = "50%";
        p3.style.borderRadius = "50%";
        p4.style.borderRadius = "50%";
        p5.style.borderRadius = "50%";
        p6.style.borderRadius = "50%";
        p7.style.borderRadius = "50%";
        p8.style.borderRadius = "50%";
        p9.style.borderRadius = "50%";

        const [a1, a2, a3, a4, a5, a6] = arcEnCiel;
        a1.style.borderRadius = "50%";
        a2.style.borderRadius = "50%";
        a3.style.borderRadius = "50%";
        a4.style.borderRadius = "50%";
        a5.style.borderRadius = "50%";
        a6.style.borderRadius = "50%";

        for (let carte of lesCartes) {
            carte.style.borderRadius = "50%";
        };

    });

    //rendre tout carré
    rendreCarre.addEventListener("click", () => {

        //déclaration des éléments qui verront leur styles changer
        const barreHaut = document.querySelector(".barre-menu");
        const leFooter = document.querySelector("footer");
        const lesCartes = document.querySelectorAll(".cartes");
        const lesPoints = document.querySelectorAll(".point");
        const arcEnCiel = document.querySelectorAll(".arc");
        const boutonCliquer = document.querySelector(".bouton1");
        const leCarre = document.querySelector(".carre");

        //changement des styles des éléments
        barreHaut.style.borderRadius = "0 0 0 0";
        leFooter.style.borderRadius = "0 0 0 0";
        boutonCliquer.style.borderRadius = "0%";
        leCarre.style.borderRadius = "0%";

        const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = lesPoints;
        p1.style.borderRadius = "0%";
        p2.style.borderRadius = "0%";
        p3.style.borderRadius = "0%";
        p4.style.borderRadius = "0%";
        p5.style.borderRadius = "0%";
        p6.style.borderRadius = "0%";
        p7.style.borderRadius = "0%";
        p8.style.borderRadius = "0%";
        p9.style.borderRadius = "0%";

        const [a1, a2, a3, a4, a5, a6] = arcEnCiel;
        a1.style.borderRadius = "0%";
        a2.style.borderRadius = "0%";
        a3.style.borderRadius = "0%";
        a4.style.borderRadius = "0%";
        a5.style.borderRadius = "0%";
        a6.style.borderRadius = "0%";

        for (let carte of lesCartes) {
            carte.style.borderRadius = "0%";
        };
        



    });

    //remettre les paramêtres par défaut
    parDefaut.addEventListener("click", () => {
        location.reload(true);
    });

})();
