// Sélectionne les éléments
const vinyle = document.getElementById('vinyle');
const playPauseBtn = document.getElementById('playPauseBtn');
const audioPlayer = document.getElementById('audioPlayer');

// Variable pour suivre l'état de lecture
let isPlaying = false;

// Fonction pour lancer la musique et l'animation
function playMusic() {
    audioPlayer.play();
    vinyle.classList.add('rotate'); // Ajoute la classe pour l'animation
    playPauseBtn.textContent = "⏸️ Mettre en pause"; // Change le texte du bouton
    isPlaying = true;
}

// Fonction pour arrêter la musique et l'animation
function pauseMusic() {
    audioPlayer.pause();
    vinyle.classList.remove('rotate'); // Enlève l'animation
    playPauseBtn.textContent = "🎵 Jouer la Musique"; // Change le texte du bouton
    isPlaying = false;
}

// Gère le clic sur le bouton
playPauseBtn.addEventListener('click', function () {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});


// script.js
const gif = document.getElementById('monGif');

gif.addEventListener('click', () => {
    if (gif.src.includes('votre-image.gif')) {
        gif.src = 'votre-image-anim-stop.gif'; // Remplacez par un GIF statique
    } else {
        gif.src = 'votre-image.gif'; // Remplacez par votre GIF animé
    }
});

// Ajoute un événement au survol pour le menu
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('mouseover', event => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block'; // Afficher le sous-menu
        }
    });

    item.addEventListener('mouseout', event => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none'; // Cacher le sous-menu
        }
    });
});

