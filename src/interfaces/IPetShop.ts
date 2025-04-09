import { Animal, AnimalType } from "../models/Animal";
import { Dono } from "../models/Dono";
import { Funcionario } from "../models/Funcionario";
import { Veterinario } from "../models/Veterinario";

export interface IPetShopService {
  cadastrarFuncionario():void
  cadastrarVeterinario(veterinario: Veterinario): void
  cadastrarAnimal(animal: AnimalType):void
  cadastrarDono(dono: Dono, animal:Animal):void
  adicionarAnimalAoDono(dono: Dono, animal: Animal):void
  banho(animal:Animal, funcionario: Funcionario):void
  tosar(animal:Animal, funcionario:Funcionario):void
}