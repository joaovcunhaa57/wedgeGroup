import Cubo from "../model/cubo.js"

describe("Teste da Classe Cubo", ()=>{
    test("Testando o cálculo do volume", ()=>{
        const aresta = 4
        const volumeEsperado = aresta ** 3 // 64

        const cubo = new Cubo(aresta)

        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })

    test("Testando o cálculo da área total", ()=>{
        const aresta = 4
        const areaTotalEsperada = 6 * aresta ** 2 // 96

        const cubo = new Cubo(aresta)

        expect(cubo.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)

    })
})