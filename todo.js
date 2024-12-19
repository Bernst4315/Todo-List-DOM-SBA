const orderList = document.querySelector("ol"); 
const addBtn = document.getElementById("add-btn");


addBtn.addEventListener("click", () => {
    let input = prompt("Enter ToDo Item");
    console.log(input);
    let listItem = document.createElement("li");
    listItem.textContent = input;
    orderList.appendChild(listItem);
    console.log("click recieved"); 
})

console.log("Hello")