// =====================================================
// EJEMPLO 3 (guia): Recorriendo un formulario con DOM
// EJERCICIO 1: Validacion del formulario + tabla en modal
// =====================================================

// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aqui se esta utilizando el atributo name de cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];
const buttonContar = document.forms["frmRegistro"].elements["btnContar"];

// CREANDO MODAL CON BOOTSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

// -----------------------------------------------------
// Recorrer el formulario (parte practica de la guia)
// -----------------------------------------------------
const recorrerFormulario = function () {
  let totText = 0;
  let totRadio = 0;
  let totCheck = 0;
  let totDate = 0;
  let totSelect = 0;
  let totFile = 0;
  let totPass = 0;
  let totEmail = 0;

  // Recorriendo elementos del formulario
  let elementos = formulario.elements;
  let totalElementos = elementos.length;

  for (let index = 0; index < totalElementos; index++) {
    // Accediendo a cada hijo del formulario
    let elemento = elementos[index];

    // verificando el tipo de control en el formulario
    let tipoElemento = elemento.type;
    // verificando el tipo de nodo
    let tipoNode = elemento.nodeName;

    // Contabilizando el total de INPUT TYPE = TEXT
    if (tipoElemento == "text" && tipoNode == "INPUT") {
      console.log(elemento);
      totText++;
    }
    // Contabilizando el total de INPUT TYPE = PASSWORD
    else if (tipoElemento == "password" && tipoNode == "INPUT") {
      console.log(elemento);
      totPass++;
    }
    // Contabilizando el total de INPUT TYPE = EMAIL
    else if (tipoElemento == "email" && tipoNode == "INPUT") {
      console.log(elemento);
      totEmail++;
    }
    // Contabilizando el total de INPUT TYPE = RADIO
    else if (tipoElemento == "radio" && tipoNode == "INPUT") {
      console.log(elemento);
      totRadio++;
    }
    // Contabilizando el total de INPUT TYPE = CHECKBOX
    else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
      console.log(elemento);
      totCheck++;
    }
    // Contabilizando el total de INPUT TYPE = FILE
    else if (tipoElemento == "file" && tipoNode == "INPUT") {
      console.log(elemento);
      totFile++;
    }
    // Contabilizando el total de INPUT TYPE = DATE
    else if (tipoElemento == "date" && tipoNode == "INPUT") {
      console.log(elemento);
      totDate++;
    }
    // Contabilizando el total de SELECT
    else if (tipoNode == "SELECT") {
      console.log(elemento);
      totSelect++;
    }
  }

  // Mostrando el resultado en el modal.
  // (La guia usa innerHTML aqui; en el ejercicio 1 se prohibe, asi que
  //  se construye con nodos: createElement / createTextNode / appendChild)
  limpiarNodo(bodyModal);
  const lineas = [
    `Total de input[type="text"] = ${totText}`,
    `Total de input[type="password"] = ${totPass}`,
    `Total de input[type="radio"] = ${totRadio}`,
    `Total de input[type="checkbox"] = ${totCheck}`,
    `Total de input[type="date"] = ${totDate}`,
    `Total de input[type="email"] = ${totEmail}`,
    `Total de input[type="file"] = ${totFile}`,
    `Total de select = ${totSelect}`,
  ];
  for (const linea of lineas) {
    bodyModal.appendChild(document.createTextNode(linea));
    bodyModal.appendChild(document.createElement("br"));
  }

  //Funcion que permite mostrar el modal de Bootstrap
  //Esta funcion es definida por Bootstrap
  modal.show();
};

// -----------------------------------------------------
// Utilidades DOM (sin innerHTML)
// -----------------------------------------------------

// Elimina todos los hijos de un nodo usando removeChild
const limpiarNodo = function (nodo) {
  while (nodo.firstChild) {
    nodo.removeChild(nodo.firstChild);
  }
};

// Marca un campo como invalido y le agrega un mensaje (nodo creado con DOM)
const marcarError = function (campo, mensaje) {
  campo.classList.add("is-invalid");
  const feedback = document.createElement("div");
  feedback.setAttribute("class", "invalid-feedback d-block msg-error");
  feedback.textContent = mensaje;
  // el mensaje se inserta justo despues del campo
  campo.parentNode.insertBefore(feedback, campo.nextSibling);
};

// Para grupos (checkbox / radio) el mensaje va al final de la columna
const marcarErrorGrupo = function (campos, contenedor, mensaje) {
  for (const c of campos) c.classList.add("is-invalid");
  const feedback = document.createElement("div");
  feedback.setAttribute("class", "text-danger small mb-3 msg-error");
  feedback.textContent = mensaje;
  contenedor.appendChild(feedback);
};

const limpiarErrores = function () {
  const mensajes = document.querySelectorAll(".msg-error");
  for (const m of mensajes) m.parentNode.removeChild(m);
  const invalidos = document.querySelectorAll(".is-invalid");
  for (const i of invalidos) i.classList.remove("is-invalid");
};

// -----------------------------------------------------
// EJERCICIO 1: validaciones
// -----------------------------------------------------
// Expresion regular para el correo electronico
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

const validarFormulario = function () {
  limpiarErrores();
  let valido = true;

  const nombre = document.getElementById("idNombre");
  const apellidos = document.getElementById("idApellidos");
  const fechaNac = document.getElementById("idFechaNac");
  const correo = document.getElementById("idCorreo");
  const pass = document.getElementById("idPassword");
  const passRep = document.getElementById("idPasswordRepetir");
  const pais = document.getElementById("idCmPais");

  // a. Campos de texto no vacios
  const obligatorios = [
    [nombre, "Ingrese sus nombres"],
    [apellidos, "Ingrese sus apellidos"],
    [fechaNac, "Seleccione su fecha de nacimiento"],
    [correo, "Ingrese su correo electrónico"],
    [pass, "Ingrese una contraseña"],
    [passRep, "Repita la contraseña"],
  ];
  for (const [campo, mensaje] of obligatorios) {
    if (campo.value.trim() === "") {
      marcarError(campo, mensaje);
      valido = false;
    }
  }

  // b. La fecha de nacimiento no puede superar la fecha actual
  if (fechaNac.value !== "") {
    // Se compara como texto ISO (aaaa-mm-dd) para evitar problemas de zona horaria
    const hoy = new Date();
    const hoyISO = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;
    if (fechaNac.value > hoyISO) {
      marcarError(fechaNac, "La fecha de nacimiento no puede ser mayor a la fecha actual");
      valido = false;
    }
  }

  // c. Correo con expresion regular
  if (correo.value.trim() !== "" && !regexCorreo.test(correo.value.trim())) {
    marcarError(correo, "El formato del correo no es válido (ej. usuario@dominio.com)");
    valido = false;
  }

  // d. Contraseña y repetir contraseña iguales
  if (pass.value !== "" && passRep.value !== "" && pass.value !== passRep.value) {
    marcarError(passRep, "Las contraseñas no coinciden");
    valido = false;
  }

  // e. Al menos un interes seleccionado
  const checks = formulario.querySelectorAll('input[type="checkbox"]');
  let algunInteres = false;
  for (const c of checks) {
    if (c.checked) algunInteres = true;
  }
  if (!algunInteres) {
    marcarErrorGrupo(
      checks,
      checks[0].closest(".col"),
      "Seleccione al menos un interés"
    );
    valido = false;
  }

  // f. Una carrera seleccionada
  const radios = formulario.querySelectorAll('input[type="radio"]');
  let algunaCarrera = false;
  for (const r of radios) {
    if (r.checked) algunaCarrera = true;
  }
  if (!algunaCarrera) {
    marcarErrorGrupo(radios, radios[0].closest(".col"), "Seleccione una carrera");
    valido = false;
  }

  // g. Pais de origen seleccionado
  if (pais.value === "") {
    marcarError(pais, "Seleccione un país de origen");
    valido = false;
  }

  return valido;
};

// -----------------------------------------------------
// Tabla con la informacion capturada (solo funciones DOM)
// -----------------------------------------------------
const crearFila = function (campo, valor) {
  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.setAttribute("scope", "row");
  th.appendChild(document.createTextNode(campo));

  const td = document.createElement("td");
  td.appendChild(document.createTextNode(valor));

  tr.appendChild(th);
  tr.appendChild(td);
  return tr;
};

const mostrarResumen = function () {
  const pais = document.getElementById("idCmPais");
  const archivo = document.getElementById("idArchivo");

  // Intereses seleccionados: se toma el texto de su label
  const intereses = [];
  for (const c of formulario.querySelectorAll('input[type="checkbox"]')) {
    if (c.checked) {
      intereses.push(c.nextElementSibling.textContent);
    }
  }

  // Carrera seleccionada
  let carrera = "";
  for (const r of formulario.querySelectorAll('input[type="radio"]')) {
    if (r.checked) carrera = r.nextElementSibling.textContent;
  }

  // La contraseña no se muestra en claro
  const passOculta = "•".repeat(document.getElementById("idPassword").value.length);

  const datos = [
    ["Nombres", document.getElementById("idNombre").value.trim()],
    ["Apellidos", document.getElementById("idApellidos").value.trim()],
    ["Fecha de nacimiento", document.getElementById("idFechaNac").value],
    ["Correo electrónico", document.getElementById("idCorreo").value.trim()],
    ["Contraseña", passOculta],
    ["Intereses", intereses.join(", ")],
    ["Carrera", carrera],
    ["País de origen", pais.options[pais.selectedIndex].text],
    ["Avatar", archivo.files.length > 0 ? archivo.files[0].name : "(sin archivo)"],
  ];

  // Construyendo la tabla con createElement / appendChild
  const tabla = document.createElement("table");
  tabla.setAttribute("class", "table table-striped table-bordered");

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  for (const titulo of ["Campo", "Valor"]) {
    const th = document.createElement("th");
    th.appendChild(document.createTextNode(titulo));
    trHead.appendChild(th);
  }
  thead.appendChild(trHead);
  tabla.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (const [campo, valor] of datos) {
    tbody.appendChild(crearFila(campo, valor));
  }
  tabla.appendChild(tbody);

  limpiarNodo(bodyModal);
  bodyModal.appendChild(tabla);
  modal.show();
};

// -----------------------------------------------------
// Eventos de los botones
// -----------------------------------------------------
// Ejemplo 3 de la guia
buttonContar.onclick = () => {
  recorrerFormulario();
};

// Ejercicio 1: validar y mostrar el resumen
button.onclick = () => {
  if (validarFormulario()) {
    mostrarResumen();
  }
};
