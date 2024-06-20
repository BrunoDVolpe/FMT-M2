const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

const lista = document.querySelector(".list")
const listaHtml = produtos.map(prod => {
    return `<li>${prod.nome}: R$${prod.valor}</li>`
})
lista.innerHTML = listaHtml.join("")