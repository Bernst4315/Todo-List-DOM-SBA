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
    // switch(score){
    //     case 0: scoreEl.textContent = "Lazy Bum!";
    
    //     default:
    //         break; 
    // }
    if(score === 0 || allLiEl.length === 0){
        scoreEl.textContent = "Lazy Bum!"
    } else if(score > 0 && score <= .2){
        scoreEl.textContent = "Do Better!"
    }else if (score >.2 && score <= .4){
        scoreEl.textContent = "Couch Potato"
    } else if (score > .4 && score <= .6){
        scoreEl.textContent = "Really? That's it?"
    }else if (score > .6 && score <= .8){
        scoreEl.textContent = "Decent... I guess"
    }else if (score > .8 && score <= .99){
        scoreEl.textContent = "Wow, you almost did everything. Was getting my hopes up, but I'm left disappointed"
    }else {
        scoreEl.textContent = "Wait... what? you did everything. I'm actually impressed"
    }
})

console.log("Hello")