process.on('message', (response) =>{
    console.log(response)
    process.send({res: random_calculator(response)})
})

function Random(max, min){
    return Number(Math.floor(Math.random() * (max - min)))
}

function random_calculator(cant){
    //console.log(cant)
    let min = 1
    let numbers = []
    let repeatedOnes = {}
    for (let index = 0; index <= cant; index++) {
        const randomNumber = Random(cant, min)
        numbers.push(randomNumber) 
    }
    numbers.sort()
    numbers.forEach((num) => repeatedOnes[num] = (repeatedOnes[num] || 0)+1)

    return repeatedOnes
}



