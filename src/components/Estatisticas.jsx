import { useState } from "react";
import styled from "styled-components";

const Dashboard = styled.div`

  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(220px, 1fr));

  gap: 20px;

  margin-bottom: 30px;

`;

const Card = styled.div`

  background: white;

  padding: 25px;

  border-radius: 12px;

  box-shadow:
    0 4px 12px
    rgba(0,0,0,.1);

  text-align: center;

`;

const TituloCard = styled.h3`

  color: #2563eb;

  margin-bottom: 10px;

`;

const Valor = styled.h2`

  color: #1f2937;

`;

const MetaContainer = styled.div`

  background: white;

  padding: 25px;

  border-radius: 12px;

  box-shadow:
    0 4px 12px
    rgba(0,0,0,.1);

`;

export default function Estatisticas({
  treinos
}) {

  const total =
    treinos.length;

  const tempoTotal =
    treinos.reduce(
      (acc, treino) =>
        acc +
        Number(treino.duracao),
      0
    );

  const media =
    total > 0
      ? (
          tempoTotal / total
        ).toFixed(1)
      : 0;

  const [meta, setMeta] =
    useState(

      Number(
        localStorage.getItem(
          "metaSemanal"
        )
      ) || 5

    );

  function alterarMeta(e){

    const valor =
      Number(e.target.value);

    setMeta(valor);

    localStorage.setItem(
      "metaSemanal",
      valor
    );
  }

  const contadorCategorias = {};

  treinos.forEach((treino)=>{

    contadorCategorias[
      treino.categoria
    ] =
      (contadorCategorias[
        treino.categoria
      ] || 0) + 1;

  });

  let categoriaFavorita =
    "Nenhuma";

  if(
    Object.keys(
      contadorCategorias
    ).length > 0
  ){

    categoriaFavorita =
      Object.keys(
        contadorCategorias
      ).reduce((a,b)=>

        contadorCategorias[a] >
        contadorCategorias[b]
          ? a
          : b

      );

  }

  const porcentagem =
    Math.min(
      (total / meta) * 100,
      100
    );

  return (
    <>

      <Dashboard>

        <Card>

          <TituloCard>
            💪 Treinos
          </TituloCard>

          <Valor>
            {total}
          </Valor>

        </Card>

        <Card>

          <TituloCard>
            ⏱️ Tempo Total
          </TituloCard>

          <Valor>
            {tempoTotal} min
          </Valor>

        </Card>

        <Card>

          <TituloCard>
            📊 Média
          </TituloCard>

          <Valor>
            {media} min
          </Valor>

        </Card>

        <Card>

          <TituloCard>
            🏆 Favorita
          </TituloCard>

          <Valor>
            {categoriaFavorita}
          </Valor>

        </Card>

      </Dashboard>

      <MetaContainer>

        <h3>
          🎯 Meta Semanal
        </h3>

        <br />

        <input
          type="number"
          value={meta}
          min="1"
          onChange={
            alterarMeta
          }
        />

        <br />
        <br />

        <p>

          {total}
          {" / "}
          {meta}
          {" treinos"}

        </p>

        <br />

        <div
          style={{
            width:"100%",
            height:"20px",
            background:"#e5e7eb",
            borderRadius:"10px",
            overflow:"hidden"
          }}
        >

          <div
            style={{
              width:`${porcentagem}%`,
              height:"100%",
              background:"#22c55e"
            }}
          />

        </div>

        <br />

        <strong>

          {porcentagem.toFixed(0)}%

        </strong>

      </MetaContainer>

    </>
  );
}