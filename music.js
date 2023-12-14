const music = document.getElementById('music');

const playButton = document.createElement('button');
playButton.textContent = 'Play';
playButton.addEventListener('click', () => {
    music.play();
});

const pauseButton = document.createElement('button');
pauseButton.textContent = 'Pause';
pauseButton.addEventListener('click', () => {
    music.pause();
});

music.parentNode.insertBefore(playButton, music);
music.parentNode.insertBefore(pauseButton, music);
