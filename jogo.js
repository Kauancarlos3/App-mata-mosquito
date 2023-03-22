let altura = 0;
let largura = 0;


function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight;
    largura = window.innerWidth;

    // console.log(altura, largura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica() {

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;// operador ternario >>> var (nome da variavel) = <condicão> ? <verdadeiro> : <falso>
    posicaoY = posicaoY < 0 ? 0 : posicaoY;// operador ternario >>> var (nome da variavel) = <condicão> ? <verdadeiro> : <falso>

    // console.log(posicaoX, posicaoY);

    //Adicionar uma imagem de forma programatica
    let imagem = document.createElement('img'); // criar um elemento html
    imagem.src = 'imagens/mosca.png'; // acessar o src
    imagem.className = tamanhoAleatorio();// acessar o css //chamou a função aqui pra acessar as 3 imagens

    imagem.style.left = posicaoX + 'px';
    imagem.style.top = posicaoY + 'px';
    imagem.style.position = 'absolute';

    document.body.appendChild(imagem); //incluir no body

    console.log(tamanhoAleatorio());

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


