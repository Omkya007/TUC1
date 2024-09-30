const cl=console.log;


const stdContainer=document.getElementById("stdCon");
const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");
const noStd=document.getElementById("noStd");
const stdTable=document.getElementById("stdTable");
const stdForm=document.getElementById("stdForm");
const fnameControl=document.getElementById("fname");
const lnameControl=document.getElementById("lname");
const emailControl=document.getElementById("email");
const contactControl=document.getElementById("contact");


// let stdArr=[];
// if(localStorage.getItem('stdArr')){ //it checks whether data is present in local storage
//     stdArr = JSON.parse(localStorage.getItem('stdArr')) //if the data is present the data is pushed into arr
//     templatingOfStd(stdArr)
// }


const templatingOfStd = (arr) =>{
   
        let res=``;

    arr.forEach((std ,i)=>{
        res+=`      <tr id="${std.stdId}">
                        <td>${i+1}</td>
                        <td>${std.fname}</td>
                        <td>${std.lname}</td>
                        <td>${std.email}</td>
                        <td>${std.contact}</td>
                        <td>
                        <button class="btn btn-warning btn-sm bg-or" onclick="onEdit(this)">Edit</button>
                        </td>
                        <td>
                        <button class="btn btn-danger btn-sm" onclick="onRemove(this)">Remove</button>
                        </td>
                    </tr>`
    })
    stdContainer.innerHTML=res;
    
    
    
}
let stdArr = JSON.parse(localStorage.getItem('stdArr')) ||[] //cheks if any thing is present in array or else return empty array
if(stdArr.length>0){
    templatingOfStd(stdArr)   //if length of array is grater than 0 then only templating is done
}else{
    stdTable.classList.add("d-none");
    noStd.classList.remove('d-none')
    
}
const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
 };


const onEdit = (ele) =>{
    
       let editId=ele.closest('tr').id;
       cl(editId)
      //get the closest tr of that edit
      localStorage.setItem("editId",editId);

       let editObj=stdArr.find(std =>{ //cheks if the id of edit obj is matching with id in arr
        return std.stdId === editId
       })
       cl(editObj)
       fnameControl.value=editObj.fname
       lnameControl.value=editObj.lname
       emailControl.value=editObj.email
       contactControl.value=editObj.contact

       updateBtn.classList.remove('d-none');
       submitBtn.classList.add('d-none')

                               


} 

const onUpdate = () =>{
    let updateId=localStorage.getItem('editId') //fetech id from LS
    cl(updateId)
    let updatedObj = {          //the update controls are taken from form

        fname:fnameControl.value,
        lname:lnameControl.value,
        email:emailControl.value,
        contact:contactControl.value,
        stdId:updateId
        
        
    }
    cl(updatedObj)
    
    //finds the index no of object on which obj is to be updated
    let getIndex=stdArr.findIndex(std => std.stdId === updateId)
    cl(getIndex)

    stdArr[getIndex]=updatedObj  //the obj of particular index no is updated in stdarr
    localStorage.setItem('stdArr',JSON.stringify(stdArr)); //the obj is updated in LS

    let  tr=[...document.getElementById(updateId).children]; //select the tr which has to be updated to show on UI
    cl(tr);

    tr[1].innerHTML = updatedObj.fname; 
    tr[2].innerHTML = updatedObj.lname; 
    tr[3].innerHTML = updatedObj.email; 
    tr[4].innerHTML = updatedObj.contact; 

    stdForm.reset(); //the form is reset after form is updated

    updateBtn.classList.add('d-none')
    submitBtn.classList.remove('d-none');

    Swal.fire({
        title:`Student with id ${updateId} info is updated successfully`,
        timer:3500,
        icon:`success`

    })


}

const onRemove = (ele) =>{
    let getConfirmmation = confirm('Are you sure you want to remove this student ?')
    cl(getConfirmmation) //confirm returns boolean
    if(getConfirmmation){
        let removeId=ele.closest('tr').id //get the closest tr with id which has to be removed

        let getIndex=stdArr.findIndex(std => std.stdId === removeId); //get the index no of object to be deleted
        stdArr.splice(getIndex,1) //splice deleted the object present at that index 
        localStorage.setItem('stdArr',JSON.stringify(stdArr)); // update the localstorage
        ele.closest('tr').remove(); //remove the tr from UI

        Swal.fire({
            title:`Student with id ${removeId} is removed successfully`,
            timer:3500,
            icon:`success`
        })
    }
}






const onstdAdd=(eve)=>{
    eve.preventDefault(); /*it prevents the deafault submit event behaviour*/
    //1 submit event >>new student obj
    let newStd = {
        fname:fnameControl.value,
        lname:lnameControl.value,
        email:emailControl.value,
        contact:contactControl.value,
        stdId:generateUuid()
    }
    //2 push newStdObj in Array
    stdArr.push(newStd);
    cl(stdArr)
    // to reset the form after submit
    stdForm.reset();
    //3 store array in LS
    stdTable.classList.remove("d-none");
    noStd.classList.add('d-none')
    localStorage.setItem('stdArr',JSON.stringify(stdArr));
    //4 templating of array >>we will create 1 tr and append
    // templatingOfStd(stdArr);

    let tr=document.createElement('tr');
    tr.id=newStd.stdId;
    tr.innerHTML=`      <td>${stdArr.length}</td>
                        <td>${newStd.fname}</td>
                        <td>${newStd.lname}</td>
                        <td>${newStd.email}</td>
                        <td>${newStd.contact}</td>
                        <td>
                        <button class="btn btn-warning btn-sm bg-or" onclick="onEdit(this)">Edit</button>
                        </td>
                        <td>
                        <button class="btn btn-danger btn-sm" onclick="onRemove(this)">Remove</button>
                        </td>`

    

stdContainer.append(tr);
Swal.fire({
    title:`New Student is ${newStd.fname} ${newStd.lname} is added Successfully`,
    timer:3500,
    icon:`success`
})
   
}




stdForm.addEventListener("submit",onstdAdd);
updateBtn.addEventListener("click",onUpdate)




