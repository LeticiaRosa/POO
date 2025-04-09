import { Animal } from "./Animal"

export class Cachorro extends Animal {

  constructor (name: string, idade:number){
    super(name,idade,"Cachorro")
  }

  emitirSom(){
    console.log(`${this.nome}: Au au`)
  }

  buscarBolinha(){
    console.log("Buscando a bolinha!")
  }

}