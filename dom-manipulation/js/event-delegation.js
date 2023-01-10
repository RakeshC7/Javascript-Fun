// Event Delegation

// document.querySelector('#football').addEventListener
// ('click', function(e){
//     console.log('football is Clicked');

//     const target = e.target;

//     if(target.matches('li')){
//         target.style.backgroundColor = 'purple';
//     }
// });

// document.querySelector('#basketball').addEventListener
// ('click', function(e){
//     console.log('Basketball is Clicked');

//     const target = e.target;
    
//     if(target.matches('li')){
//         target.style.backgroundColor = 'purple';
//     }
// });



// And so on... but, we have to write minimal code right ??


document.querySelector('.ul-box').addEventListener('click', function(e){
    console.log(e.target.getAttribute('id') + ' is Clicked');
    
    const target = e.target;

    if(target.matches('li')){
        target.style.backgroundColor = 'purple';
    }
});

