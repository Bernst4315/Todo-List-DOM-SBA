const orderList = document.querySelector("ol"); 
const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", () => {
    console.log("click recieved")
    let listItem = document.createElement("li");
    listItem.textContent = "Hello"
    orderList.appendChild(listItem); 
})

console.log("Hello")