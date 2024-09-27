document.getElementById("meuForm").addEventListener("submit",function(event){
    event.preventDefault(); //impede o envio padrão do formuário

    //captura os valores dos campos do formulário
    let nome =document.getElementById("nome").value;                        
    let email =document.getElementById("email").value;
    let mensagem = document.getElementById("msg").value;

    //verificação de campo vazios
    if(nome ===""||email===""||mensagem ===""){
        alert("Por favor, preencha todos os campos.");
        return;
    }
    //exemplo de validação de email simples
    let emailValido =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailValido.test(email)){
        alert("Por favor, insira um e-mail válido");
        return;
    }

    //exibe os valores nos elementos HTML
    document.getElementById("exibeNome").innerText = nome; //puxa o html
    document.getElementById("exibeEmail").innerText = email;
    document.getElementById("exibeMensagem").innerText = mensagem;

    //mensagem de sucesso 
    alert("Formulário enviado com sucesso");
});

function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}
 
function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}
 



function disableOptions(questionName){
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}





 
function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}
 
function submitQuiz(){
    let correctAnswers = {
        q1: "C",
        q2: "A",
        q3: "D",
        q4: "A" ,
        q5: "B" ,
        q6: "C" ,
        q7: "B" ,
        q8: "C" ,
        q9: "D" ,
        q10:"B" , 
        //Adicione as respostas corretas para as outras perguntas
    };
 
    let form = document.getElementById('quiz-form');
    let score = 0;
 
    for (let key in correctAnswers) {
        let userAnswers = form.elements[key].value;
        if (userAnswers === correctAnswers[key]) {
            score++;
        }
    }
 
    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas`
 
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('enviar').setAttribute('disabled', true);
 
    //Tocar som se todas as respostas estiverem corretas
    if (score === 10){
        let successSound = document.getElementById('venceusom');
        successSound.play();
    }
 
    if (score != 10){
        let errouQuiz = document.getElementById('perdeusom');
        errouQuiz.play();
    }
 
}
 
function responderNovamente(){
    score = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML = "";
    document.getElementById('quiz-form').reset();
 
    let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
   
}