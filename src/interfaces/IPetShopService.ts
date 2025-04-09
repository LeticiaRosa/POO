import { Animal, AnimalType } from "../models/Animal";
import { Dono } from "../models/Dono";
import { Funcionario } from "../models/Funcionario";
import { Veterinario } from "../models/Veterinario";

export interface IPetShopService {
  cadastrarFuncionario(func: Funcionario):void
  cadastrarVeterinario(vet: Veterinario): void
  cadastrarDono(dono: Dono): void
  adicionarAnimalAoDono(dono: Dono, animal:Animal):void
  banho(animal:Animal, funcionario: Funcionario):void
  tosar(animal:Animal, funcionario:Funcionario):void
}