// Liste des fichiers audio et leurs titres
const chansons = [
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/The Weeknd - Blinding Lights (Official Audio).mp3",
        titre: "🎶The Weeknd - Blinding Lights🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Heavy Is the Crown (Official Audio) - Linkin Park.mp3",
        titre: "🎶Linkin Park - Heavy Is the Crown🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Swimming Pools (Drank) (Extended Version).mp3",
        titre: "🎶Kendrick Lamar - Swimming Pools🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/barcelona92.mp3",
        titre: "🎶Green Montana - Barcelona92 Feat. SDM🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Deen Burbigo - Immunité Diplomatique (Feat. Alpha Wann).mp3",
        titre: "🎶Deen Burbigo - Immunité Diplomatique Feat. Alpha Wann🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Lamborghini benie.mp3",
        titre: "🎶Freeze Corleone - Lamborghini Benie🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Lefa - Métaverse (clip officiel).mp3",
        titre: "🎶Lefa - Métaverse🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/POP SMOKE - MANNEQUIN ft. Lil Tjay (Official Lyric Video).mp3",
        titre: "🎶Pop Smoke - Mannequin Feat. Lil Tjay🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Lex Luthor (feat. Luther).mp3",
        titre: "🎶NeS - Lex Luthor Feat Luther🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/LAYLOW - SPECIAL feat NEKFEU & FOUSHEÉ.mp3",
        titre: "🎶Laylow - SPECIAL Feat Nekfeu & Foushe🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Linkin Park & JAY-Z - Jigga What ⧸ Faint.mp3",
        titre: "🎶Linkin Park & JAY-Z - Jigga What⧸Faint.mp3🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Bekar - Finalement feat SDM (clip officiel).mp3",
        titre: "🎶Bekar - Finalement Feat SDM🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Metro Boomin, Future, Chris Brown - Superhero.mp3",
        titre: "🎶Metro Boomin - Superhero Feat Future & Chris Brown 🎶"
    },
    {
        src: "C:/Users/deniz/OneDrive/Documents/Epitech/T WEB-500/Programme/DAY4-5/Musique/Future, Metro Boomin, Kendrick Lamar - Like That (Official Audio).mp3",
        titre: "🎶Future & Metro Boomin - Like That Feat Kendrick Lamar 🎶"
    }
];

let chansonActuelle = 0; // Index de la chanson actuelle

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const vinyleImg = document.getElementById('vinyle'); // Récupération de l'image du vinyle
const titreMusique = document.getElementById('titreMusique'); // Élément pour afficher le titre

// Fonction pour changer la musique
function changerMusique(index) {
    chansonActuelle = index;
    audioPlayer.src = chansons[chansonActuelle].src; // Changer la source audio
    titreMusique.textContent = chansons[chansonActuelle].titre; // Afficher le titre de la musique
    audioPlayer.load();
    audioPlayer.play();
    vinyleImg.classList.add('vinyle'); // Ajouter l'animation
}

// Écouteurs d'événements pour les boutons
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️ Pause la Musique';
        vinyleImg.classList.add('vinyle'); // Ajouter l'animation
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '🎵 Jouer la Musique';
        vinyleImg.classList.remove('vinyle'); // Retirer l'animation
    }
});

// Bouton Précédent
prevBtn.addEventListener('click', () => {
    chansonActuelle = (chansonActuelle > 0) ? chansonActuelle - 1 : chansons.length - 1;
    changerMusique(chansonActuelle);
});

// Bouton Suivant
nextBtn.addEventListener('click', () => {
    chansonActuelle = (chansonActuelle < chansons.length - 1) ? chansonActuelle + 1 : 0;
    changerMusique(chansonActuelle);
});

// Écouteur pour la fin de la musique
audioPlayer.addEventListener('ended', () => {
    chansonActuelle = (chansonActuelle < chansons.length - 1) ? chansonActuelle + 1 : 0; // Passe à la chanson suivante ou revient à la première
    changerMusique(chansonActuelle);
});

// Charger la première chanson par défaut
changerMusique(chansonActuelle);
