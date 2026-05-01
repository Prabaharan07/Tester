function numbertype(number) {
let value=number
    if (value>0) {
           return 'number is greater than 0'  
    }
    else if(value<0)
    {
        return 'number is less than 0'
    }
    else
    {
         return 'Number is equal to 0'
    }
}
console.log(numbertype(2))
console.log(numbertype(-2))
console.log(numbertype(0))