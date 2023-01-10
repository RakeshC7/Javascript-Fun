const todoInput = document.getElementById('todo-input'),
todoSubmitBtn = document.getElementById('todo-submit-btn'),
sidebar = document.getElementById('sidebar'),
listViewParent = document.querySelector('#sidebar ul'),
noTaskTitle = document.getElementById('no-task');

// Create List

// set Multiple Attributes
function setAttributes(ele, attrs) {
    for (var key in attrs) {
        ele.setAttribute(key, attrs[key]);
    }
}

todoSubmitBtn.addEventListener('click', (e) => {

    let task = document.createElement('li'),
        taskText = document.createElement('span');
    taskText.innerText = `${todoInput.value}`;
    task.appendChild(taskText);

    // buttons with Wrapper
    let buttonWrap = document.createElement('div');
    buttonWrap.classList.add('button-wrap');
    task.appendChild(buttonWrap);

    // Dynamic Button Generate
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    setAttributes(checkBtn, {
        'type': 'button',
        'class': 'check-btn'
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = '<i class="fas fa-times"></i>';
    setAttributes(cancelBtn, {
        'type': 'button',
        'class': 'cancel-btn'
    });
    buttonWrap.appendChild(checkBtn);
    buttonWrap.appendChild(cancelBtn);

    if (todoInput.value) {
        listViewParent.appendChild(task);

        todoInput.value = '';
        checkBtn.addEventListener('click', function () {
            this.parentElement.previousElementSibling.classList.add('completed');
        });
        cancelBtn.addEventListener('click', function (e) {
            this.parentElement.parentElement.remove();
            listViewParent.children.length ? noTaskTitle.style.display = 'none' : noTaskTitle.style.display = 'block';
        });
    } else {
        alert('Please Enter Task');
    }
    // No task list
    listViewParent.children.length ? noTaskTitle.style.display = 'none' : noTaskTitle.style.display = 'block';
});