import { Animal } from "./Animal";

export class Veterinario {
  protected qtdAtendimentos: number

  constructor(){
    this.qtdAtendimentos = 0
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