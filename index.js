let globalArrayEmb = []
let globaQtde = 0
let globalCount = 0;
let globalQtdeClassDisableCarta = 0;

function funcaoPaginaCarregada() {
    let qtde = 0;

    do {
        qtde = Number(prompt("Com quantas cartas deseja jogar?" +
            " Escolha um número Par entre 4 e 14."));
        //verificar se o número é par
        var resultado = qtde % 2 == 0; // boolean se true par  se impar false
        console.log((!resultado), !(qtde <= 14 && qtde >= 4))
    } while (!resultado || !(qtde <= 14 && qtde >= 4))

    globaQtde = qtde
    globalArrayEmb = EmbaralhaArray()

    CreateCarta()
}

function EmbaralhaArray() {
    const qtde = globaQtde
    let imgArray = [
        'fiestaparrot',
        'explodyparrot',
        'metalparrot',
        'unicornparrot',
        'revertitparrot',
        'tripletsparrot',
        'headbanging',
        'party',
        'party2',
    ];

    let q = qtde / 2;
    const imgArray2 = []
    if (q <= imgArray.length) {

        for (let i = 0; i < q; i++) {
            imgArray2.push(imgArray[i])
        }

        console.log(imgArray2)
    }

    const duplicateArray = [...imgArray2, ...imgArray2];

    //embaralhamento da imgArray
    duplicateArray.sort(comparador); //Array estará embaralhada

    function comparador() {
        return Math.random() - 0.5;
    }
    return duplicateArray

}

function CreateCarta() {
    document.getElementsByClassName('.painel-de-cartas').innerHTML = '';
    const arrayEmb = globalArrayEmb
    const qtde = globaQtde
    // lista de imagens - array
    const lista = document.querySelector('.painel-de-cartas');

    let contador = 0;
    while (qtde > contador) {
        lista.innerHTML +=
            `
         <div class="carta" onclick="selecionarCarta(this)" data-image="./assests/${arrayEmb[contador]}.gif">
            <img src="./assests/back.png" class="bird" />
         </div>
        `;
        contador++;
    }
}

let arrayCartasViradas = [];

function selecionarCarta(carta) {
    
    virarCarta(carta)

    arrayCartasViradas.push(carta);

    if (arrayCartasViradas.length >= 2) {

        if (arrayCartasViradas[0].dataset.image === arrayCartasViradas[1].dataset.image) {
            setTimeout(() => {
                cartasiguais(arrayCartasViradas)
                arrayCartasViradas = [];
            }, 1000)
        }
        else if (arrayCartasViradas[0].dataset.image != arrayCartasViradas[1].dataset.image) {
            setTimeout(() => {
                cartasdiferentes(arrayCartasViradas)
                arrayCartasViradas = [];
            }, 1000)
        }
    }

    function cartasiguais(arrayCartasViradas) {
        arrayCartasViradas[0].classList.add("disable-carta");
        arrayCartasViradas[1].classList.add("disable-carta");
    }

    function cartasdiferentes(arrayCartasViradas) {
        arrayCartasViradas[0].firstElementChild.setAttribute("src", "./assests/back.png");
        arrayCartasViradas[1].firstElementChild.setAttribute("src", "./assests/back.png");
    }

    globalCount++;
    console.log(globalCount)

    setTimeout(() => {
        CartaClicada()
    }, 2000)
    
}

function CartaClicada() {
    //globalQtdeClassDisableCarta = document.getElementsByClassName('disable-carta').length;
    if (globaQtde === document.getElementsByClassName('disable-carta').length) {
        alert(`Você ganhou em  ${globalCount} jogadas!`)
    }
}

function virarCarta(carta) {
    const imgElement = carta.firstElementChild
    imgElement.setAttribute("src", carta.dataset.image);
}

setTimeout(() => {
    funcaoPaginaCarregada()
}, 1000)
