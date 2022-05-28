var input=document.getElementById("items");
var remove_specific=document.getElementById("remove_specific");
var ul=document.querySelector("ul");
var remove_all=document.getElementById("remove_all");

input.addEventListener("keypress", function(event){
    if (input.value.length>0 && event.code==='Enter'){
    var li=document.createElement("li");
    var button=document.createElement('input');
    button.setAttribute('id','delete')
    button.setAttribute('value','delete')
    button.setAttribute('type','button')
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value='';
    li.appendChild(button);
    li.addEventListener('click',function(event){
        event.target.classList.toggle('done');
    })
    button.addEventListener('click',function(){
        ul.removeChild(li);
    })
    }  
})
remove_all.addEventListener('click',function(){
    var lists=document.getElementById('list');
    lists.innerHTML='';
})

remove_specific.addEventListener('click',function(){
    var liii=document.querySelectorAll('li');
    for(let i=0;i<liii.length;i++){
        if(liii[i].innerText===input.value){
            ul.removeChild(liii[i]);
            input.value='';
        }
    }
    if (liii.length==0){
        alert("List is Empty!")
    }
})
