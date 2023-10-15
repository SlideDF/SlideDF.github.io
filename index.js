const video = document.getElementById('video-leexit')
const iphone = document.getElementById('cadre-iphone')
const volumeOn = document.getElementById('volume-on')
const volumeOff = document.getElementById('volume-off')
const formMail = document.getElementById('form-mail')
const email = document.getElementById('email')
const reponseMail = document.getElementById('reponse-mail')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const btnContact = document.getElementById('btn-contact')

setTimeout(() => {
    video.src = './assets/videos/Leexit.mp4'
    video.volume = 0
}, 1000)

setInterval(() => {
    video.style.height = parseInt(iphone.clientHeight) - 8 + 'px'
    video.style.width = parseInt(iphone.clientWidth) - 15 + 'px'
}, 1000)

volumeOn.onclick = () => {
    volumeOff.style.removeProperty('display')
    volumeOn.style.removeProperty('display')
    video.volume = 0
}

volumeOff.onclick = () => {
    volumeOff.style.display = 'none'
    volumeOn.style.display = 'block'
    video.volume = 0.5
}

formMail.onsubmit = (event) => {
    event.preventDefault()

    modal.style.display = 'flex'

    if(email.value.includes('@') && (email.value.includes('.com') || email.value.includes('.fr'))) {
        reponseMail.innerText = 'Enregirstement validé !'
    } else {
        reponseMail.innerText = "L'adresse mail n'est pas valide !"
    }

    email.value = ''
}

closeModal.onclick = () => modal.style.removeProperty('display')

btnContact.onclick = (event) => {
    window.location.href = '#cgu'
    event.preventDefault()
}