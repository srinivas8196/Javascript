var num1=[12,13,14,15];
var s1=["srinvas","shakul","karnika","rahul"]
var s2=["apple","mango",100]
var num2=new Array(15,20,25,30)
document.write(s1)
var len = s1.length;
s1.push("Arrays tutorial")
s1.unshift("Hero Vired")
console.log(s1)
s1.pop();
s1.shift();
console.log(s1)
s1.splice(0,1,"Java","script")//inserts the values to specified index location
console.log(s1)
s1.splice(2,3,"HTML","Python")
console.log(s1)
s1.splice(2,3)//to print ony specified values and remove all other
console.log(s1)
