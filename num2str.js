/* eslint-disable */
function numToStr(number) {
    let onesandteens = ['zero', 'one', 'two', 'three', 'four',
            'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tys = ['twenty','thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let digit = 0
    if (number < 20) return onesandteens[number]
    if (number < 100) {     
        digit = number % 10  
        return tys[Math.floor(number/10)-2] + " " + (digit > 0 ? onesandteens[digit] : "") 
    }
    if (number < 1000) return onesandteens[Math.floor(number/100)] + " hundred " + (number % 100 > 0 ? numToStr(number % 100) : "")  
    if (number < 100000) return numToStr(Math.floor(number/1000)) + " thousand " + (number % 1000 > 0 ? numToStr(number % 1000) : "")
    if (number < 10000000) return numToStr(Math.floor(number/100000)) + " hundred " + (number % 100000 > 0 ? numToStr(number % 100000) : "")
}

console.log(numToStr(0))
console.log(numToStr(1))
console.log(numToStr(10))
console.log(numToStr(16))
console.log(numToStr(100))
console.log(numToStr(105))
console.log(numToStr(118))
console.log(numToStr(127))
console.log(numToStr(1111))
console.log(numToStr(10000))
console.log(numToStr(27555))
console.log(numToStr(11111))
console.log(numToStr(999999))
console.log(numToStr(123456))
console.log(numToStr(810917))
console.log(numToStr(127742))