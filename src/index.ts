
function format(phoneNumber: string | number) : string {
    if (phoneNumber.toString().length !== 10) {
        return 'Please enter a 10-digit phone number and try again.'
    } else if (isNaN(Number(phoneNumber))) {
            return 'Please enter only numeric values and try again.'
    } else {
        let numString = phoneNumber.toString()
        let formattedNumber = '('
        formattedNumber += numString.slice(0,3)
        formattedNumber += ') '
        formattedNumber += numString.slice(3,6)
        formattedNumber += '-'
        formattedNumber += numString.slice(6,10)
        return formattedNumber
    }
}


// get the length of an entry

const phone1 = 12345
const phone2 = 1234567890
const phone3 = '12345'
const phone4 = '1234567890'
const phone5 = 'abcdefghij'


console.log(format(phone1))
console.log(format(phone2))
console.log(format(phone3))
console.log(format(phone4))
console.log(format(phone5))

