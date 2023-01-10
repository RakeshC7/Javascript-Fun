// DOM manipulation

// 5 Element Selection methods

// getElementById()
// const title = document.getElementById('main-heading');
// console.log(title);


// getElementByClassName()
// const list = document.getElementsByClassName('list-item');
// console.log(list);


// getElementByTagName()
// const tagName = document.getElementsByTagName('li');
// console.log(tagName);


// querySelector() - selects first element only from all
// const container = document.querySelector('div');
// console.log(container);


// querySelectorAll()
// const containers = document.querySelectorAll('div');
// console.log(containers);

// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------

// STYLING Element



// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

// const listItems = document.querySelectorAll('.list-item');
// listItems.forEach(element => {
//     element.style.color = 'red';
// });
// console.log(listItems);


const firstListItem = document.querySelector('.list-item');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);


// Creating Element

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li); // Adding Element 
li.innerText = 'Vikram';

// Modifying Attributes & Classes
// li.setAttribute('id', 'main-heading'); // set new attribute 
// li.removeAttribute('id'); // to remove attribute


// li.classList.add('list-item'); // add class in existing element
// li.classList.remove('list-item'); // Remove class in existing element
// li.classList.contains('list-item'); // to check class existing element or not , returns boolean value



// Remove Elements

li.remove();

// Parent Node Traverse

const html = document.documentElement;

// console.log(html.parentNode); // do chaining for parent of parent and only parentNode for 1st parent so, result is '#document'
// console.log(html.parentElement); // html and document node both at same level so here get result 'null'


// Child Node Traverse

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "red";

// console.log('ul.children', ul.children); // use for all child Elements
// console.log('ul.firstElementChild', ul.firstElementChild); // use for all First child Element
// console.log('ul.lastElementChild', ul.lastElementChild); // Use for Last child Element


// Sibling Nodes Traverse

console.log('ul', ul);
console.log('ul Previous sibling', ul.previousSibling); // output: text node 
console.log('ul Previous sibling', ul.nextSibling); // output: text node


console.log('ul Previous Element sibling', ul.previousElementSibling); // output: <h2></h2> 
console.log('ul Previous Element sibling', ul.nextElementSibling); // output: 'null' because there is no element after ul


