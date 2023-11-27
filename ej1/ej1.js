const express = require('express')
const app = express()
const PORT = '3030'

app.listen('3000', () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
})
