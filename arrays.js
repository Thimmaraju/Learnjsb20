

// raju = []  // empty array

// arr2 = [2,4,5,6,7,8,9]  // homogenious 

// arr3 = ["Raju", 4, "bangalore", true, null, undefined]

// console.log(arr2.length)

// console.log(arr3)

// //index of the element 

// console.log(arr3[7])

// //Inbuilt arrays methods 

// //concat() - to join the 2 different arrays 

// arr4 = arr2.concat(arr3)

// console.log(arr4)

// // reverse()

//   arr6 = arr3.reverse()

//   console.log(arr6)

//   numarr = [9,2,6,8,1,5]

//   sorted = numarr.sort()

//   console.log(sorted)

//   strarr = ["arun", "Arul", "Samarth", "deepu", "ramesh", "barath", "shashi"]

//   strsorted = strarr.sort()

//   console.log(strsorted)


// mixsorted = arr3.sort()

// console.log(mixsorted)



// //unshift - will add the elements at the beginning

// //shift  -  will remove the element at the beginning 

// //push  - will add the elements to end 

// //pop - will remove the element at the end 

// arr8 = ["Raju", "ramesh", "naveen", "mahesh"]

// // arr8.shift()

// // arr8.shift()

// // console.log(arr8)

// arr8[3] = "shashi"

// console.log(arr8)

// str = "Javascript python java c# Golang"

// arr9 = str.split(" ")

// //split - convert the string to array

// console.log(arr9)

// //join("")

// st2 = arr9.join("")

// console.log(st2)

// // reverse the string

// str3 = "reverse the string"

// revstr = str3.split("").reverse().join("") 

// console.log(revstr)

arr3 = ["Raju", 4, "bangalore", true, null, undefined]
console.log(arr3.indexOf("bangalore"))

//includes 

arr4 = ["Raju", "Naveen", "Shoba", "Ramesh"]

if (arr4.includes("Mahesh")) {

  console.log("Element is present")
}
//foreach()

arr = []

//or

// const array2 = new Array("eat", "sleep");

// array2 = ["eat", "sleep"]

arr5 = ["Raju", 4, "bangalore", true, null, undefined, "Raju", "Naveen", "Shoba", "Ramesh"]

// arr6 = arr5.slice(4)

// console.log(arr6)

// arr7 = arr5.splice(5)

// console.log(arr7)

let colors = ['red', 'green', 'blue'];
for (const i of colors) {
  console.log(i);
}

menus = ["Admin",
  "PIM",
  "Leave",
  "Time",
  "Recruitment",
  "My Info"]


for (const i of menus) {
  console.log(i);
}


str = "This is a sentence for Javascript example"

//reverse the words 

strarr = str.split(" ")

console.log(strarr)

finalstr = ""

for(let i=0; i<=strarr.length-1; i++){

   revstr = strarr[i].split("").reverse().join("")

   finalstr = finalstr+ revstr+ " "
}

console.log(finalstr)

word = "Javascript"
revword = word.split("").reverse().join("")

console.log(revword)


arr7  = [a,b,c]

arr8 = [1,2,3,4, 5]

output:  [a,1,b,2,c,3,d,4,e,f]

output:  [a,1,b,2,c,3,4,5]

//appsirra

