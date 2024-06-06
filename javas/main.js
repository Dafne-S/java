"scripsts";{
    "sass"; "sass --watch src/sass:src/css"
}

let mensaje = localStrorage.getItem('mensajeLocal')
console.log(mensaje)


let productos1 = [
{
    id: 'K1156235asdas-126',
    name: 'Cazadores de sombras: ciudad de hueso',
    price: '20000',
    description: 'Cassandra Clare',
    img: '../multimedia/Cazadores de Sombras Ciudad de Hueso.jpg',
},
{id: 'K11547trt-1278',
    name: '30 sunsets para enamorarte',
    price: '20000',
    description: 'Mercedes Ron',
    img: '../multimedia/30 sunsets para enamorarte.jpg',
},
{id: 'K115789erty-1278',
    name: 'Boulevard',
    price: '20000',
    description: 'Flor M. Salvador',
    img: '../multimedia/boulevard.webp',
},
{id: 'K1op-14441278',
    name: 'Twisted love',
    price: '20000',
    description: 'Ana Huang',
    img: '../multimedia/twisted love.webp',
},
]

function mostrarProductos1(){
    let contenedor = document.querySelector('#productos1');

    for (const product of ptoductos1){
        contenedor.innerHTML +=

        <div class="card" id=${product.id}>
            <img src=${product.img} alt=${product.description}>
            <div class="card-product">
            <h2>${product.name}</h2>
            <b class="precios">${product.price}</b>
            <p>${product.description}</p>
            <button>Comprar</button>
            </div>
        </div>
    }
}

mostrarProductos1()
