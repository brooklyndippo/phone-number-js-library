
function format(phoneNumber: string | number) : string {
    let numString = phoneNumber.toString()
    let phoneString = numString.replace(/[^a-zA-Z0-9]/g, '');
    if (isNaN(Number(phoneString))) {
        return 'Please enter only numeric values and try again.'
    } else if (phoneString.length !== 10) {
        return 'Please enter a 10-digit phone number and try again.'
    } else {
        let formattedNumber = '('
        formattedNumber += phoneString.slice(0,3)
        formattedNumber += ') '
        formattedNumber += phoneString.slice(3,6)
        formattedNumber += '-'
        formattedNumber += phoneString.slice(6,10)
        return formattedNumber
    }
}


// get the length of an entry


module.exports.format = format