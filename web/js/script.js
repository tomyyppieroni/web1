let lista = document.getElementById("lista")
let totalText = document.getElementById("totalText")
let total = 0
const productos = [
  { nombre: "Mouse Corsair M75 Air Wireless 2.4Ghz Ultra Lightweight Gray 26K 34Hs", precio: 101105, imagen: "images/Mouse_Corsair_M75_Air_Wireless_2.4Ghz_Ultra_Lightweight_Gray_26K_34Hs.jpg" },
  { nombre: "Mouse Logitech G309 Wireless Bluetooth Lightspeed White HERO 25K 86g", precio: 90559, imagen: "images/Mouse_Logitech_G309_Wireless_Bluetooth_Lightspeed_White_HERO_25K_86g.jpg" },
  { nombre: "Teclado Mecanico Corsair K70 Core Palm Rest Swtich MLX Red Full Size RGB", precio: 141665, imagen: "images/Teclado_Mecanico_Corsair_K70_Core_Palm_Rest_Switch_MLX_Red_Full_Size_RGB.jpg" },
  { nombre: "Teclado Mecanico Redragon K652 Azure RGB Wireless Bluetooth Switch Red 75%", precio: 86829, imagen: "images/Teclado_Mecanico_Redragon_K652_Azure_RGB_Wireless_Bluetooth_Switch_Red_75.jpg" },
  { nombre: "Procesador Intel Core i7 14700K 5.6GHz Turbo Socket 1700 Raptor Lake", precio: 723002, imagen: "images/Procesador_Intel_Core_i7_14700K_5.6GHz_Turbo_Socket_1700_Raptor_Lake.jpg" },
  { nombre: "Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4", precio: 100505, imagen: "images/Procesador_AMD_RYZEN_5_3600_4.2GHz_Turbo_AM4_Wraith_Stealth_Cooler.jpg" },
  { nombre: "Procesador AMD Athlon 3000G 3.5GHz + Radeon Vega 3 AM4", precio: 53904, imagen: "images/Procesador_AMD_Athlon_3000G_3.5GHz___Radeon_Vega_3_AM4.jpg" },
]
function pintarProductos(arrayProductos) {
  for (let i = 0; i < arrayProductos.length; i++) {
    lista.innerHTML +=
      `   <li class="forma" class="center">
             <img src="${arrayProductos[i].imagen}" alt="${arrayProductos[i].nombre}" class="producto-imagen">        
              <p> ${arrayProductos[i].nombre} - Precio: $${arrayProductos[i].precio} </p>
              <input type="number" id="cantidad${i}" placeholder="Ingrese cantidad" >
              <button id="btn${i}" >Agregar al carrito</button>
          </li>
`
  }

  for (let i = 0; i < arrayProductos.length; i++) {
    document.getElementById(`btn${i}`).addEventListener("click", () => {
      comprar(i, productos)
    })
  }
}


function comprar(index, arrayProductos) {
  let cantidadElement = document.getElementById(`cantidad${index}`)
  let cantidad = cantidadElement.value
  let precio = arrayProductos[index].precio

  if (cantidad > 0) {
    total += cantidad * precio
    totalText.innerHTML = "Total:" + "$" + `${total}`
  }

}

document.getElementById(`finalizarCompra`).addEventListener("click", () => {
  if (total > 0) { alert("Compra realizada con éxito.") };
});

pintarProductos(productos);
