// Modal Generator

// Variables
const btn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-wrapper');
const closeBtn = document.querySelector('.close-btn');


btn.addEventListener('click', function(){
    modal.classList.add('active');
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('active'); 
});

window.addEventListener('click', function(e){
    if(e.target === modal){
        modal.classList.remove('active');
    }
})