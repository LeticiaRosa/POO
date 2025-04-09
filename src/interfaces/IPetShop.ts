import { Funcionario } from "../models/Funcionario";

export interface PetShop{
  banho(animal:Animal, funcionario: Funcionario):void
  tosa(animal:Animal, funcionario:Funcionario):void
}