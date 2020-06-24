const audio = document.querySelector('#audio')
const alertModal = document.querySelector('#alertModal')
const cardModal = document.querySelector('#cardModal')
const headbang = document.querySelector('#headbang')
const influence = document.querySelector('#influence')

let control = true

const statusCheck = () => {
    if (control) {
        audio.play()
        control = !control
    } else {
        audio.pause()
        control = !control
    }
}

alertModal.addEventListener('click', () => statusCheck())

cardModal.addEventListener('click', () => statusCheck())

headbang.addEventListener('click', () => statusCheck())

influence.addEventListener('click', () => statusCheck())

