// ================= BOOT SYSTEM =================

const boot = document.getElementById("boot");

// START SYSTEM
function startSystem() {

    boot.style.display = "none";

}

// SCROLL BUTTON
function scrollToPortfolio() {

    document.getElementById("portfolio").scrollIntoView({
        behavior: "smooth"
    });

}

// ================= DESKTOP SUPPORT =================

// PRESS ENTER TO START
document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        startSystem();

    }

});

// ================= MOBILE SUPPORT =================

// TAP SCREEN
document.addEventListener("click", function() {

    startSystem();

}, { once: true });

// TOUCH SCREEN
document.addEventListener("touchstart", function() {

    startSystem();

}, { once: true });
