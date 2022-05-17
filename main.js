var Btn = document.getElementById('Btn')
var input = document.getElementById('input')
var errorIcon = document.getElementById('error')

Btn.addEventListener('click', function() {
    if (input.value === '' ||  null) {
        console.log('no input');
        input.style.border = '2px solid var(--Soft_Red)';
        errorIcon.style.display = 'block';
    } else {
        input.style.border = '1px solid var(--Desaturated_Red)';
        errorIcon.style.display = 'none';
        }
    
})