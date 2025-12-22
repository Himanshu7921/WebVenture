// DOM manipulation

// // GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title);

// // GetElementByClassName()
// // const listitems = document.getElementsByClassName('list-items');
// // console.log(listitems);

// // getElementsByTagName()
// const listitem = document.getElementsByTagName('li');
// console.log(listitem);

// // querySelector()
// const container = document.querySelector('div');
// console.log(container); //prints only first container

// // querySelectorAll()
// const container_all = document.querySelectorAll('div');
// console.log(container_all); //prints all

const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);

const listitems = document.querySelectorAll('.list-items') //.forEach(item => item.style.fontSize = '1rem'); //quick way
// listitems.style.fontSize =  '1rem';  //it is called camelCase in js
//Above code wont change fontSize of list items 
//We need loop

for(let i = 0; i < listitems.length; i++){
    listitems[i].style.fontSize = '1rem';
}

console.log(listitems);


// Creating Elements

const ul = document.querySelector('ul');

const newLi = document.createElement("li");
newLi.textContent = "Inception";
newLi.classList.add("list-items");

ul.append(newLi);

// Modifying the text

const firstListItem = document.querySelector('.list-items');

console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

newLi.innerText = "X-men"; // Inception -> X-men

newLi.setAttribute('id', 'main-heading'); //font-style = italic
newLi.removeAttribute('id'); // Returned to normal font 

const titlee = document.querySelector('#main-heading');

console.log(titlee.getAttribute('id'));

// Remove class which we added previously on newLi
newLi.classList.remove('list-items');

console.log(newLi.classList.contains('list-items')); // Returns True or false

// Remove Elements
newLi.remove(); // comment this to see newLi
