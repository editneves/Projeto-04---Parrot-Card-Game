function funcaoPaginaCarregada() {

    let qtde = 0;
    do {
        qtde = Number(prompt("Com quantas cartas deseja jogar?" +
            " Escolha um número Par entre 4 e 14."));
        // verificar se o número é par
        var resultado = qtde % 2 == 0; // boolean se true par  se impar false
        console.log((!resultado), !(qtde <= 14 && qtde >= 4))
    } while (!resultado || !(qtde <= 14 && qtde >= 4))
    
    


}

setTimeout(() => {
    funcaoPaginaCarregada()
}, 1000)



