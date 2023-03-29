let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let session =
  JSON.parse(localStorage.getItem("session")) || [];


document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito()
    actualizarCarrito()
    bienvenido()
})

function mostrarCarrito(){
  if (carrito.length >=1) {
    document.getElementById("numerito").style = " ";
  }
}
  
  function actualizarCarrito(){
      window.document.getElementById("numerito").innerText = carrito.length;
  }
  
  function bienvenido(){
    const loginButton = document.getElementById("loginButton");
    const bienvenido = document.getElementById("bienvenido");
    console.log(session);
    
    if (session) {
      loginButton.innerText = "Logout";
      bienvenido.innerText = `Bienvenido: ${session.nombre}`;
    }
  }


function logout() {
  localStorage.removeItem("session");
  localStorage.removeItem("carrito");
}