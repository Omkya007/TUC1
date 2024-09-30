const cl=console.log;
const stdConatiner=document.getElementById("stdContainer");
const stdForm=document.getElementById("stdForm");

const stdarr=[
    {
        fname:'om',
        lname:'khot',
        email:"omkhot@gmail.com",
        contact:1234567,
        id:"123"

    },
    {
        fname:'sam',
        lname:'max',
        email:"sammax@gmail.com",
        contact:7654321,
        id:"124"
  
    }
]


const generateUuid = () => {

    return (

        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')

    ).replace(/[xy]/g, (character) => {

        const random = (Math.random() * 16) | 0;

        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);

    });

};

// generic function to create table using parameters for templating
constcreateRow=(arr,idContainer)=>{
    let res='';
arr.forEach((std,i) =>{

    res+=`
    <tr id=${std.id}>            
                    
                  <td>${i+1}</td>
                  <td>${std.fname}</td>
                  <td>${std.lname}</td>
                  <td>${std.email}</td>
                  <td>${std.contact}</td>
    </tr>`
   
})
idContainer.innerHTML=res;
}
constcreateRow(stdarr,stdConatiner);

const onstdAdd=(eve)=>{
    eve.preventDefault();

    let newStd={
        fname:eve.target['0'].value, //gets form control from stdform object
        lname:eve.target['1'].value,
        email:eve.target['2'].value,
        contact:eve.target['3'].value,
        id:generateUuid()

    }
    stdarr.unshift(newStd); //push the object in array 
    constcreateRow(stdarr,stdConatiner); //to show on ui
    eve.target.reset();

}




stdForm.addEventListener("submit",onstdAdd)