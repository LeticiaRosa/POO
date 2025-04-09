import { Services } from "./services/PetShopService"
import { AnimalType } from "./models/Animal"
import { DonoType } from "./models/Dono"

function Iniciar() {
  console.log("\n=== PET SHOP - SISTEMA DE GERENCIAMENTO ===")
  const Servicos = new Services()
  const Funcionario = Servicos.cadastrarFuncionario()
  Servicos.cadastrarVeterinario()
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
  const Animal = Servicos.cadastrarAnimal(Molly)
  const Animal2 = Servicos.cadastrarAnimal(Chandellinho)
  const Dono = Servicos.cadastrarDono(Gabriel)
  Servicos.adicionarAnimalAoDono(Dono, Animal)
  Servicos.adicionarAnimalAoDono(Dono, Animal2)
  console.log("\n=== Animais ===")
  Dono.listarAnimais()
  console.log("\n===============")
  Servicos.banho(Animal,Funcionario)
  Servicos.tosar(Animal,Funcionario)
}

Iniciar()