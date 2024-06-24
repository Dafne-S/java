
const productos = [
    //AVENTURA
    {
        id: "aventura-01",
        titulo: "La isla del tesoro",
        imagen: "./multimedia/la-isla-del-tesoro.jpg",
        autor: "(Robert Louis Stevenson)",
        categoria: {
            nombre: "Aventura",
            id: "aventura"
        },
        precio: 10000
    },
    {
        id: "aventura-02",
        titulo: "Las aventuras de Tom Sawyer",
        imagen: "./multimedia/las aventuras de tom sawyer.jpg",
        autor: "(Mark Twain)",
        categoria: {
            nombre: "Aventura",
            id: "aventura"
        },
        precio: 30000
    },
    {
        id: "aventura-03",
        titulo: "El hobbit",
        imagen: "./multimedia/el hobbit.jpg",
        autor: "(J.R.R. Tolken)",
        categoria: {
            nombre: "Aventura",
            id: "aventura"
        },
        precio: 25000
    },
    {
        id: "aventura-04",
        titulo: "Robbinson Crusoe",
        imagen: "./multimedia/robinson crusoe.jpg",
        autor: "(Daniel Defoe)",
        categoria: {
            nombre: "Aventura",
            id: "aventura"
        },
        precio: 25000
    },
    {
        id: "aventura-05",
        titulo: "Viaje al centro de la tierra",
        imagen: "./multimedia/viaje al centro de la tierra.jpg",
        autor: "(Jules Verne)",
        categoria: {
            nombre: "Aventura",
            id: "aventura"
        },
        precio: 6000
    },
    {
        id: "aventura-06",
        titulo: "Los tres mosqueteros",
        imagen: "./multimedia/los tres mosqueteros.jpg",
        autor: "(Alexandre Dumas)",
        categoria: {
            nombre: "Aventura",
            id: "aventura"
        },
        precio: 30000
    },
    {
        id: "aventura-07",
        titulo: "El conde de Montecristo",
        imagen: "./multimedia/el conde de montecristo.jpg",
        autor: "(Alexandre Dumas)",
        categoria: {
            nombre: "Aventura",
            id: "aventura"
        },
        precio: 34000
    },
    {
        id: "aventura-08",
        titulo: "Veinte mil leguas de viaje submarino",
        imagen: "./multimedia/20000 leguas de viaje submarino.jpg",
        autor: "(Jules Verne)",
        categoria: {
            nombre: "Aventura",
            id: "aventura"
        },
        precio: 4000
    },
    //CIENCIA FICCION
    {
        id: "cienciaficcion-01",
        titulo: "1984",
        imagen: "./multimedia/1984.jpg",
        autor: "(George Orwell)",
        categoria: {
            nombre: "Ciencia ficcion",
            id: "ciencia ficcion"
        },
        precio: 15000
    },
    {
        id: "cienciaficcion-02",
        titulo: "Fahrenheit 451",
        imagen: "./multimedia/fahrenheit 451.jpg",
        autor: "(Ray Bardbury)",
        categoria: {
            nombre: "Ciencia ficcion",
            id: "ciencia ficcion"
        },
        precio: 30000
    },
    {
        id: "cienciaficcion-03",
        titulo: "Dune",
        imagen: "./multimedia/dune.jpg",
        autor: "(Frank Herbert)",
        categoria: {
            nombre: "Ciencia ficcion",
            id: "ciencia ficcion"
        },
        precio: 32000
    },
    
    {
        id: "cienciaficcion-04",
        titulo: "El juego de ender",
        imagen: "./multimedia/el juego de ender.jpg",
        autor: "(Orson Scott Card)",
        categoria: {
            nombre: "Ciencia ficcion",
            id: "ciencia ficcion"
        },
        precio: 5000
    },
    
    {
        id: "cienciaficcion-05",
        titulo: "Neuromante",
        imagen: "./multimedia/neuromante.jpg",
        autor: "(William Gibson)",
        categoria: {
            nombre: "Ciencia ficcion",
            id: "ciencia ficcion"
        },
        precio: 20000
    },
    {
        id: "cienciaficcion-06",
        titulo: "La guerra de los mundos",
        imagen: "./multimedia/la guerra de los mundos.jpg",
        autor: "(H.G. Wells)",
        categoria: {
            nombre: "Ciencia ficcion",
            id: "ciencia ficcion"
        },
        precio: 30000
    },
    {
        id: "cienciaficcion-07",
        titulo: "Fundación",
        imagen: "./multimedia/fundacion.jpg",
        autor: "(Isaac Asimov)",
        categoria: {
            nombre: "Ciencia ficcion",
            id: "ciencia ficcion"
        },
        precio: 20000
    },
    {
        id: "cienciaficcion-08",
        titulo: "El hombre del castillo",
        imagen: "./multimedia/el hombre en el castillo.jpg",
        autor: "(Philip K. Dick)",
        categoria: {
            nombre: "Ciencia ficcion",
            id: "ciencia ficcion"
        },
        precio: 20000
    },
    //CLASICOS
    {
        id: "clasicos-01",
        titulo: "Orgullo y prejuicio",
        imagen: "./multimedia/orgullo y prejuicio.jpg",
        autor: "(Jane Austen)",
        categoria: {
            nombre: "Clasicos",
            id: "clasicos"
        },
        precio: 25000
    },
    {
        id: "clasicos-02",
        titulo: "Cien años de soledad",
        imagen: "./multimedia/cien años de soledad.jpg",
        autor: "(Gabriel García Marquéz)",
        categoria: {
            nombre: "Clasicos",
            id: "clasicos"
        },
        precio: 30000
    },
    {
        id: "clasicos-03",
        titulo: "Matar a un ruiseñor",
        imagen: "./multimedia/matar a un ruiseñor.jpeg",
        autor: "(Harper Lee)",
        categoria: {
            nombre: "Clasicos",
            id: "clasicos"
        },
        precio: 28000
    },
    {
        id: "clasicos-04",
        titulo: "El gran gatsby",
        imagen: "./multimedia/el gran gatsby.jpeg",
        autor: "(F. Scott Fitzgerald)",
        categoria: {
            nombre: "Clasicos",
            id: "clasicos"
        },
        precio: 20000
    },
    {
        id: "clasicos-05",
        titulo: "Crimen y castigo",
        imagen: "./multimedia/crimen y castigo.jpeg",
        autor: "(Fyodor Dostoevsky)",
        categoria: {
            nombre: "Clasicos",
            id: "clasicos"
        },
        precio: 20000
    },
    {
        id: "clasicos-06",
        titulo: "En busca del tiempo perdido",
        imagen: "./multimedia/en busca del tiempo perdido.jpg",
        autor: "(Marcel Proust)",
        categoria: {
            nombre: "Clasicos",
            id: "clasicos"
        },
        precio: 27000
    },
    {
        id: "clasicos-07",
        titulo: "Don quijote de la mancha",
        imagen: "./multimedia/don quijote de la mancha.jpg",
        autor: "(Miguel de Cervantes)",
        categoria: {
            nombre: "Clasicos",
            id: "clasicos"
        },
        precio: 22000
    },
    //FANTASIA
    {
        id: "fantasia-01",
        titulo: "El señor de los anillos",
        imagen: "./multimedia/el señor de los anillos.jpg",
        autor: "(J.R.R. Tolken)",
        categoria: {
            nombre: "Fantasia",
            id: "fantasia"
        },
        precio: 27000
    },
    {
        id: "fantasia-02",
        titulo: "Harry potter y la piedra filosofal",
        imagen: "./multimedia/harry potter y la piedra filosofal.jpg",
        autor: "(J.K. Rowling)",
        categoria: {
            nombre: "Fantasia",
            id: "fantasia"
        },
        precio: 30000
    },
    {
        id: "fantasia-03",
        titulo: "Juego de tronos",
        imagen: "./multimedia/juego de tronos.jpg",
        autor: "(George R.R. Martin)",
        categoria: {
            nombre: "Fantasia",
            id: "fantasia"
        },
        precio: 32000
    },
    {
        id: "fantasia-04",
        titulo: "El nombre del viento",
        imagen: "./multimedia/el nombre del viento.jpg",
        autor: "(Patrick Rothfuss)",
        categoria: {
            nombre: "Fantasia",
            id: "fantasia"
        },
        precio: 22000
    },
    {
        id: "fantasia-05",
        titulo: "La canción de Aquiles",
        imagen: "./multimedia/la cancion de aquiles.jpg",
        autor: "(Madeline Miller)",
        categoria: {
            nombre: "Fantasia",
            id: "fantasia"
        },
        precio: 23000
    },
    {
        id: "fantasia-06",
        titulo: "Cazadores de sombras:ciudad de hueso",
        imagen: "./multimedia/Cazadores de Sombras Ciudad de Hueso.jpg",
        autor: "(Cassandra Clare)",
        categoria: {
            nombre: "Fantasia",
            id: "fantasia"
        },
        precio: 33000
    },
    {
        id: "fantasia-07",
        titulo: "Las crónicas de Narnia:el león, la bruja y el ropero",
        imagen: "./multimedia/Las Crónicas de Narnia El león, la Bruja y el Ropero.jpg",
        autor: "(C.S. Lewis)",
        categoria: {
            nombre: "Fantasia",
            id: "fantasia"
        },
        precio: 30000
    },
    //INFANTIL
    {
        id: "infantil-01",
        titulo: "El principito",
        imagen: "./multimedia/el principito.jpg",
        autor: "(Antonie de Saint-Exupery)",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 17000
    },
    {
        id: "infantil-02",
        titulo: "Charlie y la fábrica de chocolate",
        imagen: "./multimedia/charlie y la frabrica de chocolate.jpg",
        autor: "(Roald Dahl)",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 18000
    },
    {
        id: "infantil-03",
        titulo: "El gato ensombrerado",
        imagen: "./multimedia/el gato ensombrerado.jpg",
        autor: "(Dr. Seuss)",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 19000
    },
    {
        id: "infantil-04",
        titulo: "Matilda",
        imagen: "./multimedia/matilda.jpg",
        autor: "(Roald Dahl)",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 16000
    },
    {
        id: "infantil-05",
        titulo: "Peter Pan",
        imagen: "./multimedia/peter pan.jpeg",
        autor: "(J.M. Barrie)",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 18000
    },
    {
        id: "infantil-06",
        titulo: "Alicia en el país de las maravillas",
        imagen: "./multimedia/alicia en el pais de las maravillas.jpg",
        autor: "(Lewis Carroll)",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 17000
    },
    {
        id: "infantil-07",
        titulo: "Las aventuras de pinocho",
        imagen: "./multimedia/las aventuras de pinocho.jpg",
        autor: "(Carlo Collodi)",
        categoria: {
            nombre: "Infantil",
            id: "infantil"
        },
        precio: 15000
    },
    //ROMANCE
    {
        id: "romance-01",
        titulo: "30 sunsets para enamorarte",
        imagen: "./multimedia/30 sunsets para enamorarte.jpg",
        autor: "(Mercedes Ron)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 26000
    },
    {
        id: "romance-02",
        titulo: "Donde todo brilla",
        imagen: "./multimedia/donde todo brilla.png",
        autor: "(Alice Kellen)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 24000
    },
    {
        id: "romance-03",
        titulo: "Antes de diciembre",
        imagen: "./multimedia/antes de diciembre.jpg",
        autor: "(Joana Marcus)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 23000
    },
    {
        id: "romance-04",
        titulo: "Fabricante de lágrimas",
        imagen: "./multimedia/fabricante de lagrimas.jpg",
        autor: "(Frin Doom)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 30000
    },
    {
        id: "romance-05",
        titulo: "Jane Eyre",
        imagen: "./multimedia/jane eyre.jpg",
        autor: "(Charlotte Bronte)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 21000
    },
    {
        id: "romance-06",
        titulo: "Romeo y Julieta",
        imagen: "./multimedia/romeo y julieta.jpg",
        autor: "(William Shakespeare)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 18000
    },
    {
        id: "romance-07",
        titulo: "Bajo la misma estrella",
        imagen: "./multimedia/bajo la misma estrella.jpg",
        autor: "(John Green)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 22000
    },
    {
        id: "romance-08",
        titulo: "Posdata te amo",
        imagen: "./multimedia/posdata te amo.jpg",
        autor: "(Cecelia Ahern)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 19000
    },
    {
        id: "romance-09",
        titulo: "Cincuenta sombras de Grey",
        imagen: "./multimedia/cincuenta sombras de grey.jpg",
        autor: "(E.L. James)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 30000
    },
    {
        id: "romance-10",
        titulo: "Un paseo para recordar",
        imagen: "./multimedia/un paseo para recordar.jpg",
        autor: "(Nicholas Sparks)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 23000
    },
    {
        id: "romance-11",
        titulo: "Boulevard",
        imagen: "./multimedia/boulevard.jpg",
        autor: "(Flor. M. Salvador)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 25000
    },
    {
        id: "romance-12",
        titulo: "Romper el círculo",
        imagen: "./multimedia/romper el circulo.jpeg",
        autor: "(Collen Hoover)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 27000
    },
    {
        id: "romance-13",
        titulo: "Todo lo que nunca fuimos",
        imagen: "./multimedia/todo lo que nunca fuimos.jpg",
        autor: "(Alice Kellen)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 28000
    },
    {
        id: "romance-14",
        titulo: "Twisted love",
        imagen: "./multimedia/twisted love.jpg",
        autor: "(Ana Huang)",
        categoria: {
            nombre: "Romance",
            id: "romance"
        },
        precio: 29000
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".botones-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesComprar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productos){
    productos.forEach(producto => {
    
        const div = document.createElement("div")
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <b class="producto-precio">$${producto.precio}</b>
                    <p class="producto-autor">${producto.autor}</p>
                    <button class="producto-agregar" id="${producto.id}">Comprar</button>
                </div>
                `;
            contenedorProductos.append(div);
    })
    
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{
    
    botonesCategorias.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos"){
    const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
    console.log(productoCategoria);
    tituloPrincipal.innerHTML = "Todos los productos";
    const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
    cargarProductos(productosBoton);
    } else{
        cargarProductos(productos);
    }
    })
});

function actualizarBotonesComprar(){
    botonesComprar = document.querySelectorAll(".producto-agregar");

    botonesComprar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];
function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    console.log(productosEnCarrito);
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index =productosEnCarrito.findIndex(producto => producto.id === idBoton);
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
}


