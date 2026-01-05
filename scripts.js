const list = document.querySelector('#task-list');
const input = document.querySelector('#UserText');
const form = document.querySelector('#task-form');
const top_button = document.querySelector('#top_button');

let tasks = [];

top_button.addEventListener('click', (e) => {
    e.preventDefault();

    input.classList.remove('red');
    
    if (input.value.trim() === '') {
        input.classList.add('red');
    } else {
        tasks.push({
            text: input.value,
            done: false
        });

        input.value = '';
        render();
    }});

function render() {
    list.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
         let li = document.createElement('li');

         li.textContent = tasks[i].text;


         if (tasks[i].done === true) {
            li.classList.add('task_check');
         } else {
            li.classList.remove('task_check');
         }

         let delete_btn = document.createElement('button');

         delete_btn.textContent = '✖'
         delete_btn.classList.add('delete-btn')

         delete_btn.addEventListener('click', (event) => {
            event.stopPropagation();
            tasks.splice(i, 1);
            render();
         });

         li.addEventListener('click', () => {
            tasks[i].done = !tasks[i].done;
            render();
         })

         li.appendChild(delete_btn);
         list.appendChild(li);
    }
    
}
