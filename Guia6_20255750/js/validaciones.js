// Expresiones regulares (RegExp) por campo
const reglas = {
  carnet: /^[A-Za-z]{2}\d{3}$/,
  nombre: /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:[ '-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/,
  dui: /^\d{8}-\d$/,
  nit: /^\d{4}-\d{6}-\d{3}-\d$/,
  // dd/mm/aaaa (también acepta - o .), mes 01-12, día 01-31
  fecha: /^(0[1-9]|[12]\d|3[01])[\/\-.](0[1-9]|1[0-2])[\/\-.](19|20)\d{2}$/,
  correo: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/,
  edad: /^\d{1,3}$/,
};

// La regex no sabe que 31/02 no existe: verificación extra con Date
const fechaReal = (v) => {
  const [d, m, a] = v.split(/[\/\-.]/).map(Number);
  const f = new Date(a, m - 1, d);
  return f.getFullYear() === a && f.getMonth() === m - 1 && f.getDate() === d && f <= new Date();
};

const valida = (id, valor) => {
  if (!reglas[id].test(valor)) return false;
  if (id === "fecha") return fechaReal(valor);
  if (id === "edad") return Number(valor) <= 120;
  return true;
};

const marcar = (input) => {
  const ok = valida(input.id, input.value.trim());
  input.classList.toggle("is-valid", ok);
  input.classList.toggle("is-invalid", !ok);
  return ok;
};

// Validación en tiempo real y al enviar
Object.keys(reglas).forEach((id) =>
  document.getElementById(id).addEventListener("input", (e) => marcar(e.target))
);

document.getElementById("idFormEstudiante").addEventListener("submit", (e) => {
  e.preventDefault();
  const todos = Object.keys(reglas).map((id) => marcar(document.getElementById(id)));
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = todos.every(Boolean)
    ? '<div class="alert alert-success">Todos los datos son válidos.</div>'
    : '<div class="alert alert-danger">Hay campos con formato incorrecto.</div>';
});
