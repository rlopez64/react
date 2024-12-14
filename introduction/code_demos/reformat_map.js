//you can take in multiple inputs when using map function

const childCaravan = [

    {child: 1, value: 5},
    {child: 2, value: 4},
    {child: 3, value: 2},
    {child: 5, value: 6},

];

//the key is to format the current element input as ({child, value})
const quickReformattedArray = childCaravan.map(({child, value}) =>

    //then here's where you reformat the data
    //looks like if you do [], it'll return as a string type
    ({[child]: value})

);


//it looks like this way for reformatting leaves each element as {'string': number}
console.log(quickReformattedArray);
console.log(childCaravan);
