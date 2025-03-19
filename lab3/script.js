const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list");
function addTask() {
    if (inputBox.value === '') {
        alert('Write task');
    } else {
        
        let li = document.createElement("li");


        let checkbox = document.createElement("input");
        checkbox.type = "checkbox"; 
        li.appendChild(checkbox); 

     
        let taskText = document.createElement("span");
        taskText.innerHTML = inputBox.value;
        li.appendChild(taskText); 

      
        let span = document.createElement("span");
        span.innerHTML = "🗑️";
        span.classList.add("trash-icon"); 
        li.appendChild(span); 

        listContainer.appendChild(li);

        
        inputBox.value = "";

        li.style.border="1px solid black";

     
        checkbox.addEventListener("change", function() {
           
            if (checkbox.checked) {
                taskText.classList.add("checked");
            } else {
                taskText.classList.remove("checked");
            }
        });

       
        span.addEventListener("click", function() {
            li.remove();
        });
    }
}


listContainer.addEventListener("click", function (e) {
    
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
        e.target.parentElement.classList.toggle("checked");
    }

   
    else if (e.target.tagName === "SPAN" && e.target.tagName!=INPUT) {
        e.target.parentElement.remove();
    }
});
function removeTask(){
    
    listContainer.innerHTML = '';

}