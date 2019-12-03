// https://stackoverflow.com/questions/8359566/regex-to-match-symbols

// Changed: excluded/ deleted comma and dot
const check2 = RegExp(/^(..|[0-9,])/)
// also need to take in consideration of \s whitespaces
// it means any number, 1 or more characters

const numbersOnlyCheck = RegExp(/[0-9]+/)

const numbersAndSymbolsCheck = RegExp(/(\d)+/g)

const summation =  (splittedArr) =>{

    let intArray = splittedArr.map(x=> parseInt(x, 10))

    return intArray.reduce((a, b) => a + b, 0)
}

const gimmeAnswer = (parts) => {
    let newArr = []
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes("..")) {
            let sumOfConsecutiveNum = parts[i].split("..")
            let x = parseInt(sumOfConsecutiveNum[0], 10)
            let y = parseInt(sumOfConsecutiveNum[1], 10)
            let answer = (x + y) * (y - x + 1) / 2
            newArr.push(answer)
        } else {
            let z = parseInt(parts[i], 10)
            newArr.push(z)
        }
    }
    return newArr.reduce((a, b) => a + b, 0)
}

const gimmeAnswer2 = (parts) => {
    let arr = parts.map(function(val) {
        if (val.includes("..")) {
            let sumOfConsecutiveNum = val.split("..")
            let x = parseInt(sumOfConsecutiveNum[0], 10)
            let y = parseInt(sumOfConsecutiveNum[1], 10)
            let answer = (x + y) * (y - x + 1) / 2
            return answer
        } else {
            let z = parseInt(val, 10)
            return z
        }
    })

    return arr.reduce((a, b) => a + b, 0)

}

const add = (input) => {
    if ("" === input || null === input) {
        return 0
    }
    if (input.includes("..") && input.includes(",")) {
        // if it has commas, we will split it first and deal with .. later
        const parts = input.split(",")
        return gimmeAnswer2(parts)

    }
    if (input.includes(",")){
        // if it has commas, we will split it first and deal with .. later
        const partss = input.split(",")
        return gimmeAnswer2(partss)
    }

    if (input.includes(" ")) {
        const partsC = input.split(" ")
        return summation(partsC)
    }

    if (numbersAndSymbolsCheck.test(input)) {
        let found = input.match(numbersAndSymbolsCheck)
        return summation(found)
    }

    // if only integer as input, we output integer only
    if (numbersOnlyCheck.test(input)) {
        return parseInt(input, 10)
    }

    // if it doesn't has commas or dots, we will split it
    const partB = input.split(check2)
    const partBWithoutCheck2 = partB.filter(x => x !== '')
    return summation(partBWithoutCheck2)
}

const yeah = add("10,10,10" )
// const yeah = add("3,4..6,7,10,33..36,1"  )
// const yeah = add("3,4"  )

module.exports = {
    add,

}