
// Menu //

let contenedor = document.querySelector("#contenedor")

let boton1 = document.querySelector("#boton1")
let boton2 = document.querySelector("#boton2")
let boton3 = document.querySelector("#boton3")
let boton4 = document.querySelector("#boton4")
let boton5 = document.querySelector("#boton5")
let boton6 = document.querySelector("#boton6")

// Ejercicio 1 //

boton1.addEventListener("click", () => {
    contenedor.innerHTML = `    <div class="container mt-4">
        <h1 class="text-center mb-5">Ejercicio 1</h1>
        <p class="fs-2 fw-semibold">·Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos al usuario.</p>
        <div>
            <label class="fs-2 fw-semibold">Ingrese un numero:</label>
            <input type="number" class="ms-3 ps-3 pe-2 fs-2 rounded-pill" placeholder="Ingrese un numero" id="InputEjercicio1">
            <button class="ms-3 fs-2 rounded-pill px-4" id="boton-enviar">Enviar valor</button>
        </div>
        
        <div id="colocarNumero"></div>
    </div>`

    let InputEjercicio = document.querySelector("#InputEjercicio1")

    let colocarNumero = document.querySelector("#colocarNumero")

    let botonValor = document.querySelector("#boton-enviar")

    botonValor.addEventListener("click", () => {
        let numeroIngresado1 = InputEjercicio.value
        let numeroSuma = 0
        for (let i = 1; i <= numeroIngresado1; i++) {
            numeroSuma += i
        }
        colocarNumero.innerHTML = `
    
        <div class="fs-2 mt-5 fw-semibold">Su numero ingresado es = ${numeroIngresado1}</div>
        <div class="fs-2 mt-5 fw-semibold">La suma de los numeros de 1 a su numero ingresado es = ${numeroSuma}</div>`
    })
})

//Ejercicio 2//

boton2.addEventListener("click", () => {
    contenedor.innerHTML = `<div class="container mt-4">
    <h1 class="text-center mb-5">Ejercicio 2</h1>
    <p class="fs-2 fw-semibold">·Se necesita validar si un número ingresado por el usuario es par o impar.</p>
    <div>
        <label class="fs-2 fw-semibold">Ingrese un numero:</label>
        <input type="number" class="ms-3 ps-3 pe-2 fs-2 rounded-pill" placeholder="Ingrese un numero" id="InputEjercicio">
        <button class="ms-3 fs-2 rounded-pill px-4" id="boton-enviar">Enviar valor</button>
    </div>
    
    <div id="colocarNumero"></div>
    </div>`
    let InputEjercicio = document.querySelector("#InputEjercicio")

    let colocarNumero = document.querySelector("#colocarNumero")

    let botonValor = document.querySelector("#boton-enviar")


    botonValor.addEventListener("click", () => {
        let numeroIngresado1 = InputEjercicio.value
        console.log(numeroIngresado1)
        let resultado = ""
        if (numeroIngresado1%2 != 0){
            resultado = "es un numero impar"
        }
        else{
            resultado = "es un numero par"
        }

        colocarNumero.innerHTML = `

        <div class="fs-2 mt-5 fw-semibold">Su numero ingresado es = ${numeroIngresado1}</div>
        <div class="fs-2 mt-5 fw-semibold">El numero que ingreso ${resultado}</div>`
    })
})



// ejercicio 3 //

boton3.addEventListener("click", () => {
    contenedor.innerHTML = `        <div class="container mt-4">
    <h1 class="text-center mb-5">Ejercicio 3</h1>
    <p class="fs-2 fw-semibold">·Pizzería Pepitos</p>
    <div class = "mb-4">
        <label class="fs-2 fw-semibold">Ingrese tu edad:</label>
        <input type="number" class="ms-3 ps-3 pe-2 fs-2 rounded-pill" placeholder="Ingresa tu edad" id="InputEjercicio1">
    </div>
    <div>
        <label class="fs-2 fw-semibold">Ingresa tu genero:</label>
        <select class="fs-2 rounded-pill px-4" id="seleccionGenero">
            <option value="">Selecciona tu genero</option>
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
        </select>
    </div>
    <button class="mt-4 fs-2 rounded-pill px-4" id="boton-enviar">Enviar datos</button>
    
    <div id="colocarNumero"></div>
</div>`

    let InputEjercicio = document.querySelector("#InputEjercicio1")

    let selectGenero = document.querySelector("#seleccionGenero")

    let colocarNumero = document.querySelector("#colocarNumero")

    let botonEnviar = document.querySelector("#boton-enviar")

    botonEnviar.addEventListener("click", () => {
        let respuesta = ""
        let valorEdad = InputEjercicio.value
        valorGenero = selectGenero.value
            if(valorEdad <= 10 && valorGenero == "mujer"){
                respuesta = "Felicidades! Ganaste un jugo y una pizza Hawaiana :)."
            }
            else if(valorEdad <= 10 && valorGenero == "hombre"){
                respuesta = "Felicidades! Ganaste un jugo y una pizza tres carnes :)."
            }
            else if(valorEdad >= 18 && valorGenero == "mujer"){
                respuesta = "Felicidades! Ganaste una cerveza y una pizza Hawaiana :)."
            }
            else if(valorEdad >= 18 && valorGenero == "hombre"){
                respuesta = "Felicidades! Ganaste una cerveza y una pizza tres carnes :)."
            }
            else{
                respuesta = "Lo sentimos, no ganaste nada :(."
            }
            colocarNumero.innerHTML = `
            <div class="fs-2 mt-5 fw-semibold">${respuesta}</div>`
    })
})


// Ejercicio 4 //

boton4.addEventListener("click", () => {
    contenedor.innerHTML = `
    <div class="container mt-4">
            <h1 class="text-center mb-5">Ejercicio 4</h1>
            <div class="d-flex justify-content-evenly">
                <div class="border border-2 border-white text-center">
                    <table class="fs-4">
                        <thead>
                            <tr>
                                <th class="codigo-tabla">#</th>
                                <th>Producto</th>
                                <th>Precio (COP)</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="codigo-tabla">1</td>
                                <td>Hamburguesa sencilla</td>
                                <td>16.000</td>
                                
                            </tr>
                            <tr>
                                <td class="codigo-tabla">2</td>
                                <td>Hamburguesa especial</td>
                                <td>21.000</td>
                                
                            </tr>
                            <tr>
                                <td class="codigo-tabla">3</td>
                                <td>Hamburguesa suprema</td>
                                <td>30.000</td>
                                
                            </tr>
                            <tr>
                                <td class="codigo-tabla">4</td>
                                <td>Jugo natural</td>
                                <td>7.000</td>
                                
                            </tr>
                            <tr>
                                <td class="codigo-tabla">5</td>
                                <td>Cerveza artesanal</td>
                                <td>9.000</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex fs-4 border border-2 border-white flex-column align-items-center contenedor-valor">
                    <p class="px-3 py-2 m-0 text-black bg-white fw-semibold">Ingrese el codigo (#) del producto que desea ordenar:</p>
                    <div class="inputCodigo d-flex">
                        <input type="number" class="text-white text-center" placeholder="# Codigo" id="inputEnviarProducto">
                        <i class="fa-solid fa-angles-right fs-2" id="botonEnviarProducto"></i>
                    </div>
                    <div class="w-100 d-flex divScroll flex-column" id="ponerProductos">

                    </div>
                    <div class="valorCodigo d-flex justify-content-evenly border border-2 border-white py-2 fw-semibold">
                        <span>Valor a pagar:</span>
                        <span id="contador">0</span>
                    </div>
                    
                </div>
                
            </div>
        </div>`

        let productos = ["Hamburguesa Sencilla", "Hamburguesa Especial", "Hamburguesa Suprema", "Jugo Natural", "Cerveza Artesanal"]

let precios = [16000, 21000, 30000, 7000, 9000]

let botonEnviarProducto = document.querySelector("#botonEnviarProducto")

let inputEnviarProducto = document.querySelector("#inputEnviarProducto")

let ponerProductos = document.querySelector("#ponerProductos")

let valorContador = 0

let contador = document.querySelector("#contador")

botonEnviarProducto.addEventListener("click", () => {
    let numeroInput = inputEnviarProducto.value
    if(numeroInput == 1){
        ponerProductos.innerHTML += `<div class="objetoValor">
        <span>${productos[0]}</span>
        <span>${precios[0]}</span>
        </div>`
        valorContador += precios[0]
        contador.innerHTML = valorContador
    }
    else if(numeroInput == 2){
        ponerProductos.innerHTML += `<div class="objetoValor">
        <span>${productos[1]}</span>
        <span>${precios[1]}</span>
        </div>`
        valorContador += precios[1]
        contador.innerHTML = valorContador
    }
    else if(numeroInput == 3){
        ponerProductos.innerHTML += `<div class="objetoValor">
        <span>${productos[2]}</span>
        <span>${precios[2]}</span>
        </div>`
        valorContador += precios[2]
        contador.innerHTML = valorContador
    }
    else if(numeroInput == 4){
        ponerProductos.innerHTML += `<div class="objetoValor">
        <span>${productos[3]}</span>
        <span>${precios[3]}</span>
        </div>`
        valorContador += precios[3]
        contador.innerHTML = valorContador
        
    }
    else if(numeroInput == 5){
        ponerProductos.innerHTML += `<div class="objetoValor">
        <span>${productos[4]}</span>
        <span>${precios[4]}</span>
        </div>`
        valorContador += precios[4]
        contador.innerHTML = valorContador
        
        
    }
    else{
    }
})
})


// Ejercicio 5 //

boton5.addEventListener("click", () => {
    contenedor.innerHTML = `<div class="container mt-4">
    <h1 class="text-center mb-5">Ejercicio 5</h1>
    <p class="fs-2 fw-semibold">·Se le debe pedir al usuario un número y mostrar la tabla de multiplicar de ese número, adicionalmente, se debe mostrar el total de las multiplicaciones solicitadas por el mismo.</p>
<div>
    <label class="fs-2 fw-semibold">Ingrese un numero para multiplicar:</label>
    <input type="number" class="ms-3 ps-3 pe-2 fs-2 rounded-pill" placeholder="Ingrese un numero" id="InputEjercicio1">
    <label class="fs-2 fw-semibold">Ingrese el numero de multiplicaciones:</label>
    <input type="number" class="ms-3 ps-3 pe-2 fs-2 rounded-pill" placeholder="Ingrese un numero" id="InputEjercicio2">
    
</div>
<button class="fs-2 rounded-pill px-4 mt-2 mb-4" id="boton-enviar">Enviar valores</button>

<div class="d-flex flex-row flex-wrap" id="colocarNumero"></div>`

let InputEjercicio1 = document.querySelector("#InputEjercicio1")

let InputEjercicio2 = document.querySelector("#InputEjercicio2")

let colocarNumero = document.querySelector("#colocarNumero")

let botonValor = document.querySelector("#boton-enviar")


botonValor.addEventListener("click", () => {
    colocarNumero.innerHTML= ""
    let numeroIngresado1 = InputEjercicio1.value
    let numeroIngresado2 = InputEjercicio2.value
    for(let i=1; i<=numeroIngresado2; i++){
        colocarNumero.innerHTML += `<p class="text-white fs-3 fw-semibold ms-3 border border-white border-2 p-2">${numeroIngresado1} * ${i} = ${numeroIngresado1*i}</p>`
    }
})

})


