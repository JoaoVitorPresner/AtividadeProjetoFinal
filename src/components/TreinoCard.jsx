import styled from "styled-components";

const Card = styled.div`

  background: white;

  padding: 20px;

  border-radius: 12px;

  box-shadow:
    0 4px 12px
    rgba(0,0,0,.1);

  transition: .3s;

  &:hover{
    transform: translateY(-5px);
  }

`;

const Titulo = styled.h3`
  color: #2563eb;
  margin-bottom: 10px;
`;

const BotaoEditar = styled.button`

  background: #22c55e;

  color: white;

  border: none;

  padding: 10px;

  border-radius: 5px;

  margin-right: 10px;

`;

const BotaoExcluir = styled.button`

  background: #ef4444;

  color: white;

  border: none;

  padding: 10px;

  border-radius: 5px;

`;

export default function TreinoCard({
  treino,
  excluirTreino,
  editarTreino
}) {

  const dataFormatada =
    treino.data
      ? new Date(
          treino.data
        ).toLocaleDateString(
          "pt-BR"
        )
      : "-";

  return (

    <Card>

      <Titulo>
        🏃 {treino.nome}
      </Titulo>

      <p>
        📂 Categoria:
        {" "}
        {treino.categoria}
      </p>

      <p>
        ⏱️ Duração:
        {" "}
        {treino.duracao} min
      </p>

      <p>
        📅 Data:
        {" "}
        {dataFormatada}
      </p>

      <p>
        🔥 Calorias:
        {" "}
        {treino.calorias || 0}
        {" "}
        kcal
      </p>

      <br />

      <BotaoEditar
        onClick={() =>
          editarTreino(treino)
        }
      >
        ✏️ Editar
      </BotaoEditar>

      <BotaoExcluir
        onClick={() =>
          excluirTreino(treino.id)
        }
      >
        🗑️ Excluir
      </BotaoExcluir>

    </Card>
  );
}