// Quando temos funções que alteram um mesmo elemento, é recomendado declarar dentro da função a constante do elemento, porque
// se usar só uma declaração pegando o elemento, em alguns frameworks, ou dependendo da arquitetura, pode acontecer de a função
// usar o elemento original, ou seja, sem eventuais alterações provocadas por outras funções. Quando pegamos novamente o
// elemento, garantimos que venha a versão mais atualizada dele.
function mudarCor() {
    const paragrafo = document.querySelector("#paragraph")
    paragrafo.style.color = "red"
}

function alternarClasse() {
    const paragrafo = document.querySelector("#paragraph")
    paragrafo.classList.toggle("dark-mode")
}

function alternarAtributo() {
    const paragrafo = document.querySelector("#paragraph")
    if (!paragrafo.attributes.getNamedItem("aria-label")) {
        paragrafo.setAttribute("aria-label", "Parágrafo de exemplo.")
    } else {
        paragrafo.removeAttribute("aria-label")
    }
}

// Exemplo evento com tecla -> o evento traz, entre as infos, as teclas que o usuário clicou
let myInput = document.getElementById('myInput');
 myInput.addEventListener('keydown', (event) => {
 console.log(`Key down: ${event.key}`);
 });

// Exemplo evento de formulário
const myForm = document.getElementById("myForm")

myForm.addEventListener('submit', (event) => {
    event.preventDefault() // Previne o envio padrão do formulário
    console.log("Submit do form")
    console.log(event)
    // No evento temos várias infos, como por exemplo o target (elemento enviado) e os campos com seus valores preenchidos.
})