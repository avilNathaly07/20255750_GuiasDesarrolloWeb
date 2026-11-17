// ==========================================
// 1. CONFIGURACIÓN DE CREDENCIALES RAPIDAPI
// ==========================================
const API_KEY = "7a39f48834msh830e809f7e7e0d6p1298a3jsn6806d3f5ff4f";
const API_HOST = "spotify23.p.rapidapi.com";

const OPTIONS = {
    method: "GET",
    headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST
    }
};

// ==========================================
// 2. REFERENCIAS A ELEMENTOS DEL DOM
// ==========================================
const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const estadoMensaje = document.getElementById("estadoMensaje");
const contenedorAlbumes = document.getElementById("contenedorAlbumes");
const contenedorDetalle = document.getElementById("contenedorDetalle");

// ==========================================
// 3. ENDPOINT 1: LISTADO DE ÁLBUMES (/search/)
// ==========================================
const buscarAlbumes = async (termino) => {
    mostrarMensajeEstado(`Buscando álbumes de "${termino}"...`, "info", true);
    limpiarElemento(contenedorAlbumes);

    const url = `https://${API_HOST}/search/?q=${encodeURIComponent(termino)}&type=albums&offset=0&limit=12&numberOfTopResults=5`;

    try {
        const respuesta = await fetch(url, OPTIONS);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP ${respuesta.status}: No se pudo obtener el listado.`);
        }

        const datos = await respuesta.json();
        limpiarElemento(estadoMensaje);

        const items = datos?.albums?.items || [];

        if (items.length === 0) {
            mostrarMensajeEstado("No se encontraron álbumes para esa búsqueda.", "warning", false);
            return;
        }

        renderizarListadoAlbumes(items);

    } catch (error) {
        console.error("Error al buscar álbumes:", error);
        mostrarMensajeEstado(`Ocurrió un error al consultar la API: ${error.message}`, "danger", false);
    }
};

// ==========================================
// 4. ENDPOINT 2: DETALLE DEL ÁLBUM (/album_metadata/)
// ==========================================
const obtenerDetalleAlbum = async (albumId, nombreAlbum) => {
    // Mostrar spinner de carga en el panel derecho
    limpiarElemento(contenedorDetalle);
    const divCarga = document.createElement("div");
    divCarga.className = "text-center py-5";

    const spinner = document.createElement("div");
    spinner.className = "spinner-border text-success mb-2";
    spinner.setAttribute("role", "status");

    const textoCarga = document.createElement("p");
    textoCarga.className = "text-muted mb-0";
    textoCarga.textContent = `Cargando detalles de "${nombreAlbum}"...`;

    divCarga.appendChild(spinner);
    divCarga.appendChild(textoCarga);
    contenedorDetalle.appendChild(divCarga);

    const url = `https://${API_HOST}/album_metadata/?id=${encodeURIComponent(albumId)}`;

    try {
        const respuesta = await fetch(url, OPTIONS);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP ${respuesta.status}: No se pudo cargar el detalle.`);
        }

        const datos = await respuesta.json();
        const album = datos?.data?.album;

        if (!album) {
            throw new Error("No se encontraron metadatos disponibles para este álbum.");
        }

        renderizarDetalleAlbum(album);

    } catch (error) {
        console.error("Error al obtener detalle:", error);
        limpiarElemento(contenedorDetalle);

        const alerta = document.createElement("div");
        alerta.className = "alert alert-danger mb-0";
        alerta.textContent = error.message;
        contenedorDetalle.appendChild(alerta);
    }
};

// ==========================================
// 5. CONSTRUCCIÓN DINÁMICA DEL DOM
// ==========================================
const renderizarListadoAlbumes = (items) => {
    items.forEach((elemento) => {
        const info = elemento.data;
        if (!info || !info.uri) return;

        // Extraemos el ID limpio desde "spotify:album:6x0nmCMjHeuN3rYBmI5Bor"
        const albumId = info.uri.split(":")[2];
        const nombreAlbum = info.name || "Álbum sin título";
        const nombreArtista = info.artists?.items?.[0]?.profile?.name || "Artista desconocido";
        const anio = info.date?.year || "";
        const portada = info.coverArt?.sources?.[0]?.url || "https://via.placeholder.com/300?text=Sin+Portada";

        const col = document.createElement("div");
        col.className = "col-sm-6 col-md-4";

        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm border-0";
        card.style.cursor = "pointer";

        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = portada;
        img.alt = nombreAlbum;
        img.style.height = "200px";
        img.style.objectFit = "cover";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column justify-content-between";

        const titulo = document.createElement("h6");
        titulo.className = "card-title fw-bold mb-1";
        titulo.textContent = nombreAlbum;

        const subtitulo = document.createElement("p");
        subtitulo.className = "card-text text-muted small mb-0";
        subtitulo.textContent = anio ? `${nombreArtista} (${anio})` : nombreArtista;

        cardBody.appendChild(titulo);
        cardBody.appendChild(subtitulo);

        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);

        // Evento click para disparar el segundo endpoint sin recargar la página
        card.addEventListener("click", () => {
            obtenerDetalleAlbum(albumId, nombreAlbum);
        });

        contenedorAlbumes.appendChild(col);
    });
};

const renderizarDetalleAlbum = (album) => {
    limpiarElemento(contenedorDetalle);

    // Portada del álbum
    const portadaUrl = album.coverArt?.sources?.[0]?.url;
    if (portadaUrl) {
        const img = document.createElement("img");
        img.src = portadaUrl;
        img.alt = album.name;
        img.className = "img-fluid rounded mb-3 mx-auto d-block shadow-sm";
        img.style.maxHeight = "250px";
        contenedorDetalle.appendChild(img);
    }

    // Título del álbum
    const titulo = document.createElement("h4");
    titulo.className = "fw-bold text-success mb-1";
    titulo.textContent = album.name;
    contenedorDetalle.appendChild(titulo);

    // Artista
    const artista = document.createElement("h6");
    artista.className = "text-muted mb-3";
    artista.textContent = album.artists?.items?.[0]?.profile?.name || "Artista";
    contenedorDetalle.appendChild(artista);

    // Lista de metadatos
    const ulInfo = document.createElement("ul");
    ulInfo.className = "list-group list-group-flush small mb-3";

    const fechaFormateada = album.date?.isoString ? album.date.isoString.split("T")[0] : "No disponible";
    const totalCanciones = album.tracks?.totalCount ?? "N/A";
    const disquera = album.label || "No especificada";

    const datosLista = [
        { etiqueta: "Fecha de lanzamiento", valor: fechaFormateada },
        { etiqueta: "Total de canciones", valor: `${totalCanciones} pistas` },
        { etiqueta: "Sello discográfico", valor: disquera },
        { etiqueta: "Tipo", valor: album.type || "ALBUM" }
    ];

    datosLista.forEach((dato) => {
        const li = document.createElement("li");
        li.className = "list-group-item px-0 py-1";
        const strong = document.createElement("strong");
        strong.textContent = `${dato.etiqueta}: `;
        li.appendChild(strong);
        li.appendChild(document.createTextNode(dato.valor));
        ulInfo.appendChild(li);
    });

    contenedorDetalle.appendChild(ulInfo);

    // Enlace a Spotify si existe
    const urlSpotify = album.sharingInfo?.shareUrl;
    if (urlSpotify) {
        const btnSpotify = document.createElement("a");
        btnSpotify.href = urlSpotify;
        btnSpotify.target = "_blank";
        btnSpotify.rel = "noopener noreferrer";
        btnSpotify.className = "btn btn-outline-success btn-sm w-100";
        btnSpotify.textContent = "Abrir en Spotify";
        contenedorDetalle.appendChild(btnSpotify);
    }
};

// ==========================================
// 6. UTILIDADES Y EVENTOS INICIALES
// ==========================================
const mostrarMensajeEstado = (mensaje, tipo, mostrarSpinner) => {
    limpiarElemento(estadoMensaje);

    const alerta = document.createElement("div");
    alerta.className = `alert alert-${tipo} d-inline-flex align-items-center gap-2`;

    if (mostrarSpinner) {
        const spinner = document.createElement("div");
        spinner.className = "spinner-border spinner-border-sm";
        spinner.setAttribute("role", "status");
        alerta.appendChild(spinner);
    }

    const span = document.createElement("span");
    span.textContent = mensaje;
    alerta.appendChild(span);

    estadoMensaje.appendChild(alerta);
};

const limpiarElemento = (elemento) => {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
};

// Evento submit del buscador
formBusqueda.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const termino = inputBusqueda.value.trim();
    if (termino !== "") {
        buscarAlbumes(termino);
    }
});

// Carga inicial al abrir la página
document.addEventListener("DOMContentLoaded", () => {
    buscarAlbumes(inputBusqueda.value.trim());
});