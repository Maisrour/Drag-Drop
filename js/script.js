let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let boxes=document.querySelectorAll('.box');
let drag='null';

btn.onclick=function(){
    if(inp.value !=''){
        boxes[0].innerHTML +=`
        <p class="item" draggable="true">${inp.value}</p>    
        `
        inp.value='';
    }
    dragItem();
}

function dragItem(){
    let items= document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart', function(){
            drag=item;
            item.style.opacity='0.5';
            
        })
        
        item.addEventListener('dragend', function(){
            drag='null'
            item.style.opacity='1';
        })
        
        boxes.forEach(box=>{
        box.addEventListener('dragover', function(e){
            e.preventDefault()
            this.style.background='rgb(146 0 153)';
            this.style.color="white";
        })
            
        box.addEventListener('dragover', function(){
            this.style.background='white';
            this.style.color="black";
        })    
            
        box.addEventListener('drop', function(){
            this.append(drag);
            this.style.background='white';
            this.style.color="black";
        })        
    })
 })
}







