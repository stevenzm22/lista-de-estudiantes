 import { postUsers,getUsers,updateUsers,deleteUser } from "./service/llamados.js"
const nombreLogini=document.getElementById("nombreLogini")
const contraseñaLogini=document.getElementById("contraseñaLogini")
const botonLogini=document.getElementById("botonLogini")
const cedulalogini=document.getElementById("cedulalogini")

botonLogini.addEventListener("click",function () {

  postUsers(nombreLogini.value,cedulalogini.value,contraseñaLogini.value,)
    
    console.log(nombreLogini.value,cedulalogini.value,contraseñaLogini.value);
    window.location.href="http://localhost:3004/"
   
    
})