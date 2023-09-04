document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('color-changer').addEventListener('click', function() {
        let text = document.querySelector('p');

        if(text.classList.contains('colored')) {
            text.classList.remove('colored');
        } else {
            text.classList.add('colored');
        };
    })
})