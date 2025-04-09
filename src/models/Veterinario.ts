import { Animal } from "./Animal";

export class Veterinario {
  protected qtdAtendimentos: number = 0

  constructor(){
    console.log("Veterinário cadastrado!")
  }

  consultar(animal: Animal):void {
    this.qtdAtendimentos += 1
    console.log("Consultando o ", animal.getNome())
  }

  getQtdAtendimentos(): number{
    return this.qtdAtendimentos
  }

}