const orderList = document.querySelector("ol"); 
const addBtn = document.getElementById("add-btn");
let listItem = document.createElement("li");
let liEl = document.querySelector("li");

addBtn.addEventListener("click", () => {
    let input = prompt("Enter ToDo Item");
    console.log(input);
    listItem.textContent = input;
    orderList.appendChild(listItem);
    //console.log("click recieved"); 
})

orderList.addEventListener("click", (e) => {
    
    e.target.classList.add("done");
    //liEl.style.color = "red";
    console.log("click")
})

console.log("Hello")