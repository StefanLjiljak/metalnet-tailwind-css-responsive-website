const audio = document.querySelector('#audio')
const alertModal = document.querySelector('#alertModal')
const cardModal = document.querySelector('#cardModal')
const headbang = document.querySelector('#headbang')
const influence = document.querySelector('#influence')

alertModal.addEventListener('click', (e) => {
    console.log('play', e.target)
    audio.play()
})

cardModal.addEventListener('click', (e) => {
    console.log('play', e.target)
    audio.play()
})

headbang.addEventListener('click', (e) => {
    console.log('play', e.target)
    audio.play()
})

influence.addEventListener('click', (e) => {
    console.log('play', e.target)
    audio.play()
})

