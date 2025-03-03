 import { postUsers,getUsers,updateUsers,deleteUser } from "./service/llamados.js"
const nombreLogini=document.getElementById("nombreLogini")
const contraseñaLogini=document.getElementById("contraseñaLogini")
const botonLogini=document.getElementById("botonLogini")
const cedulalogini=document.getElementById("cedulalogini")

botonLogini.addEventListener("click",function () {

  

  if (!nombreLogini.value.trim() || !contraseñaLogini.value.trim() || !cedulalogini.value.trim()) {
    alert("llene los datos")
    
  } else {
    Swal.fire({
      title: "datos registrado",
      icon: "success",
      draggable: true
       
    });
    postUsers(nombreLogini.value,cedulalogini.value,contraseñaLogini.value,)
    window.location.href="http://localhost:3005/"

  }
    
 //   console.log(nombreLogini.value,cedulalogini.value,contraseñaLogini.value);
 //   window.location.href="http://localhost:3004/"
   
    
})