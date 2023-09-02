let answer = 0;

let escape = document.addEventListener('keyup', function(e) {
    if(e.key === 'Escape') {
        answer = Number(prompt('Do you really want to leave?\nType 1 for YES\nType 2 for NO'));
        answer == 1 ? 
        document.getElementById('title').innerHTML = '¡Adios!' :
        document.getElementById('subtitle').style.color = 'red';
    }
})