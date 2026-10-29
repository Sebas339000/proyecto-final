let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(nombre, precio){

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    guardarCarrito();

    alert(nombre + " se agregó al carrito.");
}

function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito(){

    let lista = document.getElementById("listaCarrito");
    let total = document.getElementById("total");

    if(!lista || !total){
        return;
    }

    lista.innerHTML="";

    let suma=0;

    carrito.forEach((producto, indice)=>{

        let li=document.createElement("li");

        li.innerHTML=`
            ${producto.nombre} - $${producto.precio.toLocaleString()}
            <button onclick="eliminarProducto(${indice})">Eliminar</button>
        `;

        lista.appendChild(li);

        suma += producto.precio;

    });

    total.innerHTML="Total: $" + suma.toLocaleString();
}

function eliminarProducto(indice){

    carrito.splice(indice,1);

    guardarCarrito();

    mostrarCarrito();

}

function vaciarCarrito(){

    if(confirm("¿Deseas vaciar el carrito?")){

        carrito=[];

        guardarCarrito();

        mostrarCarrito();

    }

}

function finalizarCompra(){

    if(carrito.length==0){

        alert("El carrito está vacío.");

        return;

    }

    alert("¡Gracias por tu compra!");

    carrito=[];

    guardarCarrito();

    mostrarCarrito();

}

window.onload=mostrarCarrito;