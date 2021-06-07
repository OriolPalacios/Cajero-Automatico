let caja = document.getElementById("caja")
let recargarPagina = document.getElementById("recargarPagina")
recargarPagina.addEventListener("click", refresh)
let botonMostrarDineroTotal = document.getElementById("mostrarDineroTotal")
botonMostrarDineroTotal.addEventListener("click", escribirDineroTotal)
let elementoCantidadDinero = document.getElementById("cantidadDinero")
let cantidadDinero 
let HTMLretirarDinero = document.getElementById("retirarDinero")
HTMLretirarDinero.addEventListener("click", calcularBilletes)
let guardarCantidadDeBilletes = []
let guardarValorAcumulado = []
class Billete {
    constructor(valorBillete,cantidadBillete){  
        this.valorBillete = valorBillete
        this.cantidadBillete = cantidadBillete
    }
}

let cajero = []
cajero.push(new Billete(50,50))
cajero.push(new Billete(20,40))
cajero.push(new Billete(10,30))

let dineroTotal = calcularDineroTotal()

function calcularBilletes(){
    cantidadDinero = elementoCantidadDinero.value
    if(cantidadDinero<=dineroTotal){
        for(i=0;i<cajero.length;i++){
            if(dineroTotal>=0){
                let z = cajero[i].cantidadBillete
                let y = cajero[i].valorBillete
                let x = parseInt(cantidadDinero/y)
                if(x <= z){
                    guardarCantidadDeBilletes.push(x)
                    dineroTotal = dineroTotal - (x*y)
                    cantidadDinero = cantidadDinero - (x*y)
                    console.log(`En el cajero quedan ${dineroTotal}`)
                    console.log(`Faltan ${cantidadDinero} para completar el retiro`)
                } else {
                    x = z
                    guardarCantidadDeBilletes.push(x)
                    dineroTotal = dineroTotal - (x*y)
                    cantidadDinero = cantidadDinero - (x*y)
                    console.log(`En el cajero quedan ${dineroTotal}`)
                    console.log(`Faltan ${cantidadDinero} para completar el retiro`)
                }
            }
        }
        console.log(guardarCantidadDeBilletes)
        caja.append("Su retiro es de:")
        caja.appendChild(document.createElement("br"))
        for(i=0;i<guardarCantidadDeBilletes.length;i++){
            if(guardarCantidadDeBilletes[i]!=0){
                caja.append(guardarCantidadDeBilletes[i] + " billetes de " +cajero[i].valorBillete )
                caja.appendChild(document.createElement("br"))
            }
        }
    }else if(cantidadDinero>dineroTotal){
        alert("No hay suficiente dinero en el cajero")
    }

}

function escribirDineroTotal(){
    caja.append("El dinero disponible en caja es " + dineroTotal)
    caja.appendChild(document.createElement("br"))
}

function calcularDineroTotal() {
    for(i=0;i<cajero.length;i++){
        valorAcumulado = (cajero[i].valorBillete * cajero[i].cantidadBillete)
        guardarValorAcumulado.push(valorAcumulado)
    }
    return guardarValorAcumulado.reduce((x,y) => x + y)
}

function refresh(){
    window.location.reload() 
}