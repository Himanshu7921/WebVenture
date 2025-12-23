// DOM manipulation

// Traverse the DOM

// Parent Node Traversal
// let ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode.parentNode.parentNode);
// console.log(ul.parentElement.parentElement.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode); //#document
// console.log(html.parentElement); //Null
// Child Node Traversal

let ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.lastChild);

// ul.firstChild.textContent = 'hello';
// ul.childNodes[1].style.backgroundColor = 'blue'; // cannot apply on text node

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);



// Sibling Node Traversal

const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(document.querySelector('.container').childNodes.length);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
