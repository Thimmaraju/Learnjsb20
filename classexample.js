
// function add(a,b){

//     console.log(a+b)
// }

// add(7,9)

// class Employee{

//      x= 20

//      y=30 

//      printmessage(){

//         console.log("This is simple method")
//      }

//      add(x,y){

//         return x+y
//      }

// }

// const emp = new Employee()

// console.log(emp.x)

// emp.printmessage()

// result = emp.add(5,8)
// console.log(result)

// const emp2 = new Employee()

// emp2.x


// class  student {


//     constructor(stuname, coursename){

//         console.log("Student name is "+ stuname)
//         console.log("Student opted "+coursename+" course ")
//     }
// }

// const st1 = new student("Mahesh", "Manual testing")

// const st2 = new student("Shoba", "cypress")



// class Car{

//            x = 20

//     static y = 40


//     method1(){

//         console.log("This is not static method")
//     }

//     static method2(){

//         console.log("This is static method")
//     }

// }


// const obj1 = new Car()

// obj1.method1()

//  Car.method2()




class A {

    printmessage(){
       console.log("Parent class method")
    }
    
    add(a,b){
    
       console.log(a+b)
    
    }
  
  }
  
  class B extends A{
  
   printmessage(){
       console.log("child class method")
    }
    
     add(a,b,c){
    
       console.log(a+b+c)
    
    }
  }
  
  const obj = new A()
  
  obj.printmessage()
  
  obj.add(4,5,6)