import { Animal } from "./Animal"

export class Gato extends Animal{
  constructor (name: string, idade:number){
    super(name,idade,"Gato")
  }

  emitirSom(){
    console.log("Miau Miau!")
  }

  arranharSofa(){
    console.log("Arranhando o sofá!")
  }

}