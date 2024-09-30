const cl=console.log;

const todoForm=document.getElementById("todoForm");
const todoList=document.getElementById("todoList"); //to add the object in array using template
const todoItemControl=document.getElementById("todoItem");

// to store the data of new object
const todoArr=[
    {
    todoItem:"javascript",
    todoId:'1234'
},
]

// generate random uuid
const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
 };

//  to create new list with using generic function
const createTodoList=(arr)=>{
    let res='';
    arr.forEach(todo => {
        res+=`<li class="list-group-item" id="${todo.todoId}"> ${todo.todoItem}</li>`
    })
    // push into list after templating
    todoList.innerHTML=res;
}
// by calling function it is inserted into arrray
createTodoList(todoArr)

const ontodoForm= eve =>{
    // to prevent deafult refresh by submit
    eve.preventDefault();
    // submit event gives new object
    let newTodo = {
        todoItem : todoItemControl.value,// to get data from form
        todoId : generateUuid()
    }
    //to add the new object into array
    todoArr.unshift(newTodo);
    cl(todoArr)
    //to add the add the new object to display on ui
    createTodoList(todoArr);
    todoForm.reset();
    
}






todoForm.addEventListener("submit",ontodoForm)