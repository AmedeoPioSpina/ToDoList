const loadLocalSave = () =>{
    const save1 = localStorage.getItem("save1");
    toDoList.innerHTML = save1;
}

const setLocalSave = () =>{
    const htmlToDoList = toDoList.innerHTML;
    localStorage.setItem("save1", htmlToDoList);
}

const createToDoElement = (text) => {
    const toDo = document.createElement("div");
    toDo.classList.add("toDo");
    const p = document.createElement("p");
    p.textContent = text;
    document.querySelector("input").value = "";
    toDo.appendChild(p);
    const deleteBtn = document.createElement("button");
    const deleteImgBtn = document.createElement("img");
    deleteBtn.classList.add("deleteBtn");
    deleteImgBtn.src = "./images/icons8-delete.svg";
    deleteBtn.appendChild(deleteImgBtn);
    toDo.appendChild(deleteBtn);
    toDoList.appendChild(toDo);
    setLocalSave();
}

const addToDoElement = () => {
    const pText = document.querySelector("input").value;
    createToDoElement(pText);
}

const removeToDoElement = (element) => {
    element.remove();
    setLocalSave();
}

const deleteBtnProp = () => {
    deleteBtns = document.querySelectorAll(".deleteBtn");
    deleteBtns.forEach( btn => {
        btn.onclick = () => {
            const fatherTarget = btn.closest(".toDo");
            removeToDoElement(fatherTarget);
        };
    });
}

const strikeToDoElement = () => {
    const allP = document.querySelectorAll("p");
    allP.forEach( element => {
        element.addEventListener("click", (e) => {
            let text = element.innerText;
            element.innerHTML = text.strike();
        });
    });
}


const toDoList = document.querySelector(".toDoList");
const addBtn = document.querySelector(".addBtn");
let deleteBtns = document.querySelectorAll(".deleteBtn");

loadLocalSave();
deleteBtnProp();


addBtn.onclick = (e) => {
    e.preventDefault();
    if(document.querySelector("input").value.replaceAll(" ", "").length === 0) return null;
    addToDoElement();
    deleteBtnProp();
    strikeToDoElement();
};