# 🐾 Sistema de Gerenciamento de Animais - Pet Shop (POO com TS)

Este projeto é um desafio de Programação Orientada a Objetos (POO), desenvolvido com JavaScript/TypeScript, para simular o funcionamento de um sistema de gerenciamento de um Pet Shop.

## 🚀 Objetivo

Implementar um sistema que gerencia diferentes tipos de animais, seus donos, cuidadores e veterinários, aplicando os principais conceitos da Programação Orientada a Objetos.

## 🧠 Conceitos de POO Abordados

✔️ Classes e Objetos  
✔️ Herança  
✔️ Abstração  
✔️ Encapsulamento  
✔️ Polimorfismo  
✔️ Interfaces  
✔️ Composição  
✔️ Injeção de Dependência

## 🧱 Estrutura do Sistema

### 1. Classe Abstrata `Animal`
- Atributos: `nome`, `idade`, `especie`
- Métodos:
  - `emitirSom()` (abstrato)
  - `alimentar()` (genérico)

### 2. Subclasses: `Cachorro`, `Gato`, `Papagaio`
- Herdam de `Animal`
- Implementam `emitirSom()` com comportamentos distintos
- Possuem métodos específicos (ex: `buscarBolinha()`)

### 3. Classe `Dono`
- Atributos: `nome`, `telefone`
- Associada a um ou mais animais (composição)

### 4. Interface `ICuidadorDeAnimais`
- Métodos:
  - `cuidar(animal: Animal)`
  - `darBanho(animal: Animal)`

### 5. Classe `Funcionario`
- Implementa `ICuidadorDeAnimais`

### 6. Classe `Veterinario`
- Método: `consultar(animal: Animal)`

### 7. Classe `PetShopService`
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

3. Execute o projeto:
```bash
npm start
```

📄 Licença

Este projeto é livre para fins educacionais.

