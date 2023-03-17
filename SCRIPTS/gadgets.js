let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let usersLogueadosArray =
  JSON.parse(localStorage.getItem("usersLogueadosArray")) || [];


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
    console.log(usersLogueadosArray);
    
    if (usersLogueadosArray.length>=1) {
      loginButton.innerText = "Logout";
      bienvenido.innerText = `Bienvenido: ${usersLogueadosArray[0].nombre}`;
    }
  }


function logout() {
  localStorage.removeItem("usersLogueadosArray");
  localStorage.removeItem("carrito");
}