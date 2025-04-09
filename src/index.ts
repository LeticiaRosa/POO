import { Funcionario } from "./models/Funcionario"
import { Services } from "./services/PetShopService"

class Iniciar {
  animal = new Cachorro("Zeus",2)
  dono = new Dono("Leticia", "31934384734")
  funcionario = new Funcionario()
  iniciar = new Services()
}