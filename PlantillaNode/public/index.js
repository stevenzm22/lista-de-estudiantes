import { postUsers,getUsers,updateUsers,deleteUser } from "./service/llamados.js"

const nombreLogin=document.getElementById("nombreLogin")
const contraseñaLogin=document.getElementById("contraseñaLogin")
const botonLogin=document.getElementById("botonLogin")
<<<<<<< HEAD
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
=======

botonLogin.addEventListener("click",function () {

  
    
    console.log(nombreLogin.value,contraseñaLogin.value);
    
})

>>>>>>> 4772513173b588bcffcbc269910748953d309e22
