// Obtengo el formulario y los campos
var form = document.getElementById("form-suscripcion");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var pais = document.getElementById("pais");
var acepto = document.getElementById("acepto")


// Función para enviar los datos del formulario a un servidor
function enviarDatos(nombre, apellido, email, pais) {
  // Simulamos una petición AJAX con un setTimeout
  setTimeout(function () {
    // Mostramos un mensaje de éxito en la consola
    console.log(
      "Datos enviados correctamente: " +
        nombre +
        ", " +
        apellido +
        ", " +
        email +
        ", " +
        pais
    );
  }, 1000);
}

// Función para activar el menú
function activarMenu() {
  // Obtenemos los elementos del menú
  let menu = document.getElementById("navbarNav");
  let items = menu.querySelectorAll(".nav-link");
  // Añadimos un evento de click a cada elemento
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (event) {
      // Evitamos el comportamiento por defecto del enlace
      event.preventDefault();
      // Obtenemos el atributo href del elemento
      var href = this.getAttribute("href");
      // Obtenemos el elemento correspondiente al href
      var seccion = document.querySelector(href);
      // Obtenemos la posición de la sección
      var posicion = seccion.offsetTop;
      // Desplazamos suavemente la página hasta la sección
      window.scrollTo({
        top: posicion,
        behavior: "smooth",
      });
    });
  }
  // Cambiamos la clase del elemento activo
  var activo = menu.querySelector(".active");
  activo.classList.remove("active");
  this.classList.add("active");

  // Llamado función para activar el menú
  activarMenu();
}

// Agrego un evento al formulario
form.addEventListener("submit", function (event) {
  // Evito que se envíe el formulario por defecto
  event.preventDefault();
  // Verificacion formulario es válido
  if (form.checkValidity() === false) {
    // Si no es válido, muestro los mensajes de error
    event.stopPropagation();
  } else {
    // Si es válido, muestro un mensaje de éxito
    alert("Gracias por suscribirte. Te enviaremos el ebook a tu email.");
  }
  // Agrego la clase was-validated al formulario
  form.classList.add("was-validated");
});

