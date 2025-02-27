import { postUsers,getUsers,updateUsers,deleteUser } from "./service/solicitudes.js"
const nombreSolicitud=document.getElementById("nombreSolicitud")
const solicitudTareas=document.getElementById("solicitudTareas")
const horaTareas=document.getElementById("horaTareas")
const fechaTareas=document.getElementById("fechaTareas")
const agregarTareas=document.getElementById("agregarTareas")

//div para tareas
const divNombre=document.getElementById("divNombre")
const divSolicitud=document.getElementById("divSolicitud")
const divHora=document.getElementById("divHora")
const divNdivFechaombre=document.getElementById("divFecha")


agregarTareas.addEventListener("click", function () {
    console.log(nombreSolicitud.value,solicitudTareas.value,fechaTareas.value);
    postUsers(nombreSolicitud.value,solicitudTareas.value,horaTareas.value,fechaTareas.value)
    mostrartareas()
})

    //mostrar las tareas 
 async function mostrartareas() {

    const datos = await getUsers()

    datos.forEach(element => {
        
        let MostarNombreTareas=document.createElement("p")
        let mostarSoli=document.createElement("p")
        let mostrarHora=document.createElement("p")
        let mostrarfecha=document.createElement("p")

       

        //crear los contenido a las etiquetas

        MostarNombreTareas.innerText= element.nombre
        mostarSoli.innerText= element.solicitudes
        mostrarHora.innerText= element.hora
        mostrarfecha.innerText = element.fecha 

       

        
   

    });

}

