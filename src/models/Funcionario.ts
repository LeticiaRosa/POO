import { ICuidadorDeAnimais } from "../interfaces/ICuidadorDeAnimais";

export class Funcionario implements ICuidadorDeAnimais{
  constructor(){}
  cuidar(animal: Animal): void {
    console.log("Cuidando do ", animal.getNome)
  }
  darBanho(animal: Animal): void {
    console.log("Dando banho no ", animal.getNome)
  }
}