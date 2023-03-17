let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
let session =
  JSON.parse(localStorage.getItem("session")) || {};
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function User(nombre, apellidos, email, password) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.email = email;
  this.password = password;

  this.login = function () {
    let i = 0;

    while (i < usersArray.length) {
      if (
        usersArray[i].email === this.email &&
        usersArray[i].password === this.password
      ) {
        return usersArray[i];
      } else {
        i++;
      }
    }

    return false;
  };

  this.registro = function () {
    usersArray.push(this);
    localStorage.setItem("usersArray", JSON.stringify(usersArray));

    console.table(JSON.parse(localStorage.getItem("usersArray")));
  };

  this.logout = function () {
    session = {}
    localStorage.removeItem("session");
    localStorage.removeItem("carrito");

  };
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
  actualizarCarrito();
  bienvenido();
});

function registroOnclick() {
  const inputNombre = document.getElementById("inputNombre");
  const inputApellidos = document.getElementById("inputApellidos");
  const inputEmail = document.getElementById("inputEmail");
  const inputPassword = document.getElementById("inputPassword");
  const mostrarAlertaErrorRegistro = document.getElementById(
    "alertaErrorRegistro"
  );
  const mostrarAlertaExitoRegistro = document.getElementById(
    "alertaExitoRegistro"
  );

  if (
    !inputNombre.value ||
    !inputApellidos.value ||
    !inputEmail.value ||
    !inputPassword.value
  ) {
    mostrarAlertaErrorRegistro.classList.remove("none");
    setTimeout(() => {
      mostrarAlertaErrorRegistro.classList.add("none");
    }, 5000);
    return;
  }

  const user = new User(
    inputNombre.value,
    inputApellidos.value,
    inputEmail.value,
    inputPassword.value
  );
  user.registro(user);

  mostrarAlertaExitoRegistro.classList.remove("none");
  setTimeout(() => {
    mostrarAlertaExitoRegistro.classList.add("none");
  }, 5000);
}

function loginOnclick() {
  const loginButton = document.getElementById("loginButton");
  const bienvenido = document.getElementById("bienvenido");
  const mostrarAlertaError = document.getElementById("alertaError");
  const mostrarAlertaExito = document.getElementById("alertaExito");
  const usuarioInput = document.getElementById("usuario");
  const passwordInput = document.getElementById("password");

  const user = new User("", "", usuarioInput.value, passwordInput.value);
  const usuarioLogueado = user.login();

  if (usuarioLogueado) {
    mostrarAlerta = mostrarAlertaExito;

    loginButton.innerText = "Logout";
    bienvenido.innerText = `Bienvenido: ${this.nombre}`;

    session = usuarioLogueado;
    localStorage.setItem(
      "session",
      JSON.stringify(session)
    );

    console.table(JSON.parse(localStorage.getItem("session")));

    window.location.href = "http://127.0.0.1:5501/index.html";
  } else {
    let mostrarAlerta = mostrarAlertaError;
    mostrarAlerta.classList.remove("none");
    setTimeout(() => {
      mostrarAlerta.classList.add("none");
    }, 5000);
  }
}
function logoutOnclick() {
  
  const user = new user (session.nombre,session.apellidos, session.email,session.password)
  user.logout()
  
}

function bienvenido() {
  const loginButton = document.getElementById("loginButton");
  const bienvenido = document.getElementById("bienvenido");
  console.table(session);
  console.table(usersArray);

  if (session.length >= 1) {
    loginButton.innerText = "Logout";
    bienvenido.innerText = `Bienvenido: ${session.nombre}`;
  }
}

function mostrarCarrito() {
  if (carrito.length >= 1) {
    document.getElementById("numerito").style = " ";
  }
}

function actualizarCarrito() {
  window.document.getElementById("numerito").innerText = carrito.length;
}

function vaciarUsersArray() {
  localStorage.removeItem("usersArray");
  localStorage.removeItem("session");
  localStorage.removeItem("carrito");
}
