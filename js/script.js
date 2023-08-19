$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const criarTarefa = $('#input-tarefa').val();
        $(`<li>${criarTarefa}</li>`).appendTo('ul');
        $('#input-tarefa').val('');
    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('concluido');
    })
})