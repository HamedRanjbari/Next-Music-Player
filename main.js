let $ = document
let icons = $.querySelectorAll(".bi-play")
let overlay = $.querySelectorAll(".overlay")
let musicId = $.querySelectorAll("audio")
let playIcon = $.querySelectorAll("i")
let dataIcon;

icons.forEach(function (icon) {
  icon.addEventListener('click', function (event) {
    dataIcon = event.target.dataset.name
    musicId.forEach(function (music) {
      if (music.dataset.name === dataIcon) {
        music.currentTime = 0
        music.play()
      } else {
        music.pause()
      }
    })
  })
})