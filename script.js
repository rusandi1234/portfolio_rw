// Desktop keyboard enter
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        startSystem();
    }
});

// Mobile tap support
document.addEventListener("click", function() {
    startSystem();
});

// Optional touch support
document.addEventListener("touchstart", function() {
    startSystem();
});// LOADER
window.onload = () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
};

// CURSOR FOLLOW
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  }
});

// HERO TYPING EFFECT
const heroText = [
  "Future Business Analyst",
  "Anime UI Designer",
  "Creative Tech Enthusiast"
];

let i = 0;
let j = 0;

function typeHero() {
  const el = document.querySelector(".typing");
  if (!el) return;

  el.innerText = heroText[i].slice(0, j);
  j++;

  if (j > heroText[i].length) {
    j = 0;
    i = (i + 1) % heroText.length;
  }

  setTimeout(typeHero, 120);
}

typeHero();


// ABOUT TYPEWRITER (RPG / ABOUT SECTION)
const aboutText = 
`Hello, I'm Rusandi ✨
A creative web developer & business computing student.

I love building futuristic UI designs,
anime-inspired websites,
and gaming-style interfaces.

Welcome to my digital world 🌌`;

let k = 0;

function typeAbout() {
  const el = document.getElementById("typingText");
  if (!el) return;

  if (k < aboutText.length) {
    el.innerHTML += aboutText.charAt(k);
    k++;
    setTimeout(typeAbout, 40);
  }
}

typeAbout();


// PARTICLES
function createParticles() {
  for (let i = 0; i < 25; i++) {
    let p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 5 + 3) + "s";
    p.style.opacity = Math.random();

    document.body.appendChild(p);
  }
}

createParticles();


// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let el of reveals) {
    let top = el.getBoundingClientRect().top;
    let height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add("active");
    }
  }
});
const boot = document.getElementById("boot");
const fill = document.getElementById("bootFill");
const statusText = document.getElementById("statusText");
const pressStart = document.getElementById("pressStart");

let progress = 0;

const messages = [
  "INITIALIZING SYSTEM...",
  "LOADING UI MODULES...",
  "SYNCING CYBER GRID...",
  "CONNECTING NEURAL INTERFACE...",
  "SYSTEM READY"
];

let msgIndex = 0;

let loader = setInterval(() => {

  progress += 2;
  fill.style.width = progress + "%";

  if (progress % 20 === 0 && msgIndex < messages.length) {
    statusText.innerText = messages[msgIndex];
    msgIndex++;
  }

  if (progress >= 100) {
    clearInterval(loader);

    statusText.innerText = "SYSTEM READY";
    pressStart.style.opacity = 1;

    document.addEventListener("keydown", startGame);
  }

}, 60);

function startGame(e) {
  if (e.key === "Enter") {
    boot.style.opacity = "0";
    boot.style.transition = "1s";

    setTimeout(() => {
      boot.style.display = "none";
    }, 1000);
  }
}
