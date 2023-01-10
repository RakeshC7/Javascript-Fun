// Event Propagation

// window.addEventListener('click', function() {
//     console.log('Window');
// }, false); //true for propagation

// document.addEventListener('click', function() {
//     console.log('Document');
// }, false); //true for propagation

// document.querySelector(".div2").addEventListener
// ('click', function(e) {
//     console.log('div 2');
//     e.stopPropagation(); // It'll stop propagating here output: window document div2
// }, {once:true}); // will propagate for once only

// document.querySelector(".div1").addEventListener
// ('click', function() {
//     console.log('div 1');
// }, false); //true for propagation

// document.querySelector("button").addEventListener
// ('click', function(e) {
//     console.log(e.target.innerText = "Clicked");
// }, false); //true for propagation

// Passing 3rd parameter in eventlisteners it will give us following output

// window
// document
// div2
// div1
// button

// but if property is set to default which is false then result looks like this:

// Button
// div1
// div2
// document
// window

document.querySelector('.link').addEventListener("click", function(e){
    e.preventDefault();
    console.log(e.target.innerText = 'Clicked');
}, false);