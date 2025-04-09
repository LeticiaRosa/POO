class Cachorro extends Animal {

  constructor (name: string, idade:number, especie: Especie){
    super(name,idade,especie)
  }

  emitirSom(){
    console.log("Au au")
  }

  buscarBolinha(){
    console.log("Buscando a bolinha!")
  }

}