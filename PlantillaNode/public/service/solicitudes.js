async function getSolicitudes() {
    try {
        const response = await fetch(' http://localhost:3000/solicitudes', {
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

export { getSolicitudes };

//////////LLAMADO POST//////////

async function postSolicitudes(nombre,solicitudes,hora,fecha) {

    try {
     
        const userData = { 
           nombre,
           solicitudes,
           hora,
           fecha
        };



        const response = await fetch("http://localhost:3000/solicitudes", {
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

export{postSolicitudes}

//////////////LLAMADO UPDATE/////////////



async function updateSolicitudes(solicitudes,id) 

{
    try {
     
        const userData = { 

          
            solicitudes
            
        };


        


        const response = await fetch("http://localhost:3000/solicitudes/"+id, {
            method: 'PATCH',
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

export{updateSolicitudes}



//////////////LLAMADO DELETE/////////////


async function deleteSolicitudes(id) {
    try {
        const response = await fetch(`http://localhost:3000/solicitudes/${id}`, {
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

export { deleteSolicitudes };