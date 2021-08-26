// 1. Select the all element 
const form = document.querySelector('#item-form')
const list = document.querySelector("#list")
const inputItem = document.querySelector("#input-item")
// 2. When I submit the form it will add a new element
form.addEventListener("submit", (e)=> {
 e.preventDefault()
 // 1. create a new Item
const newList = document.createElement("div")
//2. Add Items to the List
newList.innerText = inputItem.value
newList.classList.add("my-class")
list.appendChild(newList)
// Clear the input
inputItem.value = ""
// 4. Remove the Items form the List
newList.addEventListener("click", ()=> {
    list.removeChild(newList)
})
})