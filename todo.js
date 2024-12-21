const orderList = document.querySelector("ol"); 
const addBtn = document.getElementById("add-btn");
const finBtn = document.getElementById("finished-btn");
const doneList = document.getElementById("done");
const scoreEl = document.getElementById("score");

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
    
    e.target.classList.add("done1");
    e.target.style = "done"
    doneList.appendChild(e.target);
    //done counter
    //console.log("click")
})

finBtn.addEventListener("click", () => {
    const allLiEl = document.querySelectorAll("li");
    const doneEl = document.querySelectorAll(".done1")
    let score = doneEl.length/allLiEl.length;
    if(score === 0 || allLiEl.length === 0){
        scoreEl.textContent = "Lazy Bum!"
    }
    console.log(allLiEl);
    console.log(doneEl)
    console.log(doneEl.length, allLiEl.length)
    console.log(score);
    console.log("submit")
})

console.log("Hello")