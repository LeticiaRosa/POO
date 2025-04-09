import { Animal } from "./Animal";

export class Papagaio extends Animal {
  constructor(nome:string, idade:number){
    super(nome, idade, "Passaro");
  }

  emitirSom(){
    console.log(`${this.nome}: Eu sou um papagaio! Eu sou um papagaio! Eu sou um papagaio!` );
  }

  bicarDedos(){
    console.log("Bicando dedos");
  }

}