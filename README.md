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

## 📦 Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/JoaoVitorPresner/AtividadeProjetoFinal.git
```

### 2️⃣ Acessar a pasta

```bash
cd AtividadeProjetoFinal
```

### 3️⃣ Instalar dependências

```bash
npm install
```

### 4️⃣ Rodar o projeto

```bash
npm run dev
```

---

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
