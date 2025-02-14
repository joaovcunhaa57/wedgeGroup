export default class Cubo{
    constructor(aresta){
        this.aresta = aresta
    }
    calcularVolume(){
        return this.aresta ** 3
    }
    calcularAreaTotal(){
        return 6 * this.aresta ** 2
    }
}
