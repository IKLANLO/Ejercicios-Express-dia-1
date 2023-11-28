const express = require('express')
const app = express()
const PORT = 3000
let products = 
    {
      description: 'Productos',
      items: [
        { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
        { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
        {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
        {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
        {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
        {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
      ]
    }

app.use(express.json())

app.get('/products', (req, res) => {
  res.send(products)
})

app.post('/products/newProduct', (req, res) => {
  const { nombre, precio } = req.body
  if(nombre === '' || precio === ''){
    res.status(400).send('Fields required')
  } else {
    products.items.push({id: products.items.length + 1, nombre, precio})
    res.status(201).send({ 
      id: products.items.length + 1, 
      nombre, 
      precio
    })
  }
})

app.put('/products/id/:id', (req, res) => {
  const found = products.items.some((product) => product.id == req.params.id)

  if (found){
    const result = products.items.forEach((product) => {
      if (product.id == req.params.id){
        product.nombre = req.body.nombre ? req.body.nombre : product.nombre
        product.precio = req.body.precio ? req.body.precio : product.precio
        res.status(200).send(products)
      }
    })
  } else {
    res.status(400).send('error')
  }
})

app.delete('/products/deleteId/:id', (req, res) => {
  const found = products.items.some((product) => product.id == req.params.id)

  if (found){
    const result = products.items.filter((product) => product.id != req.params.id)
    products.items = result
    res.status(200).send(result)
    console.log(products);
  } else {
    res.status(400).send('error')
  }
})

app.get('/products/prize/:precio', (req, res) => {
  const found = products.items.some((product) => product.precio == req.params.precio)

  if (found){
    const result = products.items.filter((product) => product.precio === +req.params.precio)
    res.send(result)
  } else {
    res.status(400).send('error')
  }
})

app.get('/products/prize/', (req, res) => {
  const found = products.items.some((product) => 50 <= product.precio <= 250)

  if (found){
    const result = products.items.filter((product) => product.precio <= 250 && product.precio >= 50)
    res.send(result)
  } else {
    res.status(400).send('error')
  }
})

app.get('/products/searchId/:id', (req, res) => {
  const found = products.items.some((product) => product.id == req.params.id)

  if (found){
    const result = products.items.filter((product) => product.id === +req.params.id)
    res.send(result)
  } else {
    res.status(400).send('error')
  }
})

app.get('/products/searchName/:nombre', (req, res) => {
  const found = products.items.some((product) => product.nombre == req.params.nombre)

  if (found){
    const result = products.items.filter((product) => product.nombre === req.params.nombre)
    res.send(result)
  } else {
    res.status(400).send('error')
  }
})

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
})