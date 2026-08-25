/* ==========================================
   BARRA DE PROGRESO
========================================== */

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progreso = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = progreso + "%";

});


/* ==========================================
   BOTÓN VOLVER ARRIBA
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   TIEMPO DE LECTURA
========================================== */

const articulo = document.querySelector(".articulo");

const texto = articulo.innerText;

const palabras = texto.trim().split(/\s+/).length;

const minutos = Math.max(1, Math.ceil(palabras / 220));

document.getElementById("reading-time").textContent =
`${minutos} min de lectura`;


/* ==========================================
   ANIMACIONES AL HACER SCROLL
========================================== */

const elementos = document.querySelectorAll(

".articulo section,.imagen,.quote,.info-box,.tip-box,.consejo,.card-info,.mini-card"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

elementos.forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});


/* ==========================================
   ÍNDICE ACTIVO
========================================== */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-140;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


/* ==========================================
   COMPARTIR EN REDES
========================================== */

const url = encodeURIComponent(window.location.href);

const titulo = encodeURIComponent(document.title);

document.getElementById("facebook").onclick=()=>{

window.open(

`https://www.facebook.com/sharer/sharer.php?u=${url}`,

"_blank"

);

};

document.getElementById("x").onclick=()=>{

window.open(

`https://twitter.com/intent/tweet?text=${titulo}&url=${url}`,

"_blank"

);

};

document.getElementById("linkedin").onclick=()=>{

window.open(

`https://www.linkedin.com/sharing/share-offsite/?url=${url}`,

"_blank"

);

};

document.getElementById("whatsapp").onclick=()=>{

window.open(

`https://wa.me/?text=${titulo}%20${url}`,

"_blank"

);

};


/* ==========================================
   SCROLL SUAVE DEL ÍNDICE
========================================== */

navLinks.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const destino=document.querySelector(link.getAttribute("href"));

destino.scrollIntoView({

behavior:"smooth"

});

});

});


/* ==========================================
   IMÁGENES (CLICK PARA AGRANDAR)
========================================== */

const imagenes = document.querySelectorAll(".imagen img");

imagenes.forEach(img=>{

img.addEventListener("click",()=>{

const nueva=window.open("");

nueva.document.write(`

<style>

body{

margin:0;

display:flex;

justify-content:center;

align-items:center;

background:#111;

height:100vh;

}

img{

max-width:95%;

max-height:95%;

border-radius:15px;

}

</style>

<img src="${img.src}">

`);

});

});