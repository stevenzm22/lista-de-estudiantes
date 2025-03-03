import { postSolicitudes,getSolicitudes,updateSolicitudes,deleteSolicitudes } from "./service/solicitudes.js"
const tabla=document.getElementById("tabla")



 async function mostarSolicitudes() {
    const datos = await getSolicitudes()

    datos.forEach(element => {


        //creacion de etiquetas
        let tr=document.createElement("tr")
        let tdNombre=document.createElement("td")
        let tdSolicitud=document.createElement("td")
        let tdHora=document.createElement("td")
        let tdFecha=document.createElement("td")
        let inputEditar=document.createElement("input")
            //creacion de contenedores
        let tdEditar=document.createElement("td")
        let tdEliminar=document.createElement("td")

        //creacion de botones
        let tdbtnEditar=document.createElement("button")
        let tdbtnEliminar=document.createElement("button")
                //nombre de los botones
        tdbtnEditar.textContent="Editar"
        tdbtnEliminar.textContent="Eliminar"
            //los datos del db json

        tdNombre.innerText=element.nombre
        tdSolicitud.innerText=element.solicitudes
        tdHora.innerText=element.hora
        tdFecha.innerText=element.fecha


            inputEditar.setAttribute("id","editarTareas")
            inputEditar.setAttribute("placeholder","Editar")

            //se imprima en la consola
            tdEditar.appendChild(inputEditar)
        tdEditar.appendChild(tdbtnEditar)
        tdEliminar.appendChild(tdbtnEliminar)


        tr.appendChild(tdNombre)
        tr.appendChild(tdSolicitud)
        tr.appendChild(tdHora)
        tr.appendChild(tdFecha)
        tr.appendChild(tdEditar)
        tr.appendChild(tdEliminar)

        tabla.appendChild(tr)

        tdbtnEditar.addEventListener("click",function () {
            console.log(element.id);
          // pasa el id y el dato que quiero actualizar por parametros  
          updateSolicitudes(inputEditar.value,element.id)
            
        })
        
       tdbtnEliminar.addEventListener("click", function () {

         deleteSolicitudes(element.id)
        
          Swal.fire({
            title: "Eliminado Correctamente!",
            icon: "success",
            draggable: true
          });
          location.reload()
       })

    });
    
}

mostarSolicitudes()




