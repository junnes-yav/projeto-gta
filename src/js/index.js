/* 

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve
abrir uma caixa com os botões de seleção de plataforma
        Passo 1 - pegar o botão de seleção de plataformas no JS
        pra poder verificar quando o usuário clicar em cima dele
        
       Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado 
    
       Passo 3 - pegar o clique do usuário no js

       Passo 4 - quando o usuário clicar 

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o 
usuário clicar em cima do botão, o conteúdo deve ser escondido
*/

const botao = document.querySelector(".btn-plataforma");
console.log(botao);

const elementoPlataformas = document.querySelector("btn-plataforma .plataformas ");

botao.addEventListener("click", () => {
    console.log("o botão foi clicado")
    (elementoPlataformas.classList.add('ativo'));

   

