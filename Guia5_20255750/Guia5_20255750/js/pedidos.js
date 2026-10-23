// Arreglo que almacena los pedidos como objetos
const pedidos = [];
let precioMaximoActivo = null;

// Accedemos a los elementos HTML mediante el DOM
const formulario = document.querySelector("#formPedido");
const tablaPedidos = document.querySelector("#tablaPedidos");
const mensaje = document.querySelector("#mensaje");
const totalUnidades = document.querySelector("#totalUnidades");
const montoTotal = document.querySelector("#montoTotal");

// Mostramos mensajes al usuario
function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = `alert alert-${tipo} mt-3`;
}

// Validamos los datos antes de registrar el pedido
function validarPedido(producto, precio, cantidad) {
    if (producto === "") return "Ingrese el nombre del producto.";
    if (!Number.isFinite(precio) || precio <= 0) return "El precio debe ser mayor que cero.";
    if (!Number.isSafeInteger(cantidad) || cantidad <= 0) return "La cantidad debe ser un número entero positivo.";
    return null;
}

// Calculamos el subtotal de cada pedido
function calcularSubtotal(pedido) {
    return pedido.precio * pedido.cantidad;
}

// Obtenemos los pedidos visibles sin modificar el arreglo original
function obtenerPedidosVisibles() {
    return precioMaximoActivo === null
        ? pedidos
        : pedidos.filter(pedido => pedido.precio <= precioMaximoActivo);
}

// Calculamos los indicadores de todos los pedidos
function calcularTotales() {
    return pedidos.reduce((totales, pedido) => {
        totales.unidades += pedido.cantidad;
        totales.monto += calcularSubtotal(pedido);
        return totales;
    }, { unidades: 0, monto: 0 });
}

// Formateamos los valores como dinero
function formatoDinero(valor) {
    return `$${valor.toFixed(2)}`;
}

// Actualizamos la tabla utilizando map()
function actualizarTabla() {
    const visibles = obtenerPedidosVisibles();
    tablaPedidos.replaceChildren();

    if (visibles.length === 0) {
        const fila = document.createElement("tr");
        const celda = document.createElement("td");
        celda.colSpan = 4;
        celda.className = "text-center text-muted py-3";
        celda.textContent = "No hay pedidos para mostrar.";
        fila.appendChild(celda);
        tablaPedidos.appendChild(fila);
        return;
    }

    const filas = visibles.map(pedido => {
        const fila = document.createElement("tr");
        const valores = [
            pedido.producto,
            formatoDinero(pedido.precio),
            String(pedido.cantidad),
            formatoDinero(calcularSubtotal(pedido))
        ];
        valores.map(valor => {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
            return celda;
        });
        return fila;
    });
    tablaPedidos.append(...filas);
}

// Actualizamos los totales y la tabla sin recargar la página
function actualizarVista() {
    actualizarTabla();
    const totales = calcularTotales();
    totalUnidades.textContent = totales.unidades;
    montoTotal.textContent = formatoDinero(totales.monto);
}

// Registramos un pedido nuevo
function agregarPedido(evento) {
    evento.preventDefault();
    const producto = document.querySelector("#producto").value.trim();
    const precioTexto = document.querySelector("#precio").value.trim();
    const cantidadTexto = document.querySelector("#cantidad").value.trim();
    const precio = precioTexto === "" ? NaN : Number(precioTexto);
    const cantidad = cantidadTexto === "" ? NaN : Number(cantidadTexto);
    const error = validarPedido(producto, precio, cantidad);

    if (error !== null) {
        mostrarMensaje(error, "danger");
        return;
    }

    pedidos.push({ producto, precio, cantidad });
    formulario.reset();
    actualizarVista();
    mostrarMensaje("Pedido agregado correctamente.", "success");
}

// Filtramos por precio máximo sin cambiar pedidos
function filtrarProductos() {
    const valor = document.querySelector("#precioMaximo").value.trim();
    const maximo = Number(valor);
    if (valor === "" || !Number.isFinite(maximo) || maximo < 0) {
        mostrarMensaje("Ingrese un precio máximo válido, mayor o igual a cero.", "danger");
        return;
    }
    precioMaximoActivo = maximo;
    actualizarVista();
    mostrarMensaje("Filtro aplicado. Los totales generales no cambian.", "info");
}

// Volvemos a mostrar todos los pedidos
function mostrarTodos() {
    precioMaximoActivo = null;
    document.querySelector("#precioMaximo").value = "";
    actualizarVista();
    mostrarMensaje("Se muestran todos los pedidos.", "info");
}

// Vaciamos el arreglo y actualizamos la interfaz
function limpiarPedidos() {
    pedidos.length = 0;
    precioMaximoActivo = null;
    document.querySelector("#precioMaximo").value = "";
    actualizarVista();
    mostrarMensaje("Todos los pedidos fueron eliminados.", "info");
}

// Asociamos los eventos a los botones
formulario.addEventListener("submit", agregarPedido);
document.querySelector("#btnFiltrar").addEventListener("click", filtrarProductos);
document.querySelector("#btnMostrarTodos").addEventListener("click", mostrarTodos);
document.querySelector("#btnLimpiar").addEventListener("click", limpiarPedidos);

// Mostramos el estado inicial
actualizarVista();
