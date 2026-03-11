// ================= HERO TYPING =================

document.addEventListener("DOMContentLoaded", function(){

const heroText = "My Introduction :D!";
let heroIndex = 0;

function typeHero(){
    if(heroIndex < heroText.length){
        document.getElementById("typing").innerHTML += heroText.charAt(heroIndex);
        heroIndex++;
        setTimeout(typeHero,80);
    }
}

typeHero();


// ================= ABOUT TYPING =================

const aboutText = "Hello!! ^_^ My name is Ken. I'm a student at MAN 1 Model Banda Aceh. I enjoy learning new things, especially about art and creative projects. My MBTI is INFJ and my Enneagram type is 1w2. I love exploring many fandoms, drawing, watching movies, and improving my drawing skills every day. This website is my personal portfolio where I share my activities, interests, and projects that I have worked on.";

let aboutIndex = 0;

function typeAbout(){
    if(aboutIndex < aboutText.length){
        document.getElementById("aboutTyping").innerHTML += aboutText.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(typeAbout,35);
    }
}

typeAbout();

});
