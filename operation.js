// https://stackoverflow.com/questions/8359566/regex-to-match-symbols
const checker = RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s]/)

const add = (input) => {
    if (input === "" || input === null) {
        return 0
    } else if (checker.test(input)) {

        const parts = input.split(checker)
        let temp = []

        for ( let i = 0; i < parts.length; i++){
            temp.push(parseInt(parts[i], 10))
        }
        return temp.reduce(( a, b ) => a + b , 0)

    }else {
        return parseInt(input,10)
    }
}





module.exports = {
    add,

}