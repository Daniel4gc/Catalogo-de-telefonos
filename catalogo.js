const productos = [
    {
        nombre: "Ihone 17 Pro Max''",
        descripcion: "Pantalla de 6.9 pulgadas",
        precio: "$1,722.17.",
        imagen: "iphone.jpeg"
    },
    {
        nombre: "Samsun S25 Ultra''",
        descripcion: "Resolución de pantalla:1440 x 3120 píxeles",
        precio: "3.879.900",
        imagen: "samsung.jpeg"
    },
    {
        nombre: "OPPO A57''",
        descripcion: "Resolución. 1612 x 720 (HD+)",
        precio: "$5,999.00",
        imagen: "oppo.jpeg"
    }
];

// Inyectar productos en el HTML
const contenedor = document.getElementById("catalogo");

productos.forEach(prod => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");

    tarjeta.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h2>${prod.nombre}</h2>
        <p>${prod.descripcion}</p>
        <p class="precio">${prod.precio}</p>
        <button class="boton">Comprar</button>
    `;

    contenedor.appendChild(tarjeta);
});