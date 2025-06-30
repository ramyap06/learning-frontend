/* DOM - Document Object Model
- Basically it shows all the different elements on the document/page.
- These different elements can be represented as nodes or objects that can manipulated and used in code logic.
*/


// EXAMINE THE DOCUMENT OBJECT
console.dir(document);

console.log(document.domain); // gives you the host
console.log(window.location.hostname); // better alternatives
console.log(window.location.origin);

console.log(document.URL); // gives url to the page
console.log(document.title); // gives title to the page
document.title = "123";
// you can do this for doctype, head, body
console.log(document.all) //shows all objects on document
document.all[10].textContent = "Hello World!"; // whatever is the object of index 10 will now be changed to this text"
console.log(document.forms); // gathers all forms objects on document
console.log(document.links); // gathers all link objects on document
// can do images too


// GETELEMENTBYID
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle); // prints the line where this id is defined
headerTitle.textContent = "Hello"; // only looks at high level and changes text
headerTitle.innerText = "Goodbye"; // does the same but also pays attention to style
// otherwise can be used interchangeably
headerTitle.innerHTML = '<h3>Hello</h3>'; // changes the text to be an h3 heading, doesn't change the original size of the object
header.style.borderBottom = 'solid 3px black';


// GETELEMENTSBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';

// items.style.backgroundColor = 'pink';  --> can't do this causes error

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'pink';
}


// GETELEMENTSBYTAGNAME
var li = document.getElementsByTagName('li');
li[1].textContent = 'HELLO';
li[1].style.fontWeight = 'lighter';

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'yellow';
}
// this applies to all lists while the class only applies to lists with that class


// QUERYSELECTOR
var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var input = document.querySelector('input[type="text"]');
input.value = 'Enter you message';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

// QUERYSELECTORALL
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'orange';
    even[i].style.backgroundColor = 'coral';
}


// TRAVERSING THE DOM

/* DOM aka html has a parent-child-sibling relationship 

<div> --> parent
    <p>My name is Ramya</p> --> child
    <h1>Hello World!</h1> --> sibling
</div>

*/
var itemList = document.querySelector('#item');

// parentNode
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement);