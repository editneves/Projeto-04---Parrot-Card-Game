function funcaoPaginaCarregada() {
    let qtde = 0;

    do {
        qtde = Number(prompt("Com quantas cartas deseja jogar?" +
            " Escolha um número Par entre 4 e 14."));
        //verificar se o número é par
        var resultado = qtde % 2 == 0; // boolean se true par  se impar false
        console.log((!resultado), !(qtde <= 14 && qtde >= 4))
    } while (!resultado || !(qtde <= 14 && qtde >= 4))

    let arrayEmb = EmbaralhaArray()
    selecionarCarta(arrayEmb, qtde)
}

function EmbaralhaArray() {

    let imgArray = [
        'fiestaparrot',
        'explodyparrot',
        'metalparrot',
        'unicornparrot',
        'revertitparrot',
        'tripletsparrot',
        'fiestaparrot',
        'explodyparrot',
        'metalparrot',
        'unicornparrot',
        'revertitparrot',
        'tripletsparrot',
    ];

    //embaralhamento da imgArray
    imgArray.sort(comparador); //Array estará embaralhada


    function comparador() {
        return Math.random() - 0.5;
    }

    return imgArray
}

function selecionarCarta(arrayEmb, qtde) {
    // lista de imagens - array
    const lista = document.querySelector('.painel-de-cartas');

    console.log(qtde)

    let contador = 0;
    while (qtde > contador) {
        lista.innerHTML +=
        `<ul class="carta" onclick="selecionarCarta(this)">
            <li>
                <img src="./assests/${arrayEmb[contador]}.gif" class="bird" />
            </li>
        </ul>`;
        contador++;
    }
}
setTimeout(() => {
    funcaoPaginaCarregada()
}, 1000)
C:\Users\ruann\dev\ediane\Driven CursoProjeto 04 - Parrot Card Game
C:\Users\ruann\dev\ediane\Driven Curso\Projeto 04 - Parrot Card Game