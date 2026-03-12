// ================= HERO & ABOUT TEXT =================

let heroText = "My Introduction :D!";
let heroIndex = 0;

let aboutTextEN = "Hello!! ^_^ My name is Ken. I'm a student at MAN 1 Model Banda Aceh. I enjoy learning new things, especially about art and creative projects. My MBTI is INFJ and my Enneagram type is 1w2. I love exploring many fandoms, drawing, watching movies, and improving my drawing skills every day. This website is my personal portfolio where I share my activities, interests, and projects that I have worked on.";

let aboutTextID = "Halo!! ^_^ Nama saya Ken. Saya adalah siswa di MAN 1 Model Banda Aceh. Saya suka mempelajari hal-hal baru, terutama tentang seni dan proyek kreatif. MBTI saya INFJ dan tipe Enneagram saya 1w2. Saya suka menjelajahi berbagai fandom, menggambar, menonton film, dan meningkatkan kemampuan menggambar saya setiap hari. Website ini adalah portofolio pribadi saya tempat saya membagikan aktivitas, minat, dan proyek yang pernah saya kerjakan.";

let aboutText = aboutTextEN;
let aboutIndex = 0;


// ================= HERO TYPING =================

function typeHero(){

const heroElement = document.getElementById("typing");

if(heroElement && heroIndex < heroText.length){

heroElement.innerHTML += heroText.charAt(heroIndex);
heroIndex++;

setTimeout(typeHero,80);

}

}


// ================= ABOUT TYPING =================

function typeAbout(){

const aboutElement = document.getElementById("aboutTyping");

if(aboutElement && aboutIndex < aboutText.length){

aboutElement.innerHTML += aboutText.charAt(aboutIndex);
aboutIndex++;

setTimeout(typeAbout,35);

}

}


// ================= START TYPING =================

document.addEventListener("DOMContentLoaded", function(){

typeHero();
typeAbout();

});


// ================= FALLING STAR =================

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


// ================= SKILL BAR =================

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


// ================= NAVBAR ACTIVE =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});


// ================= IMAGE POPUP =================

document.addEventListener("DOMContentLoaded", function(){

const artworks = document.querySelectorAll(".project-card img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

artworks.forEach(function(img){

img.addEventListener("click", function(){

modal.classList.add("active");
modalImg.src = this.src;

});

});

modal.addEventListener("click", function(){
modal.classList.remove("active");
});

});


// ================= CURSOR SPARKLE =================

document.addEventListener("mousemove", function(e){

const star = document.createElement("div");

star.classList.add("cursor-star");
star.innerHTML = "⭐";

star.style.left = e.clientX + "px";
star.style.top = e.clientY + "px";

document.body.appendChild(star);

setTimeout(function(){
star.remove();
},800);

});


// ================= TRANSLATE SYSTEM =================

let currentLang = "en";

const translations = {

id:{

navHome:"BERANDA",
navAbout:"TENTANG SAYA",
navActivities:"AKTIVITASKU",

heroTitle:"Halo semuanya, aku Ken! Aku adalah siswa di MAN 1 Model Banda Aceh",
heroInfo:"INFJ | 1w2 | Multifandom",
heroButton:"Kenali Saya Lebih Dekat!",

aboutName:"Niken Aisyi Meyca",
aboutRole:"Pelajar | Seniman | Multifandom",

skillsTitle:"Keahlianku",

skill1:"Menggambar Tradisional",
skill2:"Seni Digital",
skill3:"Menulis Cerita",
skill4:"Imajinasi",
skill5:"Bernyanyi",
skill6:"Melukis",

activitiesTitle:"Aktivitasku",

act1Title:"Menggambar",
act1Desc:"Walaupun aku lebih suka seni digital, aku tetap menggambar secara tradisional dan digital. Menggambar membantuku mengekspresikan imajinasi dan kreativitas.",

act2Title:"Menonton Film",
act2Desc:"Menonton film adalah salah satu cara favoritku untuk bersantai. Aku menyukai genre alternatif dan cerita film barat.",

act3Title:"Fandom",
act3Desc:"Aku suka menjelajahi berbagai fandom, karakter, dan cerita yang menginspirasiku.",

projectsTitle:"Proyek & Karyaku",

proj1Title:"Challenge DTIYS",
proj1Desc:"Aku menggambar ulang karakter dari artis lain menggunakan gaya gambarku sendiri.",

proj2Title:"Redraw Karakter",
proj2Desc:"Aku suka menggambar ulang karakter dari artis lain dengan interpretasi gaya pribadiku.",

proj3Title:"Karakter Original",
proj3Desc:"Aku juga membuat karakter original dan mendesainnya dengan ilustrasi digital.",

footerName:"Niken Aisyi Meyca",
footerDesc:"Pelajar | Seniman | Multifandom"

},

en:{

navHome:"HOME",
navAbout:"ABOUT ME",
navActivities:"MY ACTIVITIES",

heroTitle:"Hello everynyan, I'm Ken! I'm a student at MAN 1 MODEL BNA",
heroInfo:"INFJ | 1w2 | Multifandom",
heroButton:"Get to know me better!",

aboutName:"Niken Aisyi Meyca",
aboutRole:"Student | Artist | Multifandom",

skillsTitle:"My Skills",

skill1:"Drawing Traditionally",
skill2:"Digital Art",
skill3:"Writing Story",
skill4:"Imagination",
skill5:"Singing",
skill6:"Painting",

activitiesTitle:"My Activities",

act1Title:"Drawing",
act1Desc:"Even though I prefer digital art, I draw both traditionally and digitally. Drawing helps me express my imagination and creativity.",

act2Title:"Watching Movies",
act2Desc:"Watching movies is one of my favorite ways to relax. I enjoy alternative genres and western movies.",

act3Title:"Fandom",
act3Desc:"I love exploring different fandoms, characters, and stories that inspire me.",

projectsTitle:"My Projects & Works",

proj1Title:"DTIYS Challenge",
proj1Desc:"I redraw other artists' characters using my own art style.",

proj2Title:"Character Redraw",
proj2Desc:"I enjoy drawing characters from different artists in my personal style.",

proj3Title:"Original Character",
proj3Desc:"I design my own original characters using digital illustration.",

footerName:"Niken Aisyi Meyca",
footerDesc:"Student | Artist | Multifandom"

}

};


// ===== TRANSLATE BUTTON =====

document.getElementById("translateBtn").addEventListener("click", function(){

currentLang = currentLang === "en" ? "id" : "en";

document.querySelectorAll("[data-id]").forEach(function(el){

const key = el.getAttribute("data-id");

if(translations[currentLang][key]){
el.innerText = translations[currentLang][key];
}

});


// ===== UPDATE ABOUT TYPING =====

aboutIndex = 0;
document.getElementById("aboutTyping").innerHTML = "";

aboutText = currentLang === "en" ? aboutTextEN : aboutTextID;

typeAbout();

});