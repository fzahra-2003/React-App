// //Declaration des variables 'let - const'
// // var age = 28;
// let age = 28;
// // const nom = 'Fatima';

// //Declaration des fonctions
// function sayHello(){
//     alert('Hello ES6');
// }
// // sayHello();

// //Arrow function
// let sayHi = (a)=>{alert('Hi '+a)}

// sayHi('Fatima');

// //Template String
// // let ville = 'Rabat';
// // alert('je suis '+nom+ ' de '+ville+ ' ravie!')
// // alert(`je suis ${nom} de ${ville} ravie!`)

// //Spread Operator ...
// let person = {
//     nom : 'Houdi',
//     prenom : 'Fatima',
//     age: 21,
//     hobby: 'travel'
// }

// // person.ville = 'Verginia'
// // console.log(person)

// person = {...person, ville:'Rabat'}
// alert('I am from '+person.ville)


// //Destructuring kanakhd dakshi li bghit mn objet
// const {nom , hobby} = person;
// alert(`My lastName is ${nom} and i love ${hobby}`)

// //Array Methods: map - filter - find - 
// // some - every - reduce.


// let notes = [18,9,10,15,5,19,13];
// //Map
// let res = notes.map((value, index, array) => {
//     return value
// });
// alert(res)

// //Filter
// let res1 = notes.filter((value) => {
//     return value > 10
// });
// alert(res1)

// //Find
// let res2 = notes.find((value) => {
//     return value === 19
// });
// alert(res2)
// //-------------------------

// let names = ["Samadi", "Alaoui", "Batoul", "Zina", "Ayoub", "Batoul"];
// let resFind = names.find((item) => {
//     if (item === "Batoul"){
//         console.log(item);
//     }
// })

// //Some (boolean)
// let res3 = notes.some((value) => {
//     return value > 10
// });
// alert(res3) //output: true (wash kayna chi number kber mn 10 )

// //Every (boolean)
// let res4 = notes.every((value) => {
//     return value > 10
// });
// alert(res4) //Output: false (wash kolshi kber mn 10)

// //Reduce (Somme)
// const sum = notes.reduce((accumulator, currentValue) => 
//     accumulator + currentValue, 0
// );
// console.log(sum); // Output: 89

// import { useEffect, useState } from 'react';

// function DataFetcher() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//         try {
//             const response = await fetch('https://api.example.com/data');
//             const result = await response.json();
//             setData(result);
//         } catch (error) {
//             console.error('خطأ فـ جلب البيانات:', error);
//         }
//     };

//     fetchData();
//     }, []);

//   // عرض البيانات...
// }


