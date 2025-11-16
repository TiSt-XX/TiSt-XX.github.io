// const video = document.getElementById("bg-videos");
// video.volume = 0.2;

// document.addEventListener("visibilitychange", function () {
//     if (document.hidden) {
//         video.muted = true;
//     } else {
//         video.muted = false;
//     }
// });

const popup = document.getElementById('popup');
const enterBtn = document.getElementById('enter-btn');

enterBtn.addEventListener('click', () => {
    popup.style.display = 'none';

});

const video = document.getElementById("bg-videos");
const audio = document.getElementById("bg-music");
video.pause();

audio.volume = 0.3;

document.body.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        video.play();
    }
}, { once: true });


document.addEventListener("visibilitychange", () => {
    if (popup == none){
        if (document.hidden) {
        audio.pause();
        video.pause();  
    } else {
        audio.play();
        video.play();  
    }
    }
    
});

