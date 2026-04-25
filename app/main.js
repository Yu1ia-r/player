const audio = document.querySelector('.audio')
const startPlay = document.querySelector('.button-play')

startPlay.addEventListener('click', () => {
  if(audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
})