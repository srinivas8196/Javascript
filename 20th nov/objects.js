function car(company,name,seater)
{
    this.company = company;
    this.name = name;
    this.seater = seater;
}

var c1 = new car("Toyota","Innova","7")
console.log(c1)

var c2 = {
    name: "Fortuner",
    company:"Toyota",
    seater:"5"
}

console.log(c2.company)//menthod 1
console.log(c2["name"])//method
c2.company = "Suzuki";
console.log("New Company",c2.company)

var student={

    sname: "srinivas",
    age : "26",
    email: "abc@gmail.com",
    result: function(){
        console.log("The result of:"+this.sname+"of age"+this.age+"has passed")

    }

}
console.log(student.sname)
console.log(student.email)
student.result()
student.class="First Class"
console.log("Student Details:",student)
//document.write(student)