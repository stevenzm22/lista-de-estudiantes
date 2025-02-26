async function getUsers() {
    try {
        const response = await fetch(' http://localhost:3000/usuarios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export { getUsers };

//////////LLAMADO POST//////////

<<<<<<< HEAD
async function postUsers(nombre,cedula,contraseña) {
=======
async function postUsers(nombre,contraseña) {
>>>>>>> 4772513173b588bcffcbc269910748953d309e22
    try {
     
        const userData = { 
           nombre,
<<<<<<< HEAD
           cedula,
=======
>>>>>>> 4772513173b588bcffcbc269910748953d309e22
           contraseña
        
        };



        const response = await fetch("http://localhost:3000/usuarios", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export{postUsers}

//////////////LLAMADO UPDATE/////////////


<<<<<<< HEAD
async function updateUsers(nombre,cedula,contraseña,id) 
=======
async function updateUsers(producto,precio,cantidad,id) 
>>>>>>> 4772513173b588bcffcbc269910748953d309e22
{
    try {
     
        const userData = { 
<<<<<<< HEAD
            nombre, 
            cedula,
            contraseña
            
=======
            producto, 
            precio,
            cantidad
>>>>>>> 4772513173b588bcffcbc269910748953d309e22
        
        };


        


        const response = await fetch("http://localhost:3000/usuarios/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export{updateUsers}



//////////////LLAMADO DELETE/////////////


async function deleteUser(id) {
    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteUser };