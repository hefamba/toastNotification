const button = document.getElementById('button')
const toast_container = document.querySelector('.toasts')

button.addEventListener('click', createToast)

function createToast(){
    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.innerText = 'new toast!'
    toast_container.appendChild(toast)

    setTimeout(createToast, 1000)

}