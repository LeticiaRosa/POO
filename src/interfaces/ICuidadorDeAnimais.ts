import { Animal } from "../models/Animal"

export interface ICuidadorDeAnimais {
  cuidar(animal: Animal): void
  darBanho(animal: Animal): void
  tosar(animal: Animal): void
}