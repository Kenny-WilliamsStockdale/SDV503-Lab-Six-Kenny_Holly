// Task_2
// TODO: Create a function that takes an array of non-negative integers and strings 
// and return a new array without the strings.
// make function
// make an array
// input is non-negative integers and strings
// return with a new array
// outputs with out string data type 
// Ex:  filterArr([1, 2, "a", "b"]) -> [1, 2]
// Ex:  filterArr([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

function returnString (a) { //creating a function with the parameter a
    let arr = [] //creating and empty array
    a.forEach((x) => { //using forEach to run our provided function through to the empty array
        if (typeof x === 'number')// checking that x is strictly equal to a number
        arr.push(x)//using this function along with forEach to push data from our arguments to the array

    })
return arr.filter((a, b) => arr.indexOf(a) === (b))//returning the array with a filter that checks to see if other data
                                                  //types that are the same are present, if two or more are the same, 
                                                  //then they're deleted and one only remains.
    }
console.log(returnString([1, "22", 'abcde', 7.4, '3', 1, 22])) //console logging our arguments to run throught the function



