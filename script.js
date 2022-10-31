let active= document.getElementById('active')
let active3= document.getElementById('active3')
let active2= document.getElementById('active2')
let hidden= document.getElementsByClassName('hidden')
let show=document.getElementsById('show')

active.addEventListener("dblclick",()=> {
    active.style.backgroundColor = 'white';
   

})


active2.addEventListener("dblclick",()=> {
    
    active2.style.backgroundColor = 'white';

})

active3.addEventListener("dblclick",()=> {
    
    active3.style.backgroundColor = 'white';
   

})

show.addEventListener("dbclick" ,()=> {
    var tag = document.createElement("p");
    var text = document.createTextNode(" Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.");
    tag.appendChild(text);
    var element = document.getElementById("show");
    element.appendChild(tag);

})


hidden.addEventListener('onclick' ,()=> {
    hidden.style.display="none"
    })
