//Funciones CarritoLS
function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos))
}
function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

//Funcion Render Carrito
function mostrarCarrito() {
    let productos = obtenerProductosCarrito();
    let contenido = `<button type="button" class="btn btn-success position-relative">
<img src="img/cart4.svg" width="24">
<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
    <span class="visually-hidden">unread messages</span>
  </span>
</button>`
    let totalProductos = 0;
    if (productos.length > 0) {
        for (let producto of productos) {
            totalProductos += producto.cantidad
        }
        contenido = `<button type="button" class="btn btn-success position-relative">
    <img src="img/cart4.svg" width="24">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        ${totalProductos}
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>`
    }
    let carrito = document.getElementById("carrito")
    carrito.innerHTML = contenido;
}

//Funciones
function buscarProductos(id) {
    let productos = obtenerProductos();
    return productos.find(x => x.id == id);
}

function agregarAlCarrito(id) {
    let producto = buscarProductos(id);
    let productos_carrito = obtenerProductosCarrito();
    let posProducto = productos_carrito.findIndex(x => x.id == id);

    if (posProducto > -1) {
        productos_carrito[posProducto].cantidad += 1;
    } else {
        let producto = buscarProductos(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }

    guardarProductosCarrito(productos_carrito);
    mostrarCarrito();
}

function vaciarCarrito() {

    localStorage.removeItem("carrito");
    mostrarCarrito()
    mostrarProductosDelCarrito();
}

function eliminarDelCarrito(id) {
    let productos_carrito = obtenerProductosCarrito();
    let posProducto = productos_carrito.findIndex(x => x.id == id);
    productos_carrito[posProducto].cantidad -= 1;

    if (productos_carrito[posProducto].cantidad == 0) {
        productos_carrito.splice(posProducto, 1);
    }


    guardarProductosCarrito(productos_carrito);
    mostrarCarrito();
    mostrarProductosDelCarrito();
}

//Sweet Alert

function mostarAlert() {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Su producto ha sido agregado satisfactoriamente',
        showConfirmButton: false,
        timer: 1500
    })
}

document.getElementById("productos").addEventListener("click", mostarAlert);
