const todoinput= document.getElementById("todoinput")
const list = document.getElementById("list")

function addTask(){
    
    if(todoinput.value === ''){
        alert("You must enter something!")
    }
    else {
        let value =  todoinput.value;
        let li = document.createElement("li");
        li.innerHTML = value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "✗";
        li.appendChild(span);
        
    }
    todoinput.value=" ";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}

showTask();