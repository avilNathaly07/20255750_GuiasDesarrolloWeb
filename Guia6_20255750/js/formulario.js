/* Ejercicios complementarios 1 y 2:
   - Botones Editar / Eliminar funcionales
   - Persistencia con LocalStorage */
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const inputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idCmbPais");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");

const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAddPais");

const toast = new bootstrap.Toast(document.getElementById("idNotificacion"));
const mensaje = document.getElementById("idMensaje");
const idModal = document.getElementById("idModal");

const KEY_PACIENTES = "pacientes";
const KEY_PAISES = "paises";

// ---- Persistencia ----
const cargar = (key, defecto) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? defecto;
  } catch (e) {
    return defecto;
  }
};
const guardar = (key, valor) => localStorage.setItem(key, JSON.stringify(valor));

let arrayPaciente = cargar(KEY_PACIENTES, []);
let paisesExtra = cargar(KEY_PAISES, []);
let indiceEditando = -1; // -1 = no se está editando

const notificar = (texto, tipo = "success") => {
  mensaje.innerHTML = texto;
  document.getElementById("idNotificacion").className = `toast text-bg-${tipo}`;
  toast.show();
};

// Restaurar países agregados anteriormente
const agregarOption = (nombre) => {
  const option = document.createElement("option");
  option.textContent = nombre;
  option.value = cmbPais.children.length;
  cmbPais.appendChild(option);
};
paisesExtra.forEach(agregarOption);

const limpiarForm = () => {
  inputNombre.value = "";
  inputApellido.value = "";
  inputFechaNacimiento.value = "";
  inputRdMasculino.checked = false;
  inputRdFemenino.checked = false;
  cmbPais.value = 0;
  inputDireccion.value = "";
  inputNombrePais.value = "";
  indiceEditando = -1;
  buttonAgregarPaciente.innerHTML = '<i class="bi bi-person-plus-fill"></i> Guardar Datos';
  inputNombre.focus();
};

const addPaciente = () => {
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const fecha = inputFechaNacimiento.value;
  const sexo = inputRdMasculino.checked ? "Hombre" : inputRdFemenino.checked ? "Mujer" : "";
  const pais = cmbPais.value;
  const labelPais = cmbPais.options[cmbPais.selectedIndex].text;
  const direccion = inputDireccion.value.trim();

  if (nombre && apellido && fecha && sexo && pais != 0 && direccion) {
    const registro = [nombre, apellido, fecha, sexo, labelPais, direccion];
    if (indiceEditando >= 0) {
      arrayPaciente[indiceEditando] = registro;
      notificar("Paciente actualizado correctamente");
    } else {
      arrayPaciente.push(registro);
      notificar("Se ha registrado un nuevo paciente");
    }
    guardar(KEY_PACIENTES, arrayPaciente);
    limpiarForm();
    imprimirPacientes();
  } else {
    notificar("Faltan campos por completar", "danger");
  }
};

// ---- Editar / Eliminar ----
const editarPaciente = (i) => {
  const [nombre, apellido, fecha, sexo, labelPais, direccion] = arrayPaciente[i];
  inputNombre.value = nombre;
  inputApellido.value = apellido;
  inputFechaNacimiento.value = fecha;
  inputRdMasculino.checked = sexo === "Hombre";
  inputRdFemenino.checked = sexo === "Mujer";
  const opcion = [...cmbPais.options].find((o) => o.text === labelPais);
  cmbPais.value = opcion ? opcion.value : 0;
  inputDireccion.value = direccion;
  indiceEditando = i;
  buttonAgregarPaciente.innerHTML = '<i class="bi bi-save"></i> Actualizar paciente';
  window.scrollTo({ top: 0, behavior: "smooth" });
  inputNombre.focus();
};

const eliminarPaciente = (i) => {
  const p = arrayPaciente[i];
  if (confirm(`¿Eliminar al paciente ${p[0]} ${p[1]}?`)) {
    arrayPaciente.splice(i, 1);
    guardar(KEY_PACIENTES, arrayPaciente);
    if (indiceEditando === i) limpiarForm();
    imprimirPacientes();
    notificar("Paciente eliminado", "warning");
  }
};

function imprimirFilas() {
  return arrayPaciente
    .map(
      (e, i) => `<tr>
    <td scope="row" class="text-center fw-bold">${i + 1}</td>
    <td>${e[0]}</td><td>${e[1]}</td><td>${e[2]}</td><td>${e[3]}</td><td>${e[4]}</td><td>${e[5]}</td>
    <td class="text-center">
      <button type="button" class="btn btn-primary" data-accion="editar" data-i="${i}" title="Editar">
        <i class="bi bi-pencil-square"></i></button>
      <button type="button" class="btn btn-danger" data-accion="eliminar" data-i="${i}" title="Eliminar">
        <i class="bi bi-trash3-fill"></i></button>
    </td></tr>`
    )
    .join("");
}

const imprimirPacientes = () => {
  const cont = document.getElementById("idTablaPacientes");
  if (arrayPaciente.length === 0) {
    cont.innerHTML = "Ninguno";
    return;
  }
  cont.innerHTML = `<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered">
    <thead><tr>
      <th class="text-center" style="width:5%">#</th><th class="text-center" style="width:15%">Nombre</th>
      <th class="text-center" style="width:15%">Apellido</th><th class="text-center" style="width:10%">Fecha nacimiento</th>
      <th class="text-center" style="width:10%">Sexo</th><th class="text-center" style="width:10%">Pais</th>
      <th class="text-center" style="width:25%">Dirección</th><th class="text-center" style="width:10%">Opciones</th>
    </tr></thead>
    <tbody>${imprimirFilas()}</tbody>
  </table></div>`;
};

// Delegación de eventos: un solo listener para todos los botones de la tabla
document.getElementById("idTablaPacientes").addEventListener("click", (ev) => {
  const btn = ev.target.closest("button[data-accion]");
  if (!btn) return;
  const i = Number(btn.dataset.i);
  btn.dataset.accion === "editar" ? editarPaciente(i) : eliminarPaciente(i);
});

const addPais = () => {
  const paisNew = inputNombrePais.value.trim();
  if (paisNew) {
    agregarOption(paisNew);
    paisesExtra.push(paisNew);
    guardar(KEY_PAISES, paisesExtra);
    notificar("Pais agregado correctamente");
  } else {
    notificar("Faltan campos por completar", "danger");
  }
};

buttonLimpiarPaciente.onclick = limpiarForm;
buttonAgregarPaciente.onclick = addPaciente;
buttonMostrarPaciente.onclick = imprimirPacientes;
buttonAgregarPais.onclick = addPais;
idModal.addEventListener("shown.bs.modal", () => {
  inputNombrePais.value = "";
  inputNombrePais.focus();
});

limpiarForm();
imprimirPacientes(); // muestra lo guardado en LocalStorage al cargar
