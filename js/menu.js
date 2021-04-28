
// var mostrar = false;

let btnmenu = document.getElementById('btnmenu'); 
let menu = document.getElementById('menu1');

let btnclose = document.getElementById('btnclose'); 
let visible = false;

btnmenu.addEventListener('click', function(){
   'use strict';
   !this.visible == false;
//    console.log(!this.visible);
   menu.classList.toggle('mostrar');
   console.log('Abrir');
});

btnclose.addEventListener('click', function(){
    'use strict';
    this.visible == false;
    // console.log(!this.visible,'deberia ser falso');
   menu.classList.toggle('mostrar');
    console.log('Cerrar');
});

// function mostrarPC(){
//     mostrar = true;
// }
