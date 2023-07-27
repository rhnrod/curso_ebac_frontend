const form = document.getElementById('form-check');

form.addEventListener("submit", function(e){
    e.preventDefault();

    const valorA = document.getElementById('valor-a');
    const valorB = document.getElementById('valor-b');
    const fail = document.getElementById('fail-message');
    const success = document.getElementById('success-message');

    const successMessage = `Tudo certo!<br> ${valorB.value} é maior que ${valorA.value}.`;
    const failMessage = ` ${valorB.value} não é maior que ${valorA.value}.<br> Por favor, corrija os valores.`;

    
    if(Number(valorA.value) < Number(valorB.value)) {
        fail.style.display = 'none';
        success.innerHTML = successMessage;
        success.style.display = 'block';
    } else {
        success.style.display = 'none';
        fail.innerHTML = failMessage;
        fail.style.display = 'block';
    }


})