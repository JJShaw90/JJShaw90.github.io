// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Fuck you world!';

// let myVariable = 'Bob';

// // // let iceCream = 'chocolate';
// // // if (iceCream === 'chocolate') {
// // //     alert('Yay, I love chocolate ice cream!');
// // // } else {
// // //     alert('Aww, but chocolate is my favourite...');
// // }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// function divide(num1, num2) {
//     let result = num1 / num2;
//     return result;
// }


// document.querySelector('img').addEventListener('click', () => {
//     alert('Ouch! Stop poking me!');
// });

const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefoxlogo1.png') {
        myImage.setAttribute('src', 'images/firefoxlogo2.svg');
    } else {
        myImage.setAttribute('src', 'images/firefoxlogo1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}