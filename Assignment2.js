
//Question1
// function addNumber(val1) {
//     return function(val2) {
//         console.log("The sum of numbers is: ",val1 + val2);
//     }
// }
// let innerFunction = addNumber(11);
// innerFunction(5);

//Question2

// let monthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul"];

// function searchArray(arr, val) {
//     if (arr.length === 0) {
//         return false;
//     }
//     if (arr[0] === val) {
//         return true;
//     } else {
//         return searchArray(arr.slice(1), val);
//     }
// }
// console.log(searchArray(monthsArray,"Sept"));
// console.log(searchArray(monthsArray,"Apr"));

//Question3

// function addNewParagraph(text) {
//     let paragraph = document.createElement("p");
//     let node = document.createTextNode(text);
//     paragraph.appendChild(node);
//     document.body.appendChild(paragraph);
// }

// addNewParagraph("This is some new text!");

//Question4

// function addListItem(text) {
//     var ul = document.querySelector("ul");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(text));
//     ul.appendChild(li);
//   }

// addListItem("New item");

//Question5

// const myDiv = document.querySelector("#myDiv");

// function changeBackgroundColor(element, color) {
//   element.style.backgroundColor = color;
// }

// changeBackgroundColor(myDiv, "blue");

//Question6

// function addEmployee(key, obj) {
//     localStorage.setItem(key, JSON.stringify(obj));
// }

// const employeeDetails = {
//     name: 'Shahmir',
//     designation: 'JavaScript Developer',
//     age: 25,
//     company: 'Microsoft'
// };
// addEmployee('myKey', employeeDetails);

//Question7

// function getEmployee(key) {
//     const storedData = localStorage.getItem(key);
//     if(storedData) {
//         return JSON.parse(storedData);
//     }
//     return null;
// }

// const storedData2 = getEmployee('myKey');
// console.log(storedData2);

//Question8

// function addStudents(obj) {
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             localStorage.setItem(key, JSON.stringify(obj[key]));
//         }
//     }

//     const newStudentObject = {};
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = JSON.parse(localStorage.getItem(key));
//     }
//     return newStudentObject;
// }

// const studentDetails = {
//     name: 'Shahmir',
//     age: 25,
//     course: 'JavaScript',
//     teacher: 'Sir Ishaq',
// };
// const storedStudentObject = addStudents(studentDetails);
// console.log(storedStudentObject);
