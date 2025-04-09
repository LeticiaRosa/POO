class Gato extends Animal{
  constructor (name: string, idade:number, especie: Especie){
    super(name,idade,especie)
  }

  emitirSom(){
    console.log("Miau Miau!")
  }

  arranharSofa(){
    console.log("Arranhando o sofá!")
  }

}