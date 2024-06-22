const paragrafo = document.getElementById('paragrafo')
const itensElementos = document.getElementsByClassName('item')
const itensElementos2 = document.querySelectorAll('.item')

console.log(paragrafo)

console.log(itensElementos) //HTMLCollection
// Para usar cada elemento preciso converter em objeto
//itensElementos.forEach(el => console.log(el)) // Não funciona
Object.values(itensElementos).map(el => console.log(el))

console.log(itensElementos2) //NodeList
itensElementos2.forEach(console.log)
console.log(typeof(itensElementos2))