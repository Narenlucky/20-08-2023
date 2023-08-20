const drumPads = document.querySelectorAll('.drum-pad');
const audioElements = document.querySelectorAll('audio');

function playSound(e) {
    const keyCode = this.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    this.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

drumPads.forEach(pad => pad.addEventListener('click', playSound));
drumPads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', function (e) {
    const drumPad = document.querySelector(`.drum-pad[data-key="${e.keyCode}"]`);
    if (drumPad) {
        drumPad.click();
    }
});
