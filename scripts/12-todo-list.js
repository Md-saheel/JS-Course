const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name:'delete this',
  dueDate: '2022-12-22'
  }];

renderTodoList();

function renderTodoList(){
  let todoListHTML ='';

  todoList.forEach((todoObject, index) => {
    const {name,dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  });

  // for(let i = 0; i<todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   // const name = todoObject.name;
  //   // const dueDate = todoObject.dueDate;
  //   const {name,dueDate} = todoObject;
  //   // const {dueDate} = todoObject;
  //   const html = `
  //   <div>${name}</div>
  //   <div>${dueDate}</div>
  //   <button onclick="
  //    todoList.splice(${i}, 1);
  //    renderTodoList();
  //   " class="delete-todo-button">Delete</button>
  //   `;
  //   todoListHTML += html;
  // }

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-btn')
    .forEach((deletebtn, index) => {
      deletebtn.addEventListener('click', () => {
        todoList.splice(index, 1);
        localStorage.setItem('todoList',JSON.stringify(todoList));
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-btn')
   .addEventListener('click', () => {
    addTodo();
   });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value 

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    // name: name,
    // dueDate: dueDate 
    name,
    dueDate
  });


  inputElement.value = ''
  localStorage.setItem('todoList',JSON.stringify(todoList));
  renderTodoList();
}