
const express = require('express');
const path = require('path');


const app = express();



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

<<<<<<< HEAD
const PORT = 3003;
=======
const PORT = 3002;
>>>>>>> 4772513173b588bcffcbc269910748953d309e22
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
