import { ICuidadorDeAnimais } from "../interfaces/ICuidadorDeAnimais";
import { Animal } from "./Animal";

export class Funcionario implements ICuidadorDeAnimais{
  constructor(){
    console.log("Funcionário cadastrado!")
  }
  cuidar(animal: Animal): void {
    console.log("Cuidando de: ", animal.getNome())
  }
  darBanho(animal: Animal): void {
    console.log("🛁 Dando banho em: ", animal.getNome())
  }
  tosar(animal: Animal): void {
    console.log("✂️ Tosar: ", animal.getNome())
  }
}