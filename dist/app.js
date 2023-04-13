const inputBtn = document.getElementById('input')
const submitBtn = document.getElementById('button')
const errorMsg = document.getElementById('error')
const successMsg = document.getElementById('success')

submitBtn.addEventListener('click', function () {
       if (inputBtn.value === '') {
        inputBtn.style.border = '2px solid red'
        errorMsg.textContent = "Please enter a valid email"
        successMsg.textContent = ''
       } else {
        inputBtn.style.border = '2px solid green'
        errorMsg.textContent = ''
        successMsg.textContent = 'Thank you!'
    }
})