import { Animal } from "./Animal";

export class Veterinario {
  constructor(){
    console.log("Veterinário cadastrado!")
  }
  consultar(animal: Animal):void {
    console.log("Consultando o ", animal.getNome)
  }
}