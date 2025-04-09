import { IPetShop } from "../interfaces/IPetShop";
import { Animal, AnimalType } from "../models/Animal";
import { Cachorro } from "../models/Cachorro";
import { Dono, DonoType } from "../models/Dono";
import { Funcionario } from "../models/Funcionario";
import { Gato } from "../models/Gato";
import { Papagaio } from "../models/Papagaio";
import { Veterinario } from "../models/Veterinario";

export class Services implements IPetShop{
  constructor(){
    console.log("Serviço criado!")
  }
  cadastrarFuncionario(): Funcionario {
    return new Funcionario()
  }
  cadastrarVeterinario(): void {
    new Veterinario()
  }
  cadastrarAnimal({nome,idade,especie}: AnimalType): Cachorro | Gato | Papagaio {
    switch (especie) {
      case "Cachorro":
        return new Cachorro(nome, idade)
      case "Gato":
        return new Gato(nome, idade)
      case "Passaro":
        return new Papagaio(nome, idade)
    }
  }
  cadastrarDono({nome,telefone}: DonoType): Dono {
    return new Dono(nome,telefone)
  }

  adicionarAnimalAoDono(dono: Dono, animal: Animal):void{
    dono.adicionarAnimal(animal)
  }

  banho(animal: Animal, funcionario: Funcionario): void {
    funcionario.darBanho(animal)
  }
  tosar(animal: Animal, funcionario: Funcionario): void {
    funcionario.tosar(animal)
  }
}