import Cubo from './model/cubo.js'

let aresta = 7

const cubo1 = new Cubo(aresta)

let areaTotal = cubo1.calcularAreaTotal()
let volumeTotal = cubo1.calcularVolume()

console.log("area total :", areaTotal)
console.log("volume total :", volumeTotal)

let aresta2 = 8

const cubo2 = new Cubo(aresta2)

areaTotal = cubo2.calcularAreaTotal()
volumeTotal = cubo2.calcularVolume()

console.log("area total 2:", areaTotal)
console.log("volume total 2:", volumeTotal)