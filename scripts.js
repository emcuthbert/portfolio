// ENVELOPE
if (document.querySelector('.envelope')) {
    let envelope = document.querySelector('.envelope')
    envelope.addEventListener('click', function (){
        envelope.classList.toggle('envelope-active')
    })

}


// NAMETAG
if (document.querySelector('.nametag')) {
    let nametag = document.querySelector('.nametag')
    let bio = document.querySelector('.bio')
    let bioClose = document.querySelector('.bio-close')
    nametag.addEventListener('click', function (){
        bio.classList.add('bio-active')
    })
    bioClose.addEventListener('click', function() {
        bio.classList.remove('bio-active')
    })
}


// OCTOPUS
if (document.querySelector('.octopus')) {
    let octopus = document.querySelector('.octopus')
    octopus.addEventListener('click', function() {
        octopus.classList.toggle('octopus-switch')
    })
}
