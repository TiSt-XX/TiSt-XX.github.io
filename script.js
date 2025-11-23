// const continer = document.getElementById('continer');
// const enterbtu = document.getElementById('enterbtu');
    const video = document.getElementById("bg-videos");
    const audio = document.getElementById("bg-music");

    video.pause();
    audio.volume = 0.1;




function enterbtu() {
    let continer = document.getElementById('continer');
    let enterbtu = document.getElementById('enterbtu');

    if (continer.style.display === 'none'){
        enterbtu.style.display = 'none';
        continer.style.display = 'flex';
    } else {
        enterbtu.style.display = 'none';
        continer.style.display = 'flex';
    }
};

function enterbtu_startback() {
    let video = document.getElementById("bg-videos");
    let audio = document.getElementById("bg-music");
    if (video.pause){
        video.play();
        audio.play();
    } else {
        video.pause();
        audio.pause();
    }

};

function sociaon() {
    let continer = document.getElementById('continer');
    let socia = document.getElementById('socia');

    if ( socia.style.display === 'none') {
        continer.style.display = 'none';
        socia.style.display = 'block';
    } else {
        continer.style.display = 'none';
        socia.style.display = 'block';
    }
};

function sociaoff() {
    let continer = document.getElementById('continer');
    let socia = document.getElementById('socia');

    if ( socia.style.display === 'block') {
        continer.style.display = 'flex';
        socia.style.display = 'none';
    } else {
        continer.style.display = 'flex';
        socia.style.display = 'none';
    }
};