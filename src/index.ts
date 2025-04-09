import { Services } from "./services/PetShopService"
import { AnimalType } from "./models/Animal"
import { DonoType } from "./models/Dono"
import { Veterinario } from "./models/Veterinario"

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

function Iniciar() {
  console.log("\n=== PET SHOP - SISTEMA DE GERENCIAMENTO ===")
  const PetShopService = new Services()
  const Funcionario = PetShopService.cadastrarFuncionario()
  const Veterinario1 = PetShopService.cadastrarVeterinario()
  const Veterinario2 = PetShopService.cadastrarVeterinario()
  PetShopService.cadastrarVeterinario()
  const Gabriel = <DonoType> {
    nome: "Gabriel",
    telefone: "(31)99994-1324"
  } 
  const Molly = <AnimalType> {
    nome: "Molly",
    idade: 3,
    especie: "Gato"
  }
  const Chandellinho = <AnimalType> {
    nome: "Chandellinho",
    idade: 2,
    especie: "Gato"
  }
  const Zeus = <AnimalType> {
    nome: "Zeus",
    idade: 3,
    especie: "Cachorro"
  }
  const Animal = PetShopService.cadastrarAnimal(Molly)
  const Animal2 = PetShopService.cadastrarAnimal(Chandellinho)
  const Animal3 = PetShopService.cadastrarAnimal(Zeus)
  const Dono = PetShopService.cadastrarDono(Gabriel)
  PetShopService.adicionarAnimalAoDono(Dono, Animal)
  PetShopService.adicionarAnimalAoDono(Dono, Animal2)
  PetShopService.adicionarAnimalAoDono(Dono, Animal3)
  console.log("\n=== Animais ===")
  Dono.listarAnimais()
  console.log("\n===============")
  PetShopService.banho(Animal,Funcionario)
  PetShopService.tosar(Animal,Funcionario)
  Veterinario1.consultar(Animal)
  Veterinario1.consultar(Animal3)
  Veterinario2.consultar(Animal2)
  gerarRelatorio(PetShopService,"Todos")
  PetShopService.emitirSonDeTodosAnimais()
}

Iniciar()