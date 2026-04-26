const audio = document.querySelector('.audio')
const startPlay = document.querySelector('.button-play')
const spanAudioDuration = document.querySelector('.end-time')
const spanAudioCurrTime = document.querySelector('.current-time')
const progressBar = document.querySelector('.progress-bar')
const volumeBar = document.querySelector('.volume-bar')
const dropZone = document.querySelector('.drop-zone')
const changeThemeButton = document.querySelector('.change-theme')


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

  volumeBar.value = audio.volume

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

volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value
})

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault()
  dropZone.classList.add('hovered')
})
dropZone.addEventListener('dragleave', (event) => {
  dropZone.classList.remove('hovered')
})

dropZone.addEventListener('drop', (event) => {
  event.preventDefault()
  dropZone.classList.remove('hovered')
  console.log(event.dataTransfer.files[0])
audio.src = URL.createObjectURL(event.dataTransfer.files[0])
  
})

changeThemeButton.addEventListener('click', () => {
 document.body.classList.toggle('dark-mode')
 
})








