const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Permite recibir peticiones de cualquier lado
app.use(express.json()); // Parsear el body de la petición a un JSON

app.listen(5000, function () {
  console.log('Listening port 5000');
});
