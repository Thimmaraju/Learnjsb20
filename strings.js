
price1 = Number("48")

price2 = Number("32")

totalprice = "80"

// price1+price2 === totalprice

// "4832" === "80"

totalamout = String(price1 + price2)
console.log(totalamout)

if(totalamout === totalprice){

    console.log("sum of 2 diiferent veg prioce is equal to total price")
}


str = `raju's place "Bangalore"`

console.log(str)

//"" '' ``

console.log(45+20+20-"40"+20)

//854020

str1 = "Thimmaraju"

str2 = "G"

finalstr = str1+" "+str2

console.log(finalstr)

st1 = "Raju Cypress TRianer"



console.log(st1.length)

st2 = st1.trim()

console.log(st1)
console.log(st2)
st3 = st1.toUpperCase()
console.log(st3)
st4 = st1.toLowerCase()
console.log(st4)


console.log(st1[1])

console.log(st1.charAt(3))
//st1[3] = "U"

//strings immutable


camprice1 = "₹51,989"

camprice2 = "₹74,489"

total = Number(camprice1.replace("₹", "").replace(",", "")) + Number(camprice1.replace("₹", "").replace(",", ""))

console.log(total)

//string - array - split("")

//arry - string  - join("")

st5 = "Raju naveen shoba"

if(st5.includes("shoba")){

    console.log("string is presnt")
}


const name2 = 'Peter';
const name1 = "Jack";
const result = `The names are ${name2} and ${name1}`;

//The Name are Peter and Jack

res2 = "The Name are "+name2+" and "+name1


const a = 'hello';  // string 
//const b = new String('hello'); // object

st7 = "JavaScript\nraju"

//st8 = st7.substr(0,4)

console.log(st7)

