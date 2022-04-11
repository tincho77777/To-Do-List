//Informacion de la fecha
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const empty = document.querySelector('.empty');

//Task Conteiner
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () =>{
    const date = new Date();

    dateNumber.textContent = date.toLocaleString('es',{day:'numeric'});
    dateText.textContent = date.toLocaleString('es',{weekday:'long'});
    dateMonth.textContent = date.toLocaleString('es',{month:'short'});
    dateYear.textContent = date.toLocaleString('es',{year:'numeric'});

};

const addNewTask = event =>{   //el addNewTask se llama en el html cuando se aprieta el boton
    event.preventDefault(); //Para que el form no haga un submit y nos lleve a otra pagina, esto evita eso
    const { value } = event.target.taskText;
    if(!value) return; //Si el usuario no ingreso una tarea y apreta el boton no sucedera nada, no se agregan tareas vacias
    const task = document.createElement('div');
    task.classList.add('task','roundBorder');
    task.addEventListener('click',changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
//
    const li = document.createElement('li');
    const p = document.createElement('p');

    li.appendChild(p);
    li.appendChild(addDeleteBtn());

    form.appendChild(li);
};

const changeTaskState = event => {    //cuando se hace click se recibe un evento
    event.target.classList.toggle('done'); //a ese evento recibido ingresamos a la lista de clase y si tiene la clase done se la quitamos y si no la tiene se le agrega
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach(element => {
        element.classList.contains('done') ? done.push(element) : toDo.push(element);
    });
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(element => tasksContainer.appendChild(element))


}

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.classList = "btn-delete";

    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement;
        form.removeChild(item);
    })
    return deleteBtn;
}

setDate(); //setDate lo declaramos y lo llamaos en el mismo archivo js