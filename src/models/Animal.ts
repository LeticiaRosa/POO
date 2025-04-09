type Especie = "Cachorro" | "Gato" | "Passaro";

abstract class Animal {
  private nome: string;
  private idade: number;
  private especie: Especie;
  constructor(nome:string,idade:number, especie: Especie){
    this.nome=nome;
    this.idade=idade;
    this.especie=especie;
  }

  abstract emitirSom():void;

  alimentar(): void {
    console.log(`${this.nome} está comendo sua ração.`);
  }

  apresentar(): void {
    console.log(`\n🐾 Nome: ${this.nome}`);
    console.log(`📅 Idade: ${this.idade} anos`);
    console.log(`📌 Tipo: ${this.especie}`);
  }
}