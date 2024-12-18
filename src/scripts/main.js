$(document).ready(function() {
    // Inicialmente, ocultar as respostas
    $('.faq__answer').hide();

    // Quando uma pergunta for clicada
    $('.faq__question').click(function() {
        // Toggle para abrir/fechar a resposta correspondente
        $(this).next('.faq__answer').slideToggle();

        // Opcional: Se quiser fechar todas as outras respostas ao abrir uma nova
        // $('.faq__answer').not($(this).next()).slideUp();
    });
});
