//TODO TASK_3:
//make a function 
//make an object
//input properties
//input data to properties
//subtract dislikes from likes
//return a number count for likes and dislikes

function counts (obj) { // creating a function that will pass an object
    let likes = obj.likes // declaring a variable likes value of = obj.likes (using . notation to get a property of the object)
    let dislikes = obj.dislikes // declaring a variable dislikes value of = obj.dislikes (using . notation to get a property of the object)
    likes -= dislikes // using subtraction assignment to subtract dislikes from likes then assigning the sum value to likes
    return likes // returning likes variable
}

console.log(counts({likes: 20, dislikes: 15})) // printing the function and object arguments to pass through the function.