// // ---------------Task 1 ------------------


let num = prompt("Enter a number:");

if (num >= 55 && num <= 109) {
  console.log(`The number ${num} falls into the range`);
} else {
  console.log(`The number ${num} is not in the range`);
}



// // ---------------Task 2 ------------------

let age = prompt("Enter your age:");

if (age >= 0 && age <= 16) {
  console.log("Children");
} else if (age >= 17 && age <= 60) {
  console.log("Adults");
} else if (age >= 61 && age <= 100) {
  console.log("Pensioners");
}

// ---------------Task 3 ------------------

let name = prompt("Enter your name:");
let surname = prompt("Enter your last name:");

if (name.length > 7 && surname.length > 8) {
  console.log(name.length + surname.length);
} else {
  console.log("OOPS");
}

// ---------------Task 4 ------------------

let language = prompt("Enter the language (ua, en, pl, fr):");

switch (language) {
  case 'ua':
    console.log("Січень");
    break;
  case 'en':
    console.log("January");
    break;
  case 'pl':
    console.log("Styczeń");
    break;
  case 'fr':
    console.log("Janvier");
    break;
  default:
    console.log("Невідома мова");
}

