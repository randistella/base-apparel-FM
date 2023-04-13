const inputBtn = document.getElementById('input')
const submitBtn = document.getElementById('button')

submitBtn.addEventListener('click', function() {
    if (inputBtn && inputBtn.value) {
        alert('my input has a value')
    } else {
        inputBtn.value === ''
        inputBtn.style.border = '2px solid red'
        inputBtn.innerHTML = 'error'
    }
})