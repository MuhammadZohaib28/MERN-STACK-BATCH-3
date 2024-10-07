let userAge = 43;


if (userAge >= 18) {
    console.log("APP KA CNIC BAN SAKTA HAI")
} else {
    console.log("APP KA CNIC NAHI BAN SAKTA")
}



let snacks = "LAYS CHEEZE"


if (snacks === "LAYS SALTED") {
    console.log("LAYS SALTED IS MY FAVOURITE")
} else if (snacks === "LAYS CHILLI") {
    console.log("LAYS CHILLI IS MY FAVOURITE")
} else if (snacks === "LAYS CHEEZE") {
    console.log("LAYS CHEEZE IS MY FAVOURITE")
} else {
    console.log("KUCH BHI DEDO")
}


// SWITCH CASES

let day = "ADIL"

switch (day) {
    case "MONDAY":
        console.log("AJJ MONDAY HAI")
        break;
    case "TUESDAY":
        console.log("AJJ TUESDAY HAI")
        break;
    case "WEDNESDAY":
        console.log("AJJ WEDNESDAY HAI")
        break;
    case "THURSDAY":
        console.log("AJJ THURSDAY HAI")
        break;
    case "FRIDAY":
        console.log("AJJ FRIDAY HAI")
        break;
    default:
        console.log("AJJ KUCH NAHI HAI")
        break;
}




// LOOPS - FOR, WHILE, DO WHILE

// FOR LOOP


for (let i = 1; i <= 10; i++) {
    console.log(i, "YEH MERI COUNTING HAI")
}



let tableNum = 10;


for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} X ${i} = ${tableNum * i}`)
}


//12 * 1 = 12
//12 * 2 = 24
//12 * 3 = 36