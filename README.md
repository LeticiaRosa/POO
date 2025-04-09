# 🐾 Sistema de Gerenciamento de Animais - Pet Shop (POO com TS)

Este projeto é um desafio de Programação Orientada a Objetos (POO), desenvolvido com JavaScript/TypeScript, para simular o funcionamento de um sistema de gerenciamento de um Pet Shop.

## 🚀 Objetivo

Implementar um sistema que gerencia diferentes tipos de animais, seus donos, cuidadores e veterinários, aplicando os principais conceitos da Programação Orientada a Objetos.

## 🧠 Conceitos de POO Abordados

✔️ **Classes e Objetos**

  São a base da programação orientada a objetos, onde classes definem estruturas e comportamentos, e objetos são instâncias dessas classes.
  
✔️ **Herança**

  Permite que uma classe herde atributos e métodos de outra, promovendo reutilização de código e hierarquia.
  
✔️ **Abstração**

  Consiste em ocultar detalhes complexos e mostrar apenas as informações essenciais de um objeto.
  
✔️ **Encapsulamento**

  É a prática de proteger os dados internos de um objeto, expondo apenas o que for necessário por meio de métodos públicos.
  
✔️ **Polimorfismo**

  Habilidade de objetos de diferentes classes responderem de maneira distinta a uma mesma chamada de método.
  
✔️ **Interfaces**

  Definem contratos que uma classe deve seguir, garantindo a implementação de determinados métodos e propriedades.
  
✔️ **Composição**

  Relação onde uma classe é formada por outras, promovendo reutilização e modularidade sem herança direta.
  
✔️ **Injeção de Dependência**

  Técnica que permite fornecer objetos prontos para uma classe ao invés dela instanciar por conta própria, facilitando testes e manutenção.

## 🧱 Estrutura do Sistema

### ✅ 1. Classe Abstrata `Animal`
- Atributos: `nome`, `idade`, `especie`
- Métodos:
  - `emitirSom()` (abstrato)
  - `alimentar()` (genérico)

### ✅ 2. Subclasses: `Cachorro`, `Gato`, `Papagaio`
- Herdam de `Animal`
- Implementam `emitirSom()` com comportamentos distintos
- Possuem métodos específicos (ex: `buscarBolinha()`)

### ✅ 3. Classe `Dono`
- Atributos: `nome`, `telefone`
- Associada a um ou mais animais (composição)

### ✅ 4. Interface `ICuidadorDeAnimais`
- Métodos:
  - `cuidar(animal: Animal)`
  - `darBanho(animal: Animal)`

### ✅ 5. Classe `Funcionario`
- Implementa `ICuidadorDeAnimais`

### ✅ 6. Classe `Veterinario`
- Método: `consultar(animal: Animal)`

### ✅ 7. Interface `IPetShopService`
- Definição um contrato para PetShopService
- Métodos:
  - `cadastrarFuncionario()`
  - `cadastrarVeterinario(veterinario: Veterinario)`
  - `cadastrarDono(dono: Dono, animal:Animal)`
  - `adicionarAnimalAoDono(dono: Dono, animal: Animal)`
  - `banho(animal:Animal, funcionario: Funcionario)`
  - `tosar(animal:Animal, funcionario:Funcionario)`

### ✅ 8. Classe `PetShopService`
- Centraliza as operações do sistema
- Utiliza Injeção de Dependência para gerenciar cuidadores e veterinários

## 📦 Estrutura de Diretórios
```pgsql
src/
│
├── models/
│   ├── Animal.ts (classe abstrata)
│   ├── Cachorro.ts, Gato.ts, Papagaio.ts
│   ├── Dono.ts
│   ├── Funcionario.ts
│   ├── Veterinario.ts
│
├── interfaces/
│   └── ICuidadorDeAnimais.ts
│   └── IPetShopService.ts
│
├── services/
│   └── PetShopService.ts
│
└── index.ts (simulação de uso do sistema)
```

## 🧪 Extras e Desafios

- Criar um método para gerar um relatório com:
  - Total de animais
  - Espécies distintas
  - Donos cadastrados
  - Quantidade de atendimentos por veterinário
- Criar um método que percorre uma lista de `Animal[]` e aplica `emitirSom()` em cada um (exercício de polimorfismo)
- Testes Automatizados
  - Criar uma pasta tests/ com testes unitários básicos para Funcionario, Veterinario e PetShopService usando vitest ou jest.

## 🚧 Em desenvolvimento...

Este projeto está em andamento! Contribuições e sugestões são muito bem-vindas. 🛠️

## 🛠️ Tecnologias

- TypeScript
- POO aplicada a sistemas reais
- Node.js (para rodar localmente)

## 💡 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/leticiaRosa/petshop-poo-ts.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto com tsx:
O `tsx` é uma ferramenta moderna que permite executar arquivos TypeScript diretamente no Node.js, sem precisar compilar antes.
Ele é uma alternativa leve e prática ao ts-node, muito usado em desenvolvimento moderno, especialmente com: Projetos em Node.js + TypeScript!

```bash
npm run dev
```

## 📄 Licença

Este projeto é livre para fins educacionais.

