import { postUsers,getUsers,updateUsers,deleteUser } from "./service/llamados.js"

const nombreLogin=document.getElementById("nombreLogin")
const contraseñaLogin=document.getElementById("contraseñaLogin")
const botonLogin=document.getElementById("botonLogin")

botonLogin.addEventListener("click",function () {

  
    
    console.log(nombreLogin.value,contraseñaLogin.value);
    
})

