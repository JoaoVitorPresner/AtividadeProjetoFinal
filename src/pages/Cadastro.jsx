import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TreinoForm from "../components/TreinoForm";

export default function Cadastro() {

  const [treinos, setTreinos] = useState(
    JSON.parse(localStorage.getItem("treinos")) || []
  );

  function adicionarTreino(novoTreino) {

    const novosTreinos = [
      ...treinos,
      novoTreino
    ];

    setTreinos(novosTreinos);

    localStorage.setItem(
      "treinos",
      JSON.stringify(novosTreinos)
    );

    alert("Treino cadastrado!");
  }

  return (
    <>
      <Header />

      <main
        style={{
          padding: "30px"
        }}
      >
        <h1>Cadastrar Treino</h1>

        <br />

        <TreinoForm
          adicionarTreino={adicionarTreino}
        />
      </main>

      <Footer />
    </>
  );
}