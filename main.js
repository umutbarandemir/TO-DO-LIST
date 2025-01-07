const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
 
    function addTast(){
    if(inputBox.value === ""){
        alert("Enter a task !!!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // SİLME İŞARETİ
        li.appendChild(span);
    }
    inputBox.value = "";
}