//genderType='female'
genderType='male'
function printGender()
{
    let color='brown' 
    if(genderType.startsWith('female'))
    {
        var age=30; 
        {
            let color='pink'
            console.log('Inside block',color)
        } 
    }
    console.log('Inside function',age)
}
printGender();
console.log(genderType)