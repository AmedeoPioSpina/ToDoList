const toDoList = document.querySelector(".toDoList");
const addBtn = document.querySelector(".addBtn");
let deleteBtns = document.querySelectorAll(".deleteBtn");

const initToDo = () => {
    const toDo = document.createElement("div");
    toDo.classList.add("toDo");
    const p = document.createElement("p");
    p.textContent = document.querySelector("input").value;
    document.querySelector("input").value = "";
    toDo.appendChild(p);
    const deleteBtn = document.createElement("button");
    const deleteImgBtn = document.createElement("img");
    deleteBtn.classList.add("deleteBtn");
    deleteImgBtn.src = "./images/icons8-delete.svg";
    deleteBtn.appendChild(deleteImgBtn);
    toDo.appendChild(deleteBtn);
    toDoList.appendChild(toDo);
}

const removeToDo = (element) => {
    element.remove();
}

addBtn.onclick = (e) => {
    e.preventDefault();
    if(document.querySelector("input").value.replaceAll(" ", "").length === 0) return null;
    initToDo();
    deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach( btn => {
        btn.onclick = () => {
            const fatherTarget = btn.closest(".toDo");
            removeToDo(fatherTarget);
        };
    });
};