const orderList = document.querySelector("ol"); 
const addBtn = document.getElementById("add-btn");
const finBtn = document.getElementById("finished-btn");
const doneList = document.getElementById("done");

addBtn.addEventListener("click", () => {
    let input = prompt("Enter ToDo Item");
    if(input){
    const listItem = document.createElement("li");
    //console.log(input);
    listItem.textContent = input;
    orderList.appendChild(listItem);
    }
    //console.log("click recieved"); 
    //add counter
})

orderList.addEventListener("click", (e) => {
    
    e.target.classList.add("done");
    doneList.appendChild(e.target);
    //done counter
    //console.log("click")
})

finBtn.addEventListener("click", () => {
    console.log("Submit")
})

console.log("Hello")