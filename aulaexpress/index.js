const express = require('express');
const app = express();
const port = 3000;

app.all('/aula', (req, resp) => { 
    resp.send('Oi, Aula express') 
})

app.get('/aprendi', (req, resp) => { 
    resp.send('Oi, Aula express') 
})




app.listen(port, () => {
    console.log('Aplicação Express porta ' + port)
})