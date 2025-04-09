type Especie = "Cachorro" | "Gato" | "Passaro"

export type AnimalType = {
  nome: string
  idade: number
  especie: Especie
}

export abstract class Animal {
  
  readonly nome: string
  readonly idade: number
  readonly especie: Especie

  constructor(nome:string, idade:number, especie: Especie){
    this.nome=nome
    this.idade=idade
    this.especie=especie
  }

  getNome():string{
    return this.nome
  }

  getIdate():number{
    return this.idade
  }

  getEspecie():string{
    return this.especie
  }

  abstract emitirSom():void

  alimentar(): void {
    console.log(`${this.nome} está comendo sua ração.`)
  }

  apresentar(): void {
    console.log(`\n🐾 Nome: ${this.nome}`)
    console.log(`📅 Idade: ${this.idade} anos`)
    console.log(`📌 Espécie: ${this.especie}`)
  }
}