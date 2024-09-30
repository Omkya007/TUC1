const cl=console.log;
const todoForm=document.getElementById("todoForm");
const todoItemControl=document.getElementById("todoItem");
const todoListCon=document.getElementById("todoListCon");
const submitBtn=document.getElementById("submitBtn");
const updateBtn=document.getElementById("updateBtn");
const maxupdate=document.getElementById("maxUpdate");


    // arr for templating
    let todoArr=[];

  
    //  to create templating function
const createTodo= arr =>{
    let res='';
    arr.forEach(todo=>{
        res+=`<li class="list-group-item d-flex justify-content-between" id="${todo.todoId}"> 
        
        <span>${todo.todoItem}</span> 
        <span>
        <button class="btn btn-primary btn-sm" onclick="onEdit(this)">Edit Todo</button> 
        <button class="btn btn-danger btn-sm" onclick="onRemove(this)">Remove Todo</button>
        </span>
        
        </li>`
    });
    todoListCon.innerHTML=res;  //to add the li into the ul
    
    }

    if(localStorage.getItem("todoArr")){                          //checks if data present in local storage
        todoArr=JSON.parse(localStorage.getItem("todoArr"))      //if the item is present it gets from LS
        createTodo(todoArr)
    }
    

    


// edit button function
const onEdit= ele =>{
    let getEditId=ele.closest('li').id; //to get closest li from ul with id
    
    localStorage.setItem('editId',getEditId) //set id in ls to fetch it from ls to update the object

    let getObject = todoArr.find(todo => {  // to find the desired id from an arr and checks if id matches the id
        return todo.todoId === getEditId
    })
    cl(getObject)
    if(getObject.updatedCount<=5){
        maxupdate.classList.remove('d-none')
        todoItemControl.value=getObject.todoItem //to assign the form control to clicked object 
    submitBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');

    }else{
        Swal.fire({
            title:`Can't Update the object the object`,
            timer:2500,
            icon:'question'

        })
    }
    
}

const onRemove=(ele)=>{
    let removeId=ele.closest('li').id;// to get the id from li which is to be deleted
    cl(removeId)

    let getIndex=todoArr.findIndex(todo=>todo.todoId)// to find the index no of that obj to be deleted

    todoArr.splice(getIndex,1) //the index no of that id is removed
    localStorage.setItem('todoArr',JSON.stringify(todoArr)) // update the todoarr in Ls
    document.getElementById(removeId).remove(); //remove the selected li from ui


}


// to generate uuid
const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
 };


// even function to which creates new object on event
 const onTodoAdd= eve =>{
    eve.preventDefault();
    let todoObject={
        todoItem:todoItemControl.value,
        todoId:generateUuid(),
        updatedCount:0
    }
    // to reset the form after setting the item in ls
    eve.target.reset()

    todoArr.unshift(todoObject) //new object is added in arrey
    // store /update arrey in local storage in form of json
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
   
    
   
    
    // send arr to templating function 

    // createTodo(todoArr)
    //we will create new 'li' and prepend in 'ul'
 
    let li =document.createElement("li"); //create new li with doc
    li.className="list-group-item d-flex justify-content-between"; //assign new class to li
    li.id=todoObject.todoId;   //get id from todoObj
    li.innerHTML=`<span>${todoObject.todoItem}</span> 
    <span>
    <button class="btn btn-primary btn-sm" onclick="onEdit(this)">Edit Todo</button> 
    <button class="btn btn-danger btn-sm"  onclick="onRemove(this)">Remove Todo</button>
    </span>`  //get html from li
    todoListCon.prepend(li);
    Swal.fire({
        title:"New Todo Item is Added !!!",
        timer:2500,
        icon:'success'
      });
 }

 const ontodoUpdate=()=>{
    cl("updated")
    let getUpdateId=localStorage.getItem("editId") //to get the updated object from Ls with id
    cl(getUpdateId)
    //on click event the object is extracted from form and then form is reset
    let updatedObj={
        todoItem:todoItemControl.value,
        todoId:getUpdateId
    }
    maxupdate.classList.add('d-none')
    cl(updatedObj)//to get updated obj from LS
    todoItemControl.value='';

    let getIndex=todoArr.findIndex(todo=> todo.todoId===getUpdateId) //to get the index number of obj from LS which has to be edited
    cl(getIndex)

    let oldObj=todoArr[getIndex];
    todoArr[getIndex]={...updatedObj,updatedCount:oldObj.updatedCount + 1} //updated obj is assigned to particular index number
    localStorage.setItem('todoArr',JSON.stringify(todoArr)); //to set the updated obj in LS
    //createTodo(todoArr)
    let  li=document.getElementById(getUpdateId); //to get li which is to be updated in LS
    cl(li)
    li.innerHTML=
    `<span class="d-flex justify-space-between">${updatedObj.todoItem}</span> 
    <span>
    <button class="btn btn-primary btn-sm" onclick="onEdit(this)">Edit Todo</button> 
    <button class="btn btn-danger btn-sm" onclick="onRemove(this)">Remove Todo</button>
    </span>` ; // to  show the updated value in li
    submitBtn.classList.remove('d-none');
    updateBtn.classList.add('d-none');  
    Swal.fire({
        title:`The todo item ${oldObj.todoItem} is updated to ${updatedObj.todoItem} `,
        timer:2500,
        icon:'success'
    });
}


 todoForm.addEventListener("submit",onTodoAdd)
 updateBtn.addEventListener("click",ontodoUpdate)