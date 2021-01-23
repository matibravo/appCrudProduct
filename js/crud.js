
let productos = []; //este arreglo es let xq permite guardar y leer productos en localstorage
let index;


const almacenar = ()=>{

    productos = localStorage.setItem("producto", JSON.stringify(productos)); //transforma a json string

    location.reload();
}

export function leer(resultado){

    const $divResultado = document.querySelector(resultado);

    $divResultado.innerHTML = "";

    productos = JSON.parse(localStorage.getItem("producto"));  
    //console.log(productos);

    if(productos === null){
        productos = [];
        console.log(productos);
    } else {
        productos.forEach(element => {
            //console.log(element);
            $divResultado.innerHTML +=                          
            `<div class="elemento">
                <b>${element.nombre}</b>
                <span>$${element.precio}
                <button class="btn_modificar" id="btnModificar">Modificar</button>                
                <button class="btn_eliminar" id="btnEliminar">Eliminar</button></span>
            </div>`;
        });
    }
}

export function guardar(btnGuardar, producto, valor, formulario){

    console.log("ok");      
    

    document.addEventListener("click", (e)=>{

        let nombreProducto = document.querySelector(producto).value,
            precioProducto = document.querySelector(valor).value,
            formularioUI = document.querySelector(formulario);
        
        let objetos = {
                    nombre: nombreProducto,
                    precio: precioProducto
                };        

        if(e.target.matches(btnGuardar)){   
            
            e.preventDefault(); //me permite ver lo q estoy mandando

            if(!nombreProducto) return alert("El campo nombre viene vacio");
            if(!precioProducto) return alert("El campo precio viene vacio");

            productos.push(objetos);
            
            almacenar();  //llamo funcion para almacenar en local storage

            formularioUI.reset();
            
            /*console.log(`Nombre: ${nombreProducto} y su precio: ${precioProducto}`);
            console.log(objetos);
            console.log(productos);*/                   

        }
    }) 
    

    
}     

/*let bebida = guardar('Coca cola 2lts', '3000');
let chocman = guardar('chocman', '150');
console.log(bebida);
console.log(chocman);
console.log(productos);*/

export function eliminar(btnEliminar){    

    document.addEventListener("click", (e)=>{

        let texto = e.path[2].childNodes[1].innerHTML,  
            indiceProductos;
            

        if(e.target.matches(btnEliminar)){

            //console.log(e);
            //console.log(e.path[2].childNodes[1].innerHTML); ruta donde se encuentra el nombre del producto*/
            //console.log(texto);
            if(confirm(`¿Está seguro de querer eliminar ${texto} ?`)){
                
                index = productos.findIndex((element) => element.nombre === texto); // me entrega el indice       
                console.log(index);
                productos.splice(index, 1); //aqui eliminamos pasamos el indice y eliminamos 1 producto
                    
                almacenar(); //llamo funcion q guarda en local storage
                
            } 
            
            
        }
    })

}

export function modificar(btnModificar, nombreInput, precioInput){    

    

    document.addEventListener("click", (e)=>{        

        let texto = e.path[2].childNodes[1].innerHTML;

        if(e.target.matches(btnModificar)){           

            index = productos.findIndex((element) => element.nombre === texto); // me entrega el indice       

            //console.log(index); 
            console.log(productos[index].nombre);

            document.querySelector(nombreInput).value = `${productos[index].nombre}`;
            document.querySelector(precioInput).value = `${productos[index].precio}`;    
            
            productos.splice(index, 1); //elimino el que quiero modificar            
            
        }
    })

}

 
    
   


	
