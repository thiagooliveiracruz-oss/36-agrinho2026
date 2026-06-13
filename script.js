document.addEventListener('DOMContentLoaded', function() {
    
    const quizForm = document.getElementById('quiz-form');
    const divResultado = document.getElementById('resultado-quiz');

    quizForm.addEventListener('submit', function(evento) {
        evento.preventDefault();

        let pontuacao = 0;

        // Respostas corretas agora incluem a Q3
        const respostaCertaQ1 = 'b';
        const respostaCertaQ2 = 'c';
        const respostaCertaQ3 = 'a'; // Resposta da nova pergunta

        // Captura o que o usuário marcou
        const q1Selecionada = document.querySelector('input[name="q1"]:checked');
        const q2Selecionada = document.querySelector('input[name="q2"]:checked');
        const q3Selecionada = document.querySelector('input[name="q3"]:checked');

        // Verifica se todas as 3 foram respondidas
        if (!q1Selecionada || !q2Selecionada || !q3Selecionada) {
            alert("Por favor, responda todas as perguntas antes de ver o resultado!");
            return;
        }

        // Soma os pontos
        if (q1Selecionada.value === respostaCertaQ1) pontuacao++;
        if (q2Selecionada.value === respostaCertaQ2) pontuacao++;
        if (q3Selecionada.value === respostaCertaQ3) pontuacao++;

        let mensagem = "";
        divResultado.classList.remove('acerto-total', 'acerto-parcial', 'erro-total');

        // Nova lógica de notas (máximo agora é 3)
        if (pontuacao === 3) {
            mensagem = "Parabéns! Você acertou tudo (3/3). Você é um especialista em Agro 4.0!";
            divResultado.classList.add('acerto-total');
        } else if (pontuacao === 2 || pontuacao === 1) {
            mensagem = `Foi quase! Você acertou ${pontuacao} de 3. Revise o conteúdo e tente novamente.`;
            divResultado.classList.add('acerto-parcial');
        } else {
            mensagem = "Você não acertou nenhuma (0/3). Não desanime, leia as dicas acima e tente novamente!";
            divResultado.classList.add('erro-total');
        }

        divResultado.innerText = mensagem;
        divResultado.classList.remove('resultado-oculto');
        divResultado.classList.add('resultado-visivel');
    });
});