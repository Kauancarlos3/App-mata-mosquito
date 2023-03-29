let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;


function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight;
    largura = window.innerWidth;

    // console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

let cronometro = setInterval(function(){

    tempo -= 1; 

    if(tempo < 0){
        clearInterval(cronometro);//Limpa os dados temporarios, para que quando chegar no fluxo ela não continue mais
        clearInterval(criamosca);
        window.location.href = 'vitoria_jogo.html';
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
    
}, 1000);

function posicaoRandomica() {

    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas > 3){
           window.location.href = 'fim_de_jogo.html';
        } else{
            document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png";//concatenação do id da imagem com a variavel vida, assim acrescentando programaticamente +1

           vidas++
        }
    };// condição que irá pegar o id e remover o ultimo elemento criado do mosquito. Foi usado o obejeto DOM dentro do if, porque ele irá ler como true e se caso foi true mesmo ele entra no bloco de códigos, caso não for seria null e não leria.

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;// operador ternario >>> var (nome da variavel) = <condicão> ? <verdadeiro> : <falso>
    posicaoY = posicaoY < 0 ? 0 : posicaoY;// operador ternario >>> var (nome da variavel) = <condicão> ? <verdadeiro> : <falso>

    // console.log(posicaoX, posicaoY);

    //Adicionar uma imagem de forma programatica
    let imagem = document.createElement('img'); // criar um elemento html
    imagem.src = 'imagens/mosca.png'; // acessar o src
    imagem.className = tamanhoAleatorio() + ' ' + ladoAleatorio();//acessar o css //chamou a função aqui pra acessar as 3 imagens //Foi precisso concatenar um espaço entre as funções por que são duas strings que a função chama, ou seja: mosquito1 e ladoA. As duas juntas ficariam uma string e o broese não iria interpretar.
    imagem.style.left = posicaoX + 'px';
    imagem.style.top = posicaoY + 'px';
    imagem.style.position = 'absolute';
    imagem.id = 'mosquito'; //Foi criado um id para poder manipular e remover o mosquito criador anteriormente 
    imagem.onclick = function(){
        this.remove()
    }// Essa função vai remover a imagem quando clicada // esse this. é usado na orientação a objetos

    document.body.appendChild(imagem); //incluir no body


}

function tamanhoAleatorio(){

    let classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'mosquito1';//Nesse caso não precisa do break, porque o return ja para tudo, retornando o dado.
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){

    let classe = Math.floor(Math.random() * 2);
    

    switch(classe){
        case 0:
            return 'ladoA';//Nesse caso não precisa do break, porque o return ja para tudo, retornando o dado.
        case 1:
            return 'ladoB';

    }
}

