// console.log("this is index")
function average(arr){
    let sum = 0;
    arr.forEach(element => {
       sum += element; 
    });
    return sum/arr.length
}
function sum(a, b){
    let add = a + b;
    return add
}

module.exports = average;
module.exports = sum;