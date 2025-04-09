import { PetShop } from "../interfaces/IPetShop";
import { Funcionario } from "../models/Funcionario";

export class Services implements PetShop{
  banho(animal: Animal, funcionario: Funcionario): void {
    throw new Error("Method not implemented.");
  }

  tosa(animal: Animal, funcionario: Funcionario): void {
    throw new Error("Method not implemented.");
  }

}
