import {eliminar, guardar, leer, modificar} from "./crud.js";


document.addEventListener("DOMContentLoaded", (e)=>{
    guardar("#btnGuardar", "#nombreProducto", "#precioProducto", "#formulario");  
    leer("#resultado");
    eliminar("#btnEliminar");
    modificar("#btnModificar", "#nombreProducto", "#precioProducto");
})


