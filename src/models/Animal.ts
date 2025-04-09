type Especie = "Cachorro" | "Gato" | "Passaro"

abstract class Animal {
  
  protected nome: string
  protected idade: number
  protected especie: Especie

  constructor(nome:string,idade:number, especie: Especie){
    this.nome=nome
    this.idade=idade
    this.especie=especie
  }

  getNome():string{
    return this.nome
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