//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

// prompt("What is your name: ");
// prompt("What is your partner's name: ");

// function loveCalculator() {
//   var n = Math.random();
//   n = Math.round(n * 100) + 1;
//   return n
// }

// n = loveCalculator();

// if (n === 100) {
//   console.log("yoohooo 100 percent")
// } else {
//   console.l("Your love score is " + n + "%")
// }

// -------------------------------------------------------------

// function bmi() {
//   var height = Math.random();
//   height = Math.round(height * 100) + 1;
//   return n
// }

// var weight = 80;
// var height = 177;

// let number = 3.14159;
// let decimalPlaces = 2;
// let roundedNumber = Math.round(number * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
// console.log(roundedNumber); // Output: 3.14

// function bmiCalculator (weight, height) {
//     var bmi = (weight / (height * height)) * 10000;
//     roundedNumber = Math.round(bmi * Math.pow(10, 1)) / Math.pow(10, decimalPlaces);
//     if (roundedNumber < 18.5) {
//         var interpretation = "Your BMI is " + bmi + ", so you are underweight.";
//     }
//     if (roundedNumber >= 18.5 && bmi <= 24.9) {
//         interpretation = "Your BMI is " + bmi + ",  so you have a normal weight.";
//     } else {
//         interpretation = "Your BMI is " + bmi + ",  so you have a overweight.";
//     }
//     return interpretation;
// }

// bmiCalculator(47, 177);

// ___________________________________________________________________________________

// function isLeap(year) {

//     //Write your code here.
//     if (((year % 4) === 0) || ((year % 100) !== 0) && ((year % 400 === 0))){
//       return "Leap year."
//     }
//     else {
//       return "Not leap year."
//     }
// /**************Don't change the code below****************/

// }

// isLeap(2020);

// --------------------------------------------------------------------------------------------

// var guestList = ["abhishek", "rahul", "munna", "sujith", "vandana", "amrreen", "john cena", "sogra", "jeevan"];

// user = prompt("Please enter your name to see if you are in the gurst list");

// console.log(user);
// console.log(guestList);

// if (guestList.includes(user)) {
//   alert("Congratulaions! You're invited to the Party, Have FUN")
// } else {
//   alert("You are not invited")
// }

// var output = [];
// var n = 1;

// function fizzbuzz() {
//   if ((n % 5 === 0) && (n % 3 === 0)) {
//       output.push('fizzbuzz');
//       console.log(output);
//   } else if (n % 5 === 0) {
//       output.push('buzz');
//       console.log(output);
//   } else if (n % 3 === 0) {
//       output.push('fizz');
//       console.log(output);
//   } else {
//       output.push(n);
//       console.log(output);
//   }
//   n++;
// }

// fizzbuzz()

// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// function whosPaying(names) {
//   var randomPick = Math.round(Math.random() * (names.length - 1));
//   console.log(randomPick);
// }

// whosPaying(names);



function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:


    if (n <= 0) {
      return []
    } else if (n === 1) {
      return [0]
    } else if (n === 2) {
      return [0, 1]
    } else {
        var output = [0, 1];
        for (var i = 2; i < n; i++) {
          output.push(output[output.length - 1] + output[output.length - 2]);
        }
        console.log(output);
      }
}
fibonacciGenerator(100);



// output = [1,2,3,4,5,6,7,21,9];

// console.log(output[output.length - 2]);



