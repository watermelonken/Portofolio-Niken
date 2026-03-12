// ================= HERO & ABOUT TYPING =================

document.addEventListener("DOMContentLoaded", function(){

// ===== HERO TYPING =====

const heroText = "My Introduction :D!";
let heroIndex = 0;

function typeHero(){

const heroElement = document.getElementById("typing");

if(heroElement && heroIndex < heroText.length){

heroElement.innerHTML += heroText.charAt(heroIndex);

heroIndex++;

setTimeout(typeHero,80);

}

}

typeHero();


// ===== ABOUT TYPING =====

const aboutText = "Hello!! ^_^ My name is Ken. I'm a student at MAN 1 Model Banda Aceh. I enjoy learning new things, especially about art and creative projects. My MBTI is INFJ and my Enneagram type is 1w2. I love exploring many fandoms, drawing, watching movies, and improving my drawing skills every day. This website is my personal portfolio where I share my activities, interests, and projects that I have worked on.";

let aboutIndex = 0;

function typeAbout(){

const aboutElement = document.getElementById("aboutTyping");

if(aboutElement && aboutIndex < aboutText.length){

aboutElement.innerHTML += aboutText.charAt(aboutIndex);

aboutIndex++;

setTimeout(typeAbout,35);

}

}

typeAbout();

});


// ================= FALLING STAR GENERATOR =================

function createStar(){

const container = document.querySelector(".stars");

if(!container) return;

const star = document.createElement("div");

star.classList.add("star");

star.innerHTML = "⭐";

star.style.left = Math.random() * window.innerWidth + "px";

star.style.top = "-20px";

star.style.animationDuration = (Math.random() * 3 + 2) + "s";

container.appendChild(star);

setTimeout(function(){

star.remove();

},5000);

}

setInterval(createStar,300);


// ================= SHOOTING STAR =================

function createShootingStar(){

const container = document.querySelector(".shooting-stars");

if(!container) return;

const star = document.createElement("div");

star.classList.add("shooting-star");

star.innerHTML = "⭐";

// posisi random di bagian atas layar

star.style.top = Math.random() * 150 + "px";

star.style.left = Math.random() * window.innerWidth + "px";

container.appendChild(star);

setTimeout(function(){

star.remove();

},3000);

}

setInterval(createShootingStar,4000);


// ================= SCROLL REVEAL =================

function reveal(){

const reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;

let elementTop = reveals[i].getBoundingClientRect().top;

let elementVisible = 120;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll", reveal);

// ================= SKILL BAR ANIMATION =================

function animateSkills(){

const skills = document.querySelector(".skill");

if(!skills) return;

let position = skills.getBoundingClientRect().top;
let screenPosition = window.innerHeight;

if(position < screenPosition - 100){

document.querySelector(".drawing").style.width = "80%";
document.querySelector(".digital").style.width = "85%";
document.querySelector(".writing").style.width = "50%";
document.querySelector(".imagination").style.width = "75%";
document.querySelector(".singing").style.width = "70%";
document.querySelector(".painting").style.width = "50%";

}

}

window.addEventListener("scroll", animateSkills);