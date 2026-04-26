const audio = document.querySelector('.audio')
const startPlay = document.querySelector('.button-play')
const spanAudioDuration = document.querySelector('.end-time')
const spanAudioCurrTime = document.querySelector('.current-time')
const progressBar = document.querySelector('.progress-bar')

startPlay.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
    startPlay.classList.add('is-playing')
  } else {
    audio.pause()
    startPlay.classList.remove('is-playing')

  }
})

audio.addEventListener('loadedmetadata', () => {
  const audioDuration = audio.duration
  const audioDuratinNornalize = `${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60)}`
  spanAudioDuration.innerHTML = audioDuratinNornalize

  progressBar.max = audioDuration

})

audio.addEventListener('timeupdate', () => {
  const sec = (Math.floor(audio.currentTime % 60)).toString().length > 1 ? Math.floor(audio.currentTime % 60) : `0${Math.floor(audio.currentTime % 60)}`
  const time = `${Math.floor(audio.currentTime / 60)}:${sec}`
  spanAudioCurrTime.innerHTML = time

  progressBar.value = audio.currentTime
})

progressBar.addEventListener('input', () => {
audio.currentTime = progressBar.value
})










