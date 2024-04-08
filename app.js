
 
function add(){
    if(inputBox.value === ''){
        alert("add item");
    }
    else{
       let li = document.querySelector("li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li);


    }
}
let inputBox = documnet.querySelector("input-box");
let  addButton = document.querySelector("button");
addButton.addEventListener("click", add)