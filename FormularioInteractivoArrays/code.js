
let input1 = document.querySelector("#input1")

let input2 = document.querySelector("#input2")

let boton = document.querySelector("#boton")

let caja = document.querySelector("#caja")

let array1 = []

boton.addEventListener("click", (e) => {
    e.preventDefault();
    let valorInput1 = input1.value.trim()
    let valorInput2 = input2.value.trim()
    let valorRepite = false
    if(valorInput1 != "" && valorInput2 == ""){
        if(array1.length == 0){
            array1.push(valorInput1)
            caja.innerHTML += `<p class="text-white">${array1.indexOf(valorInput1)+1} - ${valorInput1}</p>`
        }
        else{
            array1.forEach(elemento => {
                if(elemento==valorInput1){
                    valorRepite= true
                }
            });
            if(valorRepite == true){
                alert("El valor ya existe en el array")
            }
            else{
                array1.push(valorInput1)
                caja.innerHTML = ""
                array1.forEach(element => {
                    caja.innerHTML += `<p class="text-white">${array1.indexOf(element)+1} - ${element}</p>`
                    
                });            
            }
        }
        
    }

    else if(valorInput1 != "" && valorInput2 !=""){
        let hayInput2 = false
        array1.forEach(elemento => {
            if(elemento==valorInput1){
                valorRepite= true
            }
            if(elemento==valorInput2){
                hayInput2 = true
            }
        });
        if(valorRepite == true){
            alert("El valor ya existe en el array")
        }
        else if(hayInput2){
            array1.splice(array1.indexOf(valorInput2)+1, 0, valorInput1)
            caja.innerHTML = ""
            array1.forEach(element => {
                caja.innerHTML += `<p class="text-white">${array1.indexOf(element)+1} - ${element}</p>`
            });  
        }
        else if(!hayInput2){
            alert("El elemento especefico no existe en el array")
        }
    }
    console.log(array1)
})

// el elemento especificado no existe en el array