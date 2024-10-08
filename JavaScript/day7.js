console.log("object")


// let mernClassStd1 = "Iqra"
// let mernClassStd2 = "Tehreem"



// DRY - Don't Repeat Yourself


let studentsName = ["Iqra", "Tehreem", "Salman", "Subhanullah", "Akash", "Iqra", "Tehreem", "Salman", "Subhanullah", "Akash", "Iqra", "Tehreem", "Salman", "Subhanullah", "Akash", "Iqra", "Tehreem", "Salman", "Subhanullah", "Akash", "Iqra", "Tehreem", "Salman", "Subhanullah", "Akash", "Iqra", "Tehreem", "Salman", "Subhanullah", "Akash", "Iqra", "Tehreem", "Salman", "Subhanullah", "Akash", "Iqra", "Tehreem", "Salman", "Subhanullah", "Akash", "Iqra", "Tehreem", "Salman", "Subhanullah"]


console.log(studentsName.length, "YEH OLD LENGHT HAI")

studentsName.push("Asfandyaar")




console.log(studentsName.length, "YEH NEW LENGHT HAI")

// for (let i = 0; i < studentsName.length; i++) {
//     console.log(studentsName[i])
// }


studentsName.map((std) => (
    console.log(std)
))

console.log(studentsName.length, "YEH POP SAY PEHLE WALI LENGHT HAI")

studentsName.pop()


console.log(studentsName.length, "YEH POP KARNE KAY BAAD WALI LENGHT HAI")


console.log(studentsName, "YEH POP KARNE K BAAD WALA ARRAY HAI")





// OBJECTS IN JAVASCRIPT

let studentData = {
    name: "Akash",
    age: 16,
    bloodGroup: "B+",
    fatherName: "Dr Ratan",
    address: "Karachi",
};

console.log(studentData, "OBJECT")

console.log(studentData.name, "Student name")
console.log(studentData.age, "Student Age")


