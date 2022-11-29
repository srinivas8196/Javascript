var n1 =[1,2,3,4,5,6,7,8,9,10,15]
var n2 = [2,3,4,5,1,2,4,56,7,89,44]
var  s2 =["ss","dd","aa","bb"]
console.log(n1.indexOf(2))//starting index of array
console.log(n1.lastIndexOf(10))//last index of array
console.log(n1.includes(5))// to chweck whether number is present or not


//to find the number greater than 5 
var s = n1.find(function(i) {
    return i>5;

})
console.log(s)

//filter the array
var s2 = n1.filter(function(i) {
    return i>5;

})
console.log(s2)

// here sorting will happen string wise not numerical
console.log(n2.sort())
console.log(s2.sort())

//it will be fixed using function

console.log(n2.sort(function(x,y)
{
    return x - y;
}))

// console.log(Math.max(n1)) its not taking array showing error

function Max(arr)
{
    return Math.max.apply(null,arr)//apply function to find maximum number from array
}
console.log("Maximum Number",Max(n2))


function Min(arr)
{
    return Math.min.apply(null,arr)//apply function to find minumum number from array
}
console.log("Minimum Number",Min(n2))