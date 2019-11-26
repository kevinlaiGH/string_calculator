const add = (input) => {
    if (input === "") {
        return 0
    } else if (input.includes(",")) {
        const parts = input.split(",")
        const num1 = parseInt(parts[0], 10)
        const num2 = parseInt(parts[1], 10)



        return num1 + num2
    }else {
        return parseInt(input,10)
    }
}

const unknown = add("10,10,10")
console.log(unknown)

module.exports = {
    add,
}
