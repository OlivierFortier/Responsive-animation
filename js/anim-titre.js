"use strict";

/*script qui gère l'animation du titre qui s'écrit et change */

/*classe orientée objet pour gérer l'animation complexe du titre*/
class txtChange {
  //méthode constructor pour établit les propriétés
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.numeroLoop = 0;
    this.periode = parseInt(period, 10) || 2000;
    this.texte = '';
    this.tick();
    this.supprime = false;
  }
  //méthode 'tick' pour faire l'animation/le délai entre chaque 'frappe' de chaque lettre
  tick() {
    var i = this.numeroLoop % this.toRotate.length;
    var texteComplet = this.toRotate[i];
    if (this.supprime) {
      this.texte = texteComplet.substring(0, this.texte.length - 1);
    } else {
      this.texte = texteComplet.substring(0, this.texte.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.texte + '</span>';
    var that = this;
    var delta = 300 - Math.random() * 100;
    if (this.supprime) {
      delta /= 2;
    }
    if (!this.supprime && this.texte === texteComplet) {
      delta = this.periode;
      this.supprime = true;
    } else if (this.supprime && this.texte === '') {
      this.supprime = false;
      this.numeroLoop++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  }
}


/*chargement des caractères qui sont situés dans les attributs data-change et data-temps de  l'élément HTML*/
window.onload = function () {
  var elements = document.getElementsByClassName('txt-change');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-change');
    var period = elements[i].getAttribute('data-temps');
    if (toRotate) {
      new txtChange(elements[i], JSON.parse(toRotate), period);
    }
  }

  /* injecter le css pour les caractères*/
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};