import express from "express";
import { ProductManager } from "./ProductManager.js";

const port = 8080;

// crear la aplicacion del servidor 
const app = express(); 

// levantar servidor
app.listen(port,()=>console.log(`El servidor esta escuchando en el puerto ${port}`));

//definir rutas
app.get("/saludo",(request,response)=>{
    response.send("hola a todos con express y coder");
});

app.get("/bienvenida",(req,res)=>{
    res.send("<p style='color:blue'>bienvenidas</p>");
});

app.get("/usuario", (req,res)=>{
    res.send({nombre:"pepe", edad:20, correo:"pepeargento@gmail.com"});

});

//crear la instancia de la clase
const productService = new ProductManager(`./src/products.json`);
let resultado = 0;

app.get("/products",(req,res)=>{
    try {
        const result = productService.getProducts();
        console.log("result: ", result);
        const limite = parseInt(req.query.limit);
        console.log("limite: ", limite);
        if (limite>0) {
            resultado = result.filter(producto=>producto.id <= limite);
        } else {
            resultado = result;
        }
        res.send(resultado);
    } catch (error) {
        res.send(error.message);
    }
});

app.get("/products/:pid",(req,res)=>{
    try {
    const pid = parseInt(req.params.pid);
    const result = productService.getProductById(pid);
    if (!result) {
        console.log("El producto no existe!");
    } else {
        res.send(result);
    }
    
    } catch (error) {
        res.send(error.message);
    }
});
