function toggleSound() {
    var audio = document.getElementById("myAudio");
    var transform = document.getElementById("textsound");

    if (audio.paused) {
        audio.play();
        transform.innerHTML = "Está tocando";
    } else {
        audio.pause();
        transform.innerHTML = "está desativado";
    }
}