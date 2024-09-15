let box=document.querySelector(".box");

box.addEventListener('mousemove',()=>{
    box.style.backgroundColor="red";
})

box.addEventListener('mouseleave',()=>{
    box.style.backgroundColor="rgb(29, 151, 151)";
})
