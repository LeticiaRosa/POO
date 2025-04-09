class Papagaio extends Animal {
  constructor(nome:string, idade:number, especie: Especie){
    super(nome, idade, "Passaro");
  }

  emitirSom(){
    console.log("Eu sou um papagaio! Eu sou um papagaio! Eu sou um papagaio!");
  }

  bicarDedos(){
    console.log("Bicando dedos");
  }

}