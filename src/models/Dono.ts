class Dono {

  nome: string
  telefone: string
  animais: Animal[] = []

  constructor(nome: string, telefone: string){
    this.nome = nome
    this.telefone = telefone
  }

  adicionarAnimal(animal: Animal): void {
    this.animais.push(animal);
  }

  listarAnimais():void{
    this.animais.forEach((animal: Animal)=>{
      animal.apresentar()
    })
  }

  apresentar(): void {
    console.log(`👤 Dono: ${this.nome}`);
    console.log(`📞 Telefone: ${this.telefone}`);
    console.log(`📋 Quantidade de animais: ${this.animais.length}`);
  }

}