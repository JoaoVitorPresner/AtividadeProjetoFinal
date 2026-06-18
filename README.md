# 💪 FitTrack - Sistema de Treinos

## 📌 Sobre o Projeto

O **FitTrack** é uma aplicação web desenvolvida com **React** que permite ao usuário gerenciar seus treinos físicos de forma simples e eficiente.

A aplicação possibilita o cadastro de atividades, consulta de exercícios via API externa, sistema de favoritos e cálculo estimado de calorias.

---

## 🚀 Funcionalidades

✔ Cadastro de treinos personalizados
✔ Listagem de exercícios via API externa
✔ Sistema de busca de exercícios
✔ Adição de exercícios aos favoritos
✔ Cálculo automático de calorias
✔ Armazenamento de dados no LocalStorage
✔ Validação de formulários
✔ Interface responsiva

---

## 🛠️ Tecnologias Utilizadas

* React
* JavaScript (ES6+)
* HTML5
* CSS3
* Styled Components
* React Router DOM
* Fetch API

---

## 🧠 Conceitos Aplicados

### 📐 Estrutura e Layout

* Uso de HTML semântico
* Grid Layout
* Responsividade com Media Queries

### 🎨 Estilo e Componentização

* Styled Components
* Componentização reutilizável
* Organização em pastas

### ⚙️ Interatividade e Lógica

* Manipulação de eventos (onClick, onChange)
* Validação de formulários com JavaScript
* Uso de LocalStorage para persistência de dados
* Consumo de API externa com Fetch

### ⚛️ React

* Hooks: useState e useEffect
* Props para comunicação entre componentes
* Componentes reutilizáveis
* Rotas com React Router

---

## 📂 Estrutura do Projeto

```
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── Footer.jsx
 │    ├── TreinoForm.jsx
 │    └── Exercicios/
 │         └── CardExercicio.jsx
 │
 ├── pages/
 │    ├── Cadastro.jsx
 │    ├── Exercicios.jsx
 │    └── Favoritos.jsx
 │
 ├── services/
 │    └── exerciciosService.js
 │
 ├── utils/
 │    └── traducoes.js
 │
 ├── App.jsx
 └── main.jsx
```

---

⚙️ Dependências Utilizadas

Antes de rodar o projeto, é importante garantir que todas as dependências estão instaladas:

📦 Principais bibliotecas
npm install react
npm install react-dom
npm install styled-components
npm install react-router-dom
📦 Dependências de desenvolvimento (caso use Vite)
npm install vite
🚀 Como Executar o Projeto (Passo a Passo Completo)
1️⃣ Clonar o repositório
git clone https://github.com/JoaoVitorPresner/AtividadeProjetoFinal.git
2️⃣ Acessar a pasta do projeto
cd AtividadeProjetoFinal
3️⃣ Instalar TODAS as dependências
npm install

Esse comando irá instalar automaticamente:

React
React DOM
Styled Components
React Router DOM
Outras dependências do projeto
4️⃣ Rodar o projeto em ambiente de desenvolvimento
npm run dev
5️⃣ Acessar no navegador

Após rodar, o terminal mostrará algo como:

http://localhost:5173/

Abra esse endereço no navegador.

📌 Requisitos para Rodar

Antes de tudo, você precisa ter instalado:

Node.js (versão 16 ou superior)
NPM (geralmente já vem com Node)

Para verificar:

node -v
npm -v
💡 Observação Importante

Não é necessário instalar as dependências manualmente uma por uma, pois o comando:

npm install

já instala tudo automaticamente com base no arquivo package.json.
## 🌐 API Utilizada

* API de exercícios (Wger API)
* Dados consumidos em formato JSON

---

## 💾 Armazenamento

Os dados são armazenados localmente utilizando:

* LocalStorage (treinos e favoritos)

---

## 📱 Responsividade

A aplicação se adapta a diferentes tamanhos de tela utilizando:

* Grid Layout
* Media Queries

---

## 👨‍💻 Autor

Desenvolvido por **João Vitor**
Projeto acadêmico para avaliação final.

---

## 📌 Observações

Este projeto foi desenvolvido com foco em boas práticas de desenvolvimento front-end, incluindo organização de código, reutilização de componentes e aplicação de conceitos modernos do React.

---
