import { postUsers,getUsers,updateUsers,deleteUser } from "./service/llamados.js"

const nombreLogin=document.getElementById("nombreLogin")
const contraseñaLogin=document.getElementById("contraseñaLogin")
const botonLogin=document.getElementById("botonLogin")
const cedulalogin=document.getElementById("cedulalogin")

botonLogin.addEventListener("click",function () {

 // postUsers(nombreLogin.value,cedulalogin.value,contraseñaLogin.value)
    
    //console.log(nombreLogin.value,cedulalogin.value,contraseñaLogin.value);
    verificar()
    
})


 async function verificar () {

    const datos= await getUsers()

    datos.forEach(element => {
        
        if (element.nombre===nombreLogin.value && element.contraseña===contraseñaLogin.value && element.rol==="profesor") {
     window.location.href="http://localhost:3003/pagina.html"
           
        } else { if (element.nombre===nombreLogin.value && element.contraseña===contraseñaLogin.value && element.rol==="estudiante") {
             alert("es estudiante")
        }
            alert("es visitante")
        }
        
    });

}
