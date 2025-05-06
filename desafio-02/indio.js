const altura = [1.8, 2, 1.75, 1.3, 2.1]

let soma = 0

altura.forEach(item => {
    soma += item
})

console.log(soma / altura.length)