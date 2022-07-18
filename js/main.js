//Funcion Render de Productos
function mostrarProductos() {
    let productos = obtenerProductos()
    let card = "";

    for (let producto of productos) {
        card += `<div class="col-md-4">
        <div class="card">
<img src="${producto.img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${producto.nombre}</h5>
  <p class="card-text">Valor en Efectivo: $${producto.precio}</p>
  <a href="#" class="btn btn-danger " onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</a>
</div>
</div>
</div>`
    }
    document.getElementById("productos").innerHTML = card
}

//Ejecucion
guardarProductos(productos);
mostrarProductos();
mostrarCarrito();
