function PlayAudio(){
    const audio = document.getElementById("audio1");
    audio.volume = 0.2;
    audio.play();
}

function closeAlert() {
    document.querySelector('.overlay').style.display = 'none';
}