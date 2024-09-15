let list=document.querySelector(".list")
let btn=document.querySelector('.addbtn')
let input=document.querySelector('input');

btn.addEventListener('click',()=>{
    console.log(input.value);
   let li=document.createElement('li');
   li.innerHTML=input.value;
   list.appendChild(li);
   input.value="";
   deletebtn(li);
   donebtn(li);


   
})

function deletebtn(li){
    let deletb=document.createElement('button');
    deletb.innerHTML='REMOVE';
    li.appendChild(deletb);
    deletb.addEventListener('click',()=>{
        li.remove();
    })


}

function donebtn(li){
    let doneb=document.createElement('button');
    doneb.innerHTML='DONE';
    li.appendChild(doneb);
    doneb.addEventListener('click',()=>{
        doneb.style.background="rgb(166, 238, 199)"
    })


}
