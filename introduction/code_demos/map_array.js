//map function basically takes in an array
//loops through each value in the array
//and returns a new array with the updated values

const array1 = [1, 2, 3, 4, 5]

//it's almost like the equivalent to a for loop
const map1 = array1.map((x) =>

    x * 2

);

console.log(map1)

const weekly_allowance = [20, 15, 25, 10, 5]

//you got output array, input array, temp variable x(current element of array)
const after_tax = weekly_allowance.map((child) =>

    child * 0.9

);

console.log(after_tax)



