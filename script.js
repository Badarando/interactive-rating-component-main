function redirecionar() {
    window.location.href = './confirmation.html'
}

const numbers = document.querySelectorAll('.number')

let currentActive = 0

function active() {
    currentActive++

    if(currentActive > numbers.length) {
        currentActive = numbers.length
    }

    update()
}

function update() {
    numbers.forEach((number, idx) => {
        if(idx == currentActive) {
            number.classList.toggle('ativar')
        } 
    })
}
// const teste = document.querySelectorAll('.number');

// function active(index, array) {
//     teste.

//     console.log(teste);
// }
// function active(item, indice, array){
//     item = indice++;
//     const numeros = document.querySelectorAll(".number");
//     return numeros[indice].classList.add("active");
// }
// numeros.forEach(active());
