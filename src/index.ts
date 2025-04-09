import { Services } from "./services/PetShopService"
import { Animal, AnimalType } from "./models/Animal"
import { Veterinario } from "./models/Veterinario"
import { Funcionario } from "./models/Funcionario"
import { Dono } from "./models/Dono"
import { Gato } from "./models/Gato"
import { Cachorro } from "./models/Cachorro"
import { Papagaio } from "./models/Papagaio"

//Extra
function gerarRelatorio( PetShop: Services, tipo: "Todos" | "Total de Animais"| "Espécies distintas"| "Donos Cadastrados"| "Quantidade de atendimentos por Veterinário"){
    switch(tipo){
      case "Donos Cadastrados":
        console.log("\n=== Relatório Total de Donos Cadastrados:", PetShop.totalDeDonos())
        break
      case "Espécies distintas":
        console.log("\n=== Relatório de Espécies distintas:", PetShop.totalDeEspeciesDistintas())
        break
      case "Quantidade de atendimentos por Veterinário":
        console.log("\n=== Quantidade de atendimentos por Veterinário: ", PetShop.totalDeVeterinariosCadastrados())
        break
      case "Total de Animais":
        console.log("\n=== Relatório Total de Animais Cadastrados:", PetShop.totalDeAnimais())
      case "Todos":
        console.log("\n================== Relatórios ========================")
        console.log("\n=== Total de Donos Cadastrados:", PetShop.totalDeDonos())
        console.log("\n=== Espécies distintas:", PetShop.totalDeEspeciesDistintas())
        console.log("\n=== Quantidade de atendimentos por Veterinário: ", PetShop.totalDeVeterinariosCadastrados())
        console.log("\n=== Total de Animais Cadastrados:", PetShop.totalDeAnimais())
        console.log("\n=======================================================")
      default:
        break

    }
}

  function cadastrarAnimal({nome,idade,especie}: AnimalType): Cachorro | Gato | Papagaio {
    switch (especie) {
      case "Cachorro":
        return new Cachorro(nome, idade)
      case "Gato":
        return new Gato(nome, idade)
      case "Passaro":
        return new Papagaio(nome, idade)
    }
  }

function Iniciar() {
  console.log("\n=== PET SHOP - SISTEMA DE GERENCIAMENTO ===")
  const Func = new Funcionario()
  const Veterinario1 = new Veterinario()
  const Veterinario2 = new Veterinario()
  const Gabriel = new Dono(
    {nome: "Gabriel",
    telefone: "(31)99994-1324"}
  )
  const PetShopService = new Services( 
    [Gabriel],
    [Veterinario1, Veterinario2],
    [Func])
  const Molly = cadastrarAnimal({
    nome: "Molly",
    idade: 3,
    especie: "Gato"
  })
  const Chandellinho = cadastrarAnimal({
    nome: "Chandellinho",
    idade: 2,
    especie: "Gato"
  })
  const Zeus = cadastrarAnimal({
    nome: "Zeus",
    idade: 3,
    especie: "Cachorro"
  })
  PetShopService.adicionarAnimalAoDono(Gabriel, Molly)
  PetShopService.adicionarAnimalAoDono(Gabriel, Chandellinho)
  PetShopService.adicionarAnimalAoDono(Gabriel, Zeus)
  console.log("\n=== Animais ===")
  Gabriel.listarAnimais()
  console.log("\n====== Executando serviços =========")
  PetShopService.banho(Molly,Func)
  PetShopService.tosar(Molly,Func)
  Veterinario1.consultar(Molly)
  Veterinario1.consultar(Chandellinho)
  Veterinario2.consultar(Zeus)
  console.log("=======================")
  gerarRelatorio(PetShopService,"Todos")
  PetShopService.emitirSonDeTodosAnimais()
}

Iniciar()