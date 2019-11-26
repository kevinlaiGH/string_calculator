const add = (input) => {
    if (input === "") {
        return 0
    } else if (input.includes(",")) {
        const parts = input.split(",")
        // const num1 = parseInt(parts[0], 10)
        // const num2 = parseInt(parts[1], 10)

        let temp = []

        for ( let i = 0; i < parts.length; i++){
            temp.push(parseInt(parts[i], 10))
        }
        return temp.reduce(( a, b ) => a + b , 0)
        //
        // return num1 + num2
    }else {
        return parseInt(input,10)
    }
}

const unknown = add("10,10,10")
console.log(unknown)

module.exports = {
    add,
}
