// https://stackoverflow.com/questions/8359566/regex-to-match-symbols

// Changed: excluded/ deleted comma and dot
const checker = RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s\n]/)

const check2 = RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?\/\s\n]/)

const add = (input) => {
    if (input === "" || input === null) {
        return 0
    }
    if (checker.test(input)) {
        let newArr =[]
        // if it has commas, we will split it first and deal with .. later
        if (input.indexOf(',') > -1) {
            const parts = input.split(",")

            for (let i=0 ; i< parts.length; i++){
                if (parts[i].includes("..")){
                    let sumOfConsecutiveNum = parts[i].split("..")
                    let x = parseInt(sumOfConsecutiveNum[0],10)
                    let y = parseInt(sumOfConsecutiveNum[1],10)
                    let answer =(x+y)*(y-x+1)/2
                    newArr.push(answer)
                }
                else {
                    let z = parseInt(parts[i],10)
                    newArr.push(z)
                }
            }
            return newArr.reduce(( a, b ) => a + b , 0)
            // console.log("hello here:",newArr.reduce(( a, b ) => a + b , 0))
        }

        // if it doesn't has commas or dots, we will split it
        if (check2.test(input)){
            const partB = input.split(check2)
            const partBWithoutCheck2 = partB.filter(x => x !== '')
            // console.log("partBWithoutCheck2: ",partBWithoutCheck2 )
            let temp = []

            for ( let i = 0; i < partBWithoutCheck2 .length; i++){
                temp.push(parseInt(partBWithoutCheck2 [i], 10))
            }
            return temp.reduce(( a, b ) => a + b , 0)
        }
        return parseInt(input,10)
    }
    return parseInt(input,10)
}


module.exports = {
    add,

}