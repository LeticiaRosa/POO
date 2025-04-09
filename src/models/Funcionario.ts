import { ICuidadorDeAnimais } from "../interfaces/ICuidadorDeAnimais";

class Funcionario implements ICuidadorDeAnimais{
  cuidar(animal: Animal): void {
    console.log("Cuidando do animal")
  }
  darBanho(animal: Animal): void {
    console.log("Danndo banho no animal")

  }
}