console.log("object")


const studentsName = [
    "Ibrahim",
    "Ali",
    "Ayesha",
    "Bisma"
]

// console.log(studentsName.length)

// console.log(studentsName[0])
// console.log(studentsName[1])
// console.log(studentsName[2])
// console.log(studentsName[3])

studentsName.push("Zafar")

studentsName.unshift("Dania")

studentsName.pop();

studentsName.shift()




studentsName.splice(1, 2)  // remove elements from any range

studentsName.splice(2, 0, "Akash", "Danial")





studentsName.splice(1, "Tahira")










for (let i = 0; i < studentsName.length; i++) {
    console.log(studentsName[i], "YEH FOR LOOP SAY AARAHA HAI")
}





// console.log(studentsName, "YEH STUDENTS K NAME HAIN")





//OBJECTS IN ARRAYS

const happyShoping = {
    picture: "frontendPicture",
    title: "Frontend Intership",
    description: "loremIpsum loremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloreIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsumloremIpsum",
    buttonText: "Apply Now"
}



console.log(happyShoping.picture)
console.log(happyShoping.title)
console.log(happyShoping.description)
console.log(happyShoping.buttonText)





const darazItems = [
    {
        logoPicture: "Picture ka address",
        title: "Happy Shopping",
        subTitle: "Download App"
    },
    {
        logoPicture: "Picture ka address 2",
        title: "Available on the",
        subTitle: "App Store"
    },
    {
        logoPicture: "Picture ka address 3",
        title: "Android App on",
        subTitle: "Google Play"
    },
]

darazItems.map((item) => (
    console.log(item.title)
))


console.log(darazItems)