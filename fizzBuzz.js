/* - Write the named files for each case.
    1. Write a function that takes in a number and returns one of the following:
        - If the number is divisible by 3, return 'Fizz'.
        - If the number is divisible by 5, return 'Buzz'.
        - If the number is divisible by 3 and 5, return 'FizzBuzz'
        - Else, return the number passed as an argument
 */

function fizzBuzz(number){
    if(number%3==0){
        if(number%5==0){
            return ("FizzBuzz");
        }else{
            return ("Fizz");
        }
    }else if(number%5==0){
        return ("Buzz");
    }else{
        return (number);
    }
} 


module.exports = fizzBuzz;

