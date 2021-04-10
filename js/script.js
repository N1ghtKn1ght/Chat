let inputs = document.querySelectorAll('.inputs-auth')

inputs.forEach((e)=> {
    e.addEventListener('input', () => {
        let id = e.getAttribute('id')
        let label = document.getElementById(id+'-label')
        if(e.value.length == 1){
            label.style.display = 'block'
            label.style.animation = 'show .1s'
            label.style.animationFillMode = 'both'
        }
        if(e.value.length == 0){
            label.style.animation = 'hide .1s'
            label.style.animationFillMode = 'both'
        }
    })
})