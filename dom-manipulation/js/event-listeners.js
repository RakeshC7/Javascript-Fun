// Event Listeners

// element.addEventListener("click", function() , false/true)

const buttonTwo = document.querySelector('.btn-2');
console.log(buttonTwo);

function alertBtn(){
    alert('I love Javascript');
}

buttonTwo.addEventListener('click', alertBtn);



// MouseOver Event

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);
