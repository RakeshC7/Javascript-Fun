// Reveal Event

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent(){


    hiddenContent.classList.contains('visible-content') ? hiddenContent.classList.remove('visible-content') : hiddenContent.classList.add('visible-content');

    // OR

    // if(hiddenContent.classList.contains('visible-content')){
    //     hiddenContent.classList.remove('visible-content')
    // } else{
    //     hiddenContent.classList.add('visible-content')
    // }
}
revealBtn.addEventListener('click', revealContent);
