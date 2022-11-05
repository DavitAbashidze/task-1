// davaleba 1
// let user = {
//   firstname: "giorgi",
//   lastname: "smith",
//   age: 25,
//   studentstatus: "active",
// };
// console.log(user.studentstatus);

// davaleba-2
// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// let index = 0
// while(index < numbers.length ) {
//     console.log(numbers[index]);
//     index +=1
// }
// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }
// davaleba-3
// for(let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] >5) {
//         console.log(numbers[index]);
//     }
// }

// davaleba-4
// let user = {
//   name: "giorgi",
//   age: 20,
//   studentstatus: "active",
// };
// if (user.age < 18 && user.studentstatus == "active") {
//   console.log("hello");
// } else if (user.name === "levani") {
//   console.log("hello levan");
// } else if (user.studentstatus === "active" || user.age < 25) {
//   console.log("hello world");
// } else {
//   console.log("error");
// }

// davaleba-5
// let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];
// for(let index = 0; index < array.length;index +=1) {
//     if (typeof array[index] === typeof "") {
//         console.log(array[index]);
//     }

// }
// davaleba 6
// let array = [
//   [2, -3, 5, 10],
//   [25, -24, -11, 100],
//   [-6, -7, 10],
// ];

// for (let outer = 0; outer < array.length; outer += 1) {
//   for (let index = 0; index < array[outer].length; index += 1) {
//     if (array[outer][index] > 0) {
//       console.log(array[outer][index]);
//     }
//   }
// }
// davaleba 7
// let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];
// for (let index = 0; index < array.length; index += 1) {
//   if (array[index] % 2 > 0) {
//     console.log("odd", array[index]);
//   } else {
//     console.log("even", array[index]);
//   }
// }
// davaleba 8
// let users = [
//   { username: "giorgi", status: false },
//   { username: "levani", status: false },
//   { username: "anna", status: true },
// ];
//  for (let index = 0; index < users.length; index +=1) {
//     if (users[index].status === true){
//         console.log(users[index]);
//     }
//  }