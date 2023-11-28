# Ejercicios Express

Servicio que permite buscar, añadir, eliminar y actualizar datos, realizando la solicitud directamente desde la url.

## Utilización

Tras introducir las siguientes url y datos requeridos el usuario recibirá un fichero JSON con la respuesta solicitada.

- <b>Lista de productos</b>: <i>'localhost:3000/products'</i>.

- <b>Añadir un producto</b>: <i>'localhost:3000/products/newProduct'</i>. En el body deben introducirse los datos requeridos (nombre y precio).

- <b>Actualizar un producto</b>: <i>'localhost:3000/products/id/:id'</i>. En la url debe introducirse el id del producto a actualizar, y en el body los datos que queramos modificar (nombre y/o precio).

- <b>Eliminar un producto</b>: <i>'localhost:3000/products/deleteId/:id'</i>. En la url debe añadirse el id del producto a eliminar.

- <b>Filtro por precio</b>: <i>'localhost:3000/products/prize/:precio'</i>. En la url debe añadirse el precio de los productos que queramos encontrar.

- <b>Filtro por precios entre 50 y 250</b>: <i>'localhost:3000/products/prize/'</i>.

- <b>Filtro que busque por id</b>: <i>'localhost:3000/products/searchId/:id'</i>. En la url debe añadirse el id del producto a buscar.

- <b>Filtro que busque por nombre</b>: <i>'localhost:3000/products/searchName/:nombre'</i>. En la url debe añadirse el nombre del producto a buscar.
