// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}



// Vidéo 
var video = document.getElementById("myVideo");
var videoContainer = document.querySelector(".video-container");

// Ajouter un gestionnaire d'événements pour le clic sur la vidéo
videoContainer.addEventListener("click", function() {
    // Vérifier si la vidéo est actuellement en mode plein écran
    var isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    
    // Si la vidéo n'est pas en mode plein écran, demander à la vidéo de passer en mode plein écran
    if (!isFullScreen) {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) { /* Safari */
            video.webkitRequestFullscreen();
        } else if (video.mozRequestFullScreen) { /* Firefox */
            video.mozRequestFullScreen();
        } else if (video.msRequestFullscreen) { /* IE/Edge */
            video.msRequestFullscreen();
        }
    }
});
