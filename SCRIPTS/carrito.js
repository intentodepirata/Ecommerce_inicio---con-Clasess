let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let session =
  JSON.parse(localStorage.getItem("session")) || [];

  document.addEventListener("DOMContentLoaded", () => {
   
   pintarCarritoFinal()
   sliderCards3()
   eliminarDelCarrito() 
   agregarCarrito()
   sumarTotal()
})

function sumarTotal(){
console.log(window.document.getElementById('precioTotal').innerHTML) 
window.document.getElementById('precioTotal').innerHTML =`${carrito.length * 399.50}<span class="h3">€</span>`
} 

function pintarCarritoFinal(){

   window.document.querySelector(".total-unidades").innerHTML = `(${carrito.length})`;
  console.log(carrito.length)



  
    for( item of carrito){
      document.getElementById('carritoFinal').innerHTML += `          <div class="card-carrito">
      <img  src="../assets/images/A31.webp" alt="A31"/>
      
      <div class="card-resumen">
        <h4 class="no-margin">Samsung Galaxy A31 - LCD Display Replacement original  </h4>
  
        <div class="precio">
          399,50 <span>€</span>
        </div>
  
      </div>
  
      <div class="card-cantidad">
        <span class="item-menos">-</span>
        <span class="item-number">1</span>
        <span class="item-mas">+</span>
      </div>
  
        <div>
          <button class="btn claro">Eliminar</button>
        </div>
    </div>`
    }
 
  

}

function agregarCarrito() {
  const btnComprar = document.querySelectorAll('.comprar');
  btnComprar.forEach(elemento => {
    elemento.addEventListener('click', () => {
      if (!session) {
        alert("Para comprar, Debes iniciar sesion");
        window.location.href = "/login.html";
      } else {
    
        carrito.unshift('item')
        localStorage.setItem("carrito", JSON.stringify(carrito));
        document.getElementById('carritoFinal').innerHTML += `          <div class="card-carrito">
        <img  src="../assets/images/A31.webp" alt="A31"/>
        
        <div class="card-resumen">
          <h4 class="no-margin">Samsung Galaxy A31 - LCD Display Replacement original  </h4>
    
          <div class="precio">
            399,50 <span>€</span>
          </div>
    
        </div>
    
        <div class="card-cantidad">
          <span class="item-menos">-</span>
          <span class="item-number">1</span>
          <span class="item-mas">+</span>
        </div>
    
          <div>
            <button class="btn claro">Eliminar</button>
          </div>
      </div>`
      location.reload()
      }

    })
  
  })


  
}
function eliminarDelCarrito() {
  const elementosClaros = document.querySelectorAll('.claro');

  elementosClaros.forEach(elemento => {
    elemento.addEventListener('click', () => {
      carrito.splice(0, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito)); 
    
      location.reload();
    });
   
  });
  
}

function sliderCards3(){
let slider3 = null;
let isDown = false;
let startX;
let scrollLeft;
try {
  slider3 = document.querySelector(".cards3");
} catch (error) {
  console.error("No se encontró el elemento con clase .cards3");
}

if (slider3) {
  slider3.addEventListener("mousedown", (e) => {
    isDown = true;

    startX = e.pageX - slider3.offsetLeft;
    scrollLeft = slider3.scrollLeft;
  });

  slider3.addEventListener("mouseleave", (_) => {
    isDown = false;
  });

  slider3.addEventListener("mouseup", (_) => {
    isDown = false;
  });

  slider3.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider3.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider3.scrollLeft = scrollLeft - walk;
  });
}
}
