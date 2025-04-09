import { IPetShopService } from "../interfaces/IPetShop";
import { Animal, AnimalType } from "../models/Animal";
import { Cachorro } from "../models/Cachorro";
import { Dono, DonoType } from "../models/Dono";
import { Funcionario } from "../models/Funcionario";
import { Gato } from "../models/Gato";
import { Papagaio } from "../models/Papagaio";
import { Veterinario } from "../models/Veterinario";

export class Services implements IPetShopService{
  private donos: Dono[] = [];
  private veterinarios: Veterinario[] = [];

  constructor(){
    console.log("Pet Shop criado!")
  }

  cadastrarFuncionario(): Funcionario {
    return new Funcionario()
  }

  cadastrarVeterinario(): Veterinario {
    const novoVeterinario = new Veterinario()
    this.veterinarios.push(novoVeterinario)
    return novoVeterinario
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
    const NovoDono =  new Dono(nome,telefone)
    this.donos.push(NovoDono);
    return NovoDono
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

  // Desafio: Criar um método para gerar um relatório com: Total de animais

  totalDeAnimais(): number {
    return this.donos.reduce((total, dono) => total + dono.getAnimais().length, 0);
  }

  // Desafio: Criar um método para gerar um relatório com: Donos cadastrados
  totalDeDonos(): number{
    return this.donos.length
  }
  
  // Desafio: Criar um método para gerar um relatório com: Espécies distintas
  totalDeEspeciesDistintas(): number {
    // Usando o Set, pois ele armazena apenas valores distintos!
    const especies = new Set<string>()
    this.donos.forEach(dono => {
      dono.getAnimais().forEach(animal => {
        especies.add(animal.getEspecie());
      })
    })
    return especies.size
  }

  // Desafio: Quantidade de atendimentos por veterinário
  totalDeVeterinariosCadastrados(): string {
    return this.veterinarios.map((veterinario, index) => 
      `\nVeterinário ${index + 1}: ${veterinario.getQtdAtendimentos()} atendimento(s)`
    ).join('');
  }

  // Desafio: Criar um método que percorre uma lista de Animal[] e aplica emitirSom() em cada um (exercício de polimorfismo)
  emitirSonDeTodosAnimais(){
    this.donos.forEach(dono => {
      dono.getAnimais().forEach(animal => {
       animal.emitirSom()
      })
    })
  }
}