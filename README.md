# Sistema de Gerenciamento de Treinos

## Sobre o Projeto

O **Sistema de Gerenciamento de Treinos** é uma aplicação web desenvolvida com **React** que permite ao usuário gerenciar seus treinos físicos de forma simples e eficiente.

A aplicação possibilita o cadastro de atividades, consulta de exercícios via API externa, sistema de favoritos e cálculo estimado de calorias.

---

## Funcionalidades

✔ Cadastro de treinos personalizados
✔ Listagem de exercícios via API externa
✔ Sistema de busca de exercícios
✔ Adição de exercícios aos favoritos
✔ Cálculo automático de calorias
✔ Armazenamento de dados no LocalStorage
✔ Validação de formulários
✔ Interface responsiva

---

## Tecnologias Utilizadas

* React
* JavaScript (ES6+)
* HTML5
* CSS3
* Styled Components
* React Router DOM
* Fetch API

---

## Conceitos Aplicados

### Estrutura e Layout

* Uso de HTML semântico
* Grid Layout
* Responsividade com Media Queries

### Estilo e Componentização

* Styled Components
* Componentização reutilizável
* Organização em pastas

### Interatividade e Lógica

* Manipulação de eventos (onClick, onChange)
* Validação de formulários com JavaScript
* Uso de LocalStorage para persistência de dados
* Consumo de API externa com Fetch

### React

* Hooks: useState e useEffect
* Props para comunicação entre componentes
* Componentes reutilizáveis
* Rotas com React Router

---

## Estrutura do Projeto (Completa e Detalhada)

```bash
src/
 ├── components/                  # Componentes reutilizáveis da aplicação
 │    ├── Exercicios/
 │    │     └── CardExercicio.jsx   # Card de exibição de exercício
 │    │
 │    ├── Conquistas.jsx           # Exibe conquistas do usuário
 │    ├── Estatisticas.jsx         # Exibe estatísticas dos treinos
 │    ├── Footer.jsx               # Rodapé da aplicação
 │    ├── Header.jsx               # Cabeçalho com navegação
 │    ├── TreinoCard.jsx           # Card de exibição de treino
 │    └── TreinoForm.jsx           # Formulário de cadastro de treinos
 │
 ├── pages/                       # Páginas principais (rotas)
 │    ├── Cadastro.jsx            # Página de cadastro de treinos
 │    ├── Exercicios.jsx          # Página de listagem de exercícios
 │    ├── Favoritos.jsx           # Página de exercícios favoritos
 │    ├── Home.jsx                # Página inicial
 │    └── Treinos.jsx             # Página de listagem de treinos
 │
 ├── services/                    # Comunicação com API externa
 │    └── exerciciosService.js    # Busca exercícios via Fetch API
 │
 ├── styles/                      # Estilos globais
 │    └── GlobalStyles.js         # Reset e estilos globais
 │
 ├── utils/                       # Funções auxiliares
 │    └── traducoes.js            # Tradução de nomes de exercícios
 │
 ├── App.jsx                      # Componente principal da aplicação
 ├── main.jsx                     # Ponto de entrada (ReactDOM)
 └── routes.jsx                   # Configuração de rotas (React Router)
```

---

## Dependências do Projeto

O projeto utiliza as seguintes bibliotecas:

### Dependências principais

```bash
npm install react
npm install react-dom
npm install styled-components
npm install react-router-dom
```

---

### Ambiente de desenvolvimento (Vite)

```bash
npm install vite
```

---

## Como Executar o Projeto (Passo a Passo Completo)

### Clonar o repositório

```bash
git clone https://github.com/JoaoVitorPresner/AtividadeProjetoFinal.git
```

---

### Entrar na pasta do projeto

```bash
cd AtividadeProjetoFinal
```

---

### Instalar todas as dependências

```bash
npm install
```

Esse comando instala automaticamente:

* React
* React DOM
* Styled Components
* React Router DOM
* Outras dependências definidas no projeto

---

### Rodar o projeto

```bash
npm run dev
```

---

### Acessar no navegador

Abra:

```bash
http://localhost:5173/
```

---

## Requisitos do Sistema

Antes de rodar o projeto, você precisa ter instalado:

* Node.js (versão 16+)
* NPM

Verifique com:

```bash
node -v
npm -v
```

---

## Observações

* O projeto utiliza **LocalStorage** para salvar treinos e favoritos
* Os dados de exercícios são obtidos de uma **API externa**
* A navegação é feita com **React Router**
* A estilização é feita com **Styled Components**

---


## API Utilizada

* API de exercícios (Wger API)
* Dados consumidos em formato JSON

---

## Armazenamento

Os dados são armazenados localmente utilizando:

* LocalStorage (treinos e favoritos)

---

## Responsividade

A aplicação se adapta a diferentes tamanhos de tela utilizando:

* Grid Layout
* Media Queries

---

## Autor

Desenvolvido por **João Vitor Barros Presner** e **Guilhermy martineli g brenny**
Projeto acadêmico para avaliação final.

---

## 📌 Observações

Este projeto foi desenvolvido com foco em boas práticas de desenvolvimento front-end, incluindo organização de código, reutilização de componentes e aplicação de conceitos modernos do React.

---
