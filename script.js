// 🎵 Music Controls
const bgMusic = document.getElementById("bg-music");
const volumeSlider = document.querySelector(".volume-slider");
const muteBtn = document.querySelector(".music-btn i");

// AUTO PLAY MUSIC PAG OPEN NG PROFILE
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        bgMusic.play().catch(error => console.log("Autoplay blocked:", error));
    }, 1000);
});

// TOGGLE MUSIC MUTE
function toggleMute() {
    bgMusic.muted = !bgMusic.muted;
    muteBtn.classList.toggle("fa-volume-up", !bgMusic.muted);
    muteBtn.classList.toggle("fa-volume-mute", bgMusic.muted);
}

// SET VOLUME (Dapat gumana na ngayon)
function setVolume(value) {
    bgMusic.volume = value;
}

// HINDI NA MAPIPINDOT ANG LOGO NG MUSIC
document.querySelector(".music-circle").style.pointerEvents = "none";

// ℹ️ Toggle Info Panel
function toggleInfo() {
    const infoPanel = document.getElementById("infoPanel");
    infoPanel.classList.toggle("show");
}

// 📌 Smooth Hover Effect sa Profile Box (Mas Kontrolado)
document.addEventListener("mousemove", (event) => {
    const profile = document.querySelector(".profile-container");
    const moveX = (event.clientX - window.innerWidth / 2) * 0.015; // Mas binawasan
    const moveY = (event.clientY - window.innerHeight / 2) * 0.015;
    
    profile.style.transform = `translate(-50%, -50%) rotateY(${moveX}deg) rotateX(${moveY}deg)`;
});
