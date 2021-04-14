/*TODO
- Create a function
- Make an Empty array
- Make a forLoop that will iterate the number data we input
- Check the number data we input and if odd then push to the array
- Use another loop to add all numbers together/ find sum
- Return the result, of number sum
*/
function odd (x) { //declared a function 
    let arr = [] //made an empty array
    for (let i = 0; i <= x; i++) {  //made for loop to iterate number data and increment by 1 if i is less than X
   if (i%2 !== 0) { //if statement, if, i has a remainder of two, strict inequality, checks the two operants are not equal and then checking the remainder is zero
       arr.push(i) //if the above statement number is not equate to zero, then push to the array
    }
    //console.log(arr) learning by Debugging
    } 
    let result = 0 //declaring variable with value zero
    for (let a = 0; a < arr.length; a++) { //made a for loop for iterating numbers to find sum
        result += arr[a] //getting result using addition assignment operator which will add both of the results and array together basically smashing them together, to make a sum.

    }
    return result
}
console.log(odd(13)) //console logging argument which is 5 in this case to build our array and find the sum.


