import {postSolicitudes} from "./service/solicitudes.js"

const inputNombre=document.getElementById("formGroupExampleInput")
const inputSolicitud=document.getElementById("formGroupExampleInput2")
const inputfecha = document.getElementById("formGroupExampleInput3")
const agregarTAREAS=document.getElementById("agregarTAREAS")



 const fechas = new Date();
  const horas = fechas.getHours()
  const minutos = fechas.getMinutes()
  const segundos = fechas.getSeconds()

 let horageneral = horas+':'+minutos+':'+segundos;


agregarTAREAS.addEventListener("click",function () {

  //  console.log(inputNombre.value,inputSolicitud.value,inputfecha.value);
  if (!inputNombre.value.trim() || !inputSolicitud.value.trim() || !inputfecha.value.trim()) {
    alert("lleno los datos")
  } else {
    postSolicitudes(inputNombre.value,inputSolicitud.value,horageneral,inputfecha.value)
  
  }
  
 
})
