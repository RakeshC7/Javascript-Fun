// Accordian

const accordians = document.querySelectorAll('.content-container');

for( let i = 0; i < accordians.length; i++ ){ 
    accordians[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}