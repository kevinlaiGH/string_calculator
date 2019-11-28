// https://stackoverflow.com/questions/8359566/regex-to-match-symbols
const checker = RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s\n]/)

const add = (input) => {
    if (input === "" || input === null) {
        return 0
    }
    if (checker.test(input)) {
        const parts = input.split(checker)
        const partsWithoutRegex = parts.filter(x => x !== '')
        let temp = []

        for ( let i = 0; i < partsWithoutRegex.length; i++){
            temp.push(parseInt(partsWithoutRegex[i], 10))
        }
        return temp.reduce(( a, b ) => a + b , 0)
    }
    return parseInt(input,10)
}

module.exports = {
    add,

}