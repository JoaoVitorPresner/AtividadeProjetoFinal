import { useEffect, useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TreinoCard from "../components/TreinoCard";
import Estatisticas from "../components/Estatisticas";
import Conquistas from "../components/Conquistas";

export default function Treinos() {

  const [treinos, setTreinos] = useState([]);
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todos");
  const [ordenacao, setOrdenacao] = useState("data");

  useEffect(() => {

    // LOCAL STORAGE
    const dados = JSON.parse(localStorage.getItem("treinos")) || [];
    setTreinos(dados);

    // FETCH API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        console.log("Dados da API:", data);
      })
      .catch(error => {
        console.error("Erro ao buscar API:", error);
      });

  }, []);

  function excluirTreino(id) {
    const confirmar = window.confirm(
      "Deseja realmente excluir este treino?"
    );

    if (!confirmar) return;

    const novaLista = treinos.filter(
      treino => treino.id !== id
    );

    setTreinos(novaLista);

    localStorage.setItem(
      "treinos",
      JSON.stringify(novaLista)
    );
  }

  function editarTreino(treino) {
    const novoNome = prompt(
      "Novo nome:",
      treino.nome
    );

    if (!novoNome) return;

    const atualizados = treinos.map((item) =>
      item.id === treino.id
        ? { ...item, nome: novoNome }
        : item
    );

    setTreinos(atualizados);

    localStorage.setItem(
      "treinos",
      JSON.stringify(atualizados)
    );
  }

  function exportarJSON() {
    const json = JSON.stringify(treinos, null, 2);

    const blob = new Blob([json], {
      type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "treinos.json";
    link.click();
  }

  const treinosFiltrados = treinos.filter((treino) => {
    const nomeOk = treino.nome
      .toLowerCase()
      .includes(busca.toLowerCase());

    const categoriaOk =
      categoriaFiltro === "Todos" ||
      treino.categoria === categoriaFiltro;

    return nomeOk && categoriaOk;
  });

  const listaOrdenada = [...treinosFiltrados];

  if (ordenacao === "nome") {
    listaOrdenada.sort((a, b) =>
      a.nome.localeCompare(b.nome)
    );
  }

  if (ordenacao === "duracao") {
    listaOrdenada.sort((a, b) =>
      b.duracao - a.duracao
    );
  }

  if (ordenacao === "data") {
    listaOrdenada.sort((a, b) =>
      new Date(b.data) - new Date(a.data)
    );
  }

  return (
    <>
      <Header />

      <main style={{ padding: "30px" }}>
        <h1>Meus Treinos</h1>

        <Estatisticas treinos={treinos} />
        <Conquistas treinos={treinos} />

        <button onClick={exportarJSON}>
          Exportar Dados
        </button>

        <input
          type="text"
          placeholder="Pesquisar treino..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select
          value={categoriaFiltro}
          onChange={(e) =>
            setCategoriaFiltro(e.target.value)
          }
        >
          <option>Todos</option>
          <option>Musculação</option>
          <option>Corrida</option>
          <option>Ciclismo</option>
          <option>Caminhada</option>
          <option>Natação</option>
        </select>

        <select
          value={ordenacao}
          onChange={(e) =>
            setOrdenacao(e.target.value)
          }
        >
          <option value="data">Data</option>
          <option value="nome">Nome</option>
          <option value="duracao">Duração</option>
        </select>

        <div className="gridTreinos">
          {listaOrdenada.length > 0 ? (
            listaOrdenada.map((treino) => (
              <TreinoCard
                key={treino.id}
                treino={treino}
                excluirTreino={excluirTreino}
                editarTreino={editarTreino}
              />
            ))
          ) : (
            <p>Nenhum treino encontrado.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}