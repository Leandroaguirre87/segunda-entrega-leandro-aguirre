//Array de Productos
const productos = [{
    nombre: "Rodado 24",
    precio: 45000,
    id: 1,
    img: "img/bici-paseo.jpg",
    tipo: 1,
},
{
    nombre: "Rodado 26",
    precio: 50000,
    id: 2,
    img: "img/bici-paseo.jpg",
    tipo: 1,
},
{
    nombre: "Rodado 29",
    precio: 55000,
    id: 3,
    img: "img/bici-paseo.jpg",
    tipo: 1,
},
{
    nombre: "Rodado 24",
    precio: 60000,
    id: 4,
    img: "img/mountain-bikes.jpg",
    tipo: 2,
},
{
    nombre: "Rodado 26",
    precio: 65000,
    id: 5,
    img: "img/mountain-bikes.jpg",
    tipo: 2,
},
{
    nombre: "Rodado 29",
    precio: 70000,
    id: 6,
    img: "img/mountain-bikes.jpg",
    tipo: 2,
},
]

//FuncionesLS
function guardarProductos(productos) {
    localStorage.setItem("productos", JSON.stringify(productos))
}

function obtenerProductos() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}