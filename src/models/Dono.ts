import { Animal } from "./Animal"

type DonoType = {
  nome: string
  telefone: string
}

export class Dono {

  readonly nome: string
  readonly telefone: string
  protected animais: Animal[] = []

  constructor({nome, telefone}:DonoType){
    this.nome = nome
    this.telefone = telefone
  }

  adicionarAnimal(animal: Animal): void {
    this.animais.push(animal);
  }

  listarAnimais():void {
    this.animais.forEach((animal: Animal)=>{
      animal.apresentar()
    })
  }

  apresentar(): void {
    console.log(`👤 Dono: ${this.nome}`);
    console.log(`📞 Telefone: ${this.telefone}`);
    console.log(`📋 Quantidade de animais: ${this.animais.length}`);
  }

  public getAnimais(): Animal[] {
    return this.animais;
  }

}