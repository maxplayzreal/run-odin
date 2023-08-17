var bgm1 = new Audio("music/sneaky.mp3")
var musicPlaying = false

const audioStarter = document.getElementById("audioCheck")

function startAudio() {
    if (musicPlaying == false) {
        bgm1.looped = true
        bgm1.play();
        audioStarter.style.display = none;
        musicPlaying = true
    }
}