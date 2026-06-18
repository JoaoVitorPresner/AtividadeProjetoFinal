import Header from "../components/Header";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import styled from "styled-components";

import { buscarExercicios } from "../services/exerciciosService";
import { traducoesFixas } from "../utils/traducoes";

import CardExercicio from "../components/Exercicios/CardExercicio";

/* ========================== */

const Container = styled.main`
  padding: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 20px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

/* ========================== */

function getNome(item) {
  // tenta português primeiro
  const pt =
    item.translations?.find((t) => t.language === 7)?.name;

  // fallback inglês
  const en =
    item.translations?.find((t) => t.language === 2)?.name;

  const nomeFinal = pt || en || item.name;

  // aplica tradução fixa só se precisar
  return traducoesFixas[nomeFinal] || nomeFinal;
}

/* ========================== */

export default function Exercicios() {
  const [exercicios, setExercicios] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    async function carregar() {
      const data = await buscarExercicios();

      const lista = data.map((item) => ({
        id: item.id,
        nome: getNome(item),
        categoria: item.category?.name || "Outros",
      }));

      setExercicios(lista);
    }

    carregar();
  }, []);

  function favoritar(ex) {
  const fav =
    JSON.parse(localStorage.getItem("favoritos")) || [];

  if (fav.find((f) => f.id === ex.id)) {
    alert("Já favoritado");
    return;
  }

  localStorage.setItem(
    "favoritos",
    JSON.stringify([...fav, ex])
  );

  alert("Salvo!");
}

  const filtrados = exercicios.filter((e) =>
    e.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
  <>
    <Header />

    <Container>
      <h1>📚 Biblioteca de Exercícios</h1>

      <Input
        placeholder="Buscar exercício..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <Grid>
        {filtrados.map((item) => (
          <CardExercicio
            key={item.id}
            item={item}
            onFavoritar={favoritar}
          />
        ))}
      </Grid>
    </Container>

    <Footer />
  </>
);
  
}