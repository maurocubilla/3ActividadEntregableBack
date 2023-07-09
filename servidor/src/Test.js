//const ProductManager = require('./ProductManager.js');
import { ProductManager } from "./ProductManager.js";

// Crear una instancia de ProductManager
const manager = new ProductManager('products.json');

// Obtener los productos (debe devolver un arreglo vacío [])
console.log("Obtener los produtos: ",manager.getProducts());

// Agregar productos
let product = {
    title: 'producto prueba',
    description: 'producto prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25,
};
manager.addProduct(product);

product = {
    title: 'producto  1',
    description: 'producto 1',
    price: 500,
    thumbnail: 'Sin imagen',
    code: 'abc124',
    stock: 45,
};
manager.addProduct(product);
product = {
    "id": 3,
    "title": "producto  2",
    "description": "producto 2",
    "price": 200,
    "thumbnail": "Sin imagen",
    "code": "abc125",
    "stock": 90
  }
  manager.addProduct(product);

// Obtener los productos nuevamente 
console.log("Productos cargados: ",manager.getProducts());

// Obtener un producto por su ID 
const productId = 1;
const foundProduct = manager.getProductById(productId);
console.log("Producto por ID: ",foundProduct);

// Actualizar un producto 

const updatedFields = { price: 500 };
manager.updateProduct(productId, updatedFields);
