# Bsale-api

## Requisitos generales:
Agregar un buscador, el cual tiene que estar implementado a nivel de servidor, mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección.
Es decir, los datos de productos deben llegar filtrados al cliente.

## Autoria
Este ejercicio, no tiene ningún fin comercial ni estratégico, sólo busca medir habilidades y conocimientos

***

## **Herramientas/Dependencias utilizadas**
 - Node.js v18.12.0
 - Express v4.18.2
 - Mysql2 v2.3.3
## **Instalación**
una vez clonado, solo se requiere hacer:
```
$ npm start
```

## **DataBase**
La base de datos nos provee de dos tablas ***product*** y ***category***
```ts
product table
{
  id: int // Identificador único del producto
  name: varchar // Nombre del producto
  url_image: varchar // URL de la imagen asociada al producto
  price: float // Precio de venta del producto
  discount: int // Porcentaje de descuento del producto
  category: int // Identificador de la categoría
}
```
```ts
cartegory table
{
  id: int // Identificador único de la categoria
  name: varchar // Nombre de la categoria
}
```

## **EndPoints**

La api dispone de 2 end-points ***/product*** y ***/category***

### **/product**

*Retorna en caso de exito* un objeto con el siguiente formato
```ts
{
   count: int, // cantidad de productos que cumplen las dondiciones
   pages: int,  // cantidad total de paginas
   result: [products] // array de productos resultantes de la busqueda  0 <= result.length <= 6
}
```
*En caso de error retorna* un objeto con el siguiente formato
```ts
{
   count: int = 0,
   pages: int = 0,
   result: [], // result.length = 0
   error : error // será enviado el error ocurrido al front para ser manejado en caso de que sea necesario
}
```
  Acepta hasta 3 parametros distintos por Query (no obligatorios) para filtrar los productos
 - `name : string` (nombre completo o parte del nombre del producto)
 - `category : int` [1-7] (id correspondiente a una categoria)
 - `page : int` (numero de la página que se espera, `por default se retorna la page 1`)

**ejemplo**
```ts
  //example.com/product?page=2&name=ener&category=1
{
  "count": 8,
  "pages": 2,
  "result": [
    {
      "id": 77,
      "name": "ENERGETICA MONSTER RIPPER",
      "url_image": "",
      "price": 1990,
      "discount": 0,
      "category": 1
    },
    {
      "id": 79,
      "name": "ENERGETICA MONSTER VERDE",
      "url_image": "",
      "price": 1990,
      "discount": 0,
      "category": 1
    }
  ]
}
```

### **/category**
No acepta parametros y retorna un array con todas las categorias en formato objeto
```ts
[
  {
    id: int, // identificador unico 
    name: string // nombre
  },
  ...
]
```
***

### **Deploy**
La aplicación se encuentra deployada en Heroku: https://bsalechallengeapi.herokuapp.com/

