import { IPetShopService } from "../interfaces/IPetShopService";
import { Animal, AnimalType } from "../models/Animal";
import { Dono } from "../models/Dono";
import { Funcionario } from "../models/Funcionario";
import { Veterinario } from "../models/Veterinario";

export class Services implements IPetShopService{
  private donos: Dono[]
  private veterinarios: Veterinario[]
  private funcionarios: Funcionario[]

  constructor(
    donos: Dono[] = [],
    veterinarios: Veterinario[] = [],
    funcionarios: Funcionario[] = []
  ) {
    this.donos = donos
    this.veterinarios = veterinarios
    this.funcionarios = funcionarios
  }


  cadastrarFuncionario(func: Funcionario) {
    this.funcionarios.push(func)
  }

  cadastrarVeterinario(vet:Veterinario) {
    this.veterinarios.push(vet)
  }

  cadastrarDono(dono: Dono) {
    this.donos.push(dono);
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
    console.log("\n=== Sons dos animais ===")
    this.donos.forEach(dono => {
      dono.getAnimais().forEach(animal => {
      `${animal.emitirSom()}`
      })
    })
  }
}