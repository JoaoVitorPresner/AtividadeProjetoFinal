import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 500px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
`;



export default function TreinoForm({ adicionarTreino }) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [duracao, setDuracao] = useState("");
  const [data, setData] = useState("");

  function validar(nome) {
    if (!nome || nome.length < 3) {
      alert("Nome inválido");
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();

     if (!validar(nome)) return;

    if (nome.trim() === "") {
      alert("Digite o nome da atividade");
      return;
    }

    if (categoria === "") {
      alert("Selecione uma categoria");
      return;
    }

    if (Number(duracao) <= 0) {
      alert("Informe uma duração válida");
      return;
    }

    if(data === ""){
       alert("Selecione uma data");
       return;
    }

    const tabelaCalorias = {
      "Musculação": 7,
      "Corrida": 10,
      "Ciclismo": 8,
      "Caminhada": 5,
      "Natação": 9
    };

    const calorias = tabelaCalorias[categoria] *Number(duracao);

    adicionarTreino({
      id: Date.now(),
      nome,
      categoria,
      duracao,
      data,
      calorias
    });

    setNome("");
    setCategoria("");
    setDuracao("");
    setData("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome da atividade"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <Select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Selecione</option>
        <option>Musculação</option>
        <option>Corrida</option>
        <option>Ciclismo</option>
        <option>Caminhada</option>
        <option>Natação</option>
      </Select>

      <Input
        type="number"
        placeholder="Duração em minutos"
        value={duracao}
        onChange={(e) => setDuracao(e.target.value)}
      />

      <Input
      type="date"
      value={data}
      onChange={(e) => setData(e.target.value)}
      />

      <Button type="submit">
        Salvar Treino
      </Button>
    </Form>
  );
}