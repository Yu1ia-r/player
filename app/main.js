const audio = document.querySelector('.audio')
const startPlay = document.querySelector('.button-play')

startPlay.addEventListener('click', () => {
  if(audio.paused) {
    audio.play()
    startPlay.classList.add('is-playing')
  } else {
    audio.pause()
    startPlay.classList.remove('is-playing')

  }
})