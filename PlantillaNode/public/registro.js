 import { postUsers,getUsers,updateUsers,deleteUser } from "./service/llamados.js"
const nombreLogini=document.getElementById("nombreLogini")
const contraseñaLogini=document.getElementById("contraseñaLogini")
const botonLogini=document.getElementById("botonLogini")
const cedulalogini=document.getElementById("cedulalogini")
const selectlogin=document.getElementById("selectlogin")
botonLogini.addEventListener("click",function () {

  postUsers(nombreLogini.value,cedulalogini.value,contraseñaLogini.value,selectlogin.value)
    
    console.log(nombreLogini.value,cedulalogini.value,contraseñaLogini.value);
   
    
})