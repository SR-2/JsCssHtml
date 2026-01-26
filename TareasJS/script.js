const lista = document.getElementById("lista");
const add = document.getElementById("add")
const input = document.getElementById("tarea");
const container = document.getElementById("alertas")
const container_done = document.getElementById("done")
const card = document.querySelector(".card")
const body = document.getElementById("body")


add.onclick = ()=>{
    
   
    createTask();
        
    
}

input.onkeyup=(e)=>{
    if(e.key === "Enter") {
          createTask();  
    }
}

function createTask(){
    const value = input.value;
    if(value){
const msg = document.getElementById("msg");
if(msg){
msg.remove();
}
const task = document.createElement("div");
const p = document.createElement("p");
const check = document.createElement("button");
const eliminar = document.createElement("button");

task.classList.add("task");
p.textContent = value;
check.setAttribute("id", "check");
check.innerHTML = '<ion-icon name="checkmark-circle-sharp"></ion-icon>';
check.onclick = checkTarea;
eliminar.setAttribute("id", "eliminar");
eliminar.innerHTML = '<ion-icon name="trash-sharp"></ion-icon>';
eliminar.onclick = eliminarTarea;
task.appendChild(p);
task.appendChild(check);
task.appendChild(eliminar);
lista.append(task);
input.value = "";
alertaAnimacion()



    }
}


function eliminarTarea(event){
    console.log(event.target.parentElement.parentElement);
    
    const task = event.target.parentElement.parentElement;
    task.remove();
    addmsg();
}

function checkTarea(event){
    
    event.target.classList.toggle("hecho")
   
    const p = event.target.parentElement.parentElement.querySelector("p");
    p.classList.toggle("hecho")
    if(event.target.classList.contains("hecho")){
 alertaDone();
    }
   
    
}

function addmsg(){
    if(lista.children.length === 0){
    const msg= document.createElement("p");
    msg.setAttribute("id", "msg");
    msg.textContent = "Sin Tareas";
    lista.appendChild(msg);
    }

}

addmsg()

function alertaAnimacion(){
    const div = document.createElement("div")
    div.classList.add("alerta","animation")
    div.setAttribute("id", "alerta")
     const span = document.createElement("span")
    span.innerHTML = '<ion-icon name="checkmark-sharp"></ion-icon>'
    span.innerHTML += " Tarea agregada correctamente"
    div.appendChild(span);
    container.appendChild(div);
    console.log("se creo");
    
    window.setTimeout(()=>{
        hidden(div)
    },3000);

}
function alertaDone(){
    const hecho = document.getElementById("hecho");
   
   
    
    if(hecho){
hecho.remove()
alertaHecho()
    }else{
        alertaHecho()
   
}

}
function alertaHecho(){
    //  const estilos = window.getComputedStyle(card);
    //   const estilos_body = window.getComputedStyle(body);
    //   console.log(estilos.height);
    //   console.log(estilos_body.height);
      
      
    //  container_done.style.top = `calc(${estilos_body.height} - ${estilos.height} -${estilos_body}/4 )`;
 const div = document.createElement("div")
    div.classList.add("alerta","animation-done")
    div.setAttribute("id", "hecho")
     const span = document.createElement("span")
    span.innerHTML = '<ion-icon name="checkmark-done-sharp"></ion-icon>'
    span.innerHTML += "Hecho!"
    div.appendChild(span);
    container_done.appendChild(div);
      
    window.setTimeout(()=>{
        div.remove()
    },2000);
}

function hidden(alerta){
 
    alerta.classList.add("hidden");
 
    window.setTimeout(()=>{
       alerta.remove()
    },1000);
     
     

   
    
}

