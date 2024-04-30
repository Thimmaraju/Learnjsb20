

const student = {

    stuname: "Naveeen",
    stunum : 418,
    place: "chennai"
}

console.log(typeof(student.stunum))

console.log(student.stuname)

console.log(student['place'])

student['course'] = "Cypress" // Adding the property to the Object


console.log(student.course)

delete student['place']

student['place'] = "Bangalore"
console.log(student.place)

const menuitems ={

     menu1: "Admin",
     menu2: "PIM",
     menu3 : "Leave",
     menu4: "Time",
     menu5: "Recruitment",
     menu6: "My Info"
}


//cy.contains().should("be.visible")

for(let i in menuitems){

    console.log(menuitems[i])
}


for(let i in menuitems){

    cy.contains(menuitems[i]).should("be.visible")
}
