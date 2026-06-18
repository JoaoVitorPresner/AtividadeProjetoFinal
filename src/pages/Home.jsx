import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMemo } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Hero = styled.main`
  padding: 80px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Titulo = styled.h1`
  font-size: 3rem;
  color: #2563eb;
`;

const Subtitulo = styled.h2`
  margin-top: 20px;
  color: #374151;
`;

const Botoes = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Botao = styled(Link)`
  background: #2563eb;
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: bold;
  transition: .3s;

  &:hover{
    opacity: .9;
  }
`;

const BotaoSecundario = styled(Link)`
  background: #1f2937;
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: bold;
  transition: .3s;

  &:hover{
    opacity: .9;
  }
`;

const BotaoTerciario = styled(Link)`
  background: #18067c;
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: bold;
  transition: .3s;

  &:hover{
    opacity: .9;
  }
`;

const Secao = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const TituloSecao = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #2563eb;
`;

const Grid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(250px, 1fr));

  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;

  padding: 25px;

  border-radius: 12px;

  box-shadow:
    0 4px 12px rgba(0,0,0,.1);

  text-align: center;

  transition: .3s;

  &:hover{
    transform: translateY(-5px);
  }
`;

const Passo = styled(Card)`
  font-size: 1.1rem;
`;

export default function Home() {

  const treinos =
    JSON.parse(
      localStorage.getItem("treinos")
    ) || [];

  const totalTreinos =
    treinos.length;

  const tempoTotal =
    treinos.reduce(
      (acc, treino) =>
        acc + Number(treino.duracao),
      0
    );

  const categoriaFavorita =
    useMemo(() => {

      if (treinos.length === 0)
        return "Nenhuma";

      const contador = {};

      treinos.forEach((treino) => {

        contador[
          treino.categoria
        ] =
          (contador[
            treino.categoria
          ] || 0) + 1;

      });

      return Object.keys(
        contador
      ).reduce((a, b) =>

        contador[a] >
        contador[b]
          ? a
          : b

      );

    }, [treinos]);

  const frases = [

    "🔥 O sucesso é a soma de pequenos esforços repetidos todos os dias.",

    "💪 Treine hoje para ser melhor amanhã.",

    "🏆 Disciplina supera motivação.",

    "🚀 Grandes resultados começam com pequenas atitudes.",

    "⚡ Cada treino te aproxima do seu objetivo."

  ];

  const fraseMotivacional =
    frases[
      Math.floor(
        Math.random() *
        frases.length
      )
    ];

  return (
    <>
      <Header />

      <Hero>

        <Titulo>
          🏋️ FitTrack
        </Titulo>

        <p>
          Sistema de Registro de Treinos
          e Atividades Físicas
        </p>

        <Subtitulo>
          Controle seus treinos,
          acompanhe seu desempenho
          e alcance suas metas.
        </Subtitulo>

        <Botoes>

          <Botao to="/cadastro">
            Começar Agora
          </Botao>

          <BotaoSecundario
            to="/treinos"
          >
            Ver Treinos
          </BotaoSecundario>

          <BotaoTerciario
            to="/favoritos"
          >
            Ver Favoritos
          </BotaoTerciario>

        </Botoes>

      </Hero>

      <Secao>

        <TituloSecao>
          Funcionalidades
        </TituloSecao>

        <Grid>

          <Card>
            <h3>📝 Cadastro</h3>

            <p>
              Registre seus treinos
              de forma rápida e simples.
            </p>
          </Card>

          <Card>
            <h3>📊 Estatísticas</h3>

            <p>
              Acompanhe sua evolução
              e metas semanais.
            </p>
          </Card>

          <Card>
            <h3>💪 Exercícios</h3>

            <p>
              Consulte exercícios
              utilizando API externa.
            </p>
          </Card>

        </Grid>

      </Secao>

      <Secao>

        <TituloSecao>
          Seu Resumo
        </TituloSecao>

        <Grid>

          <Card>
            <h3>💪 Treinos</h3>
            <h2>{totalTreinos}</h2>
          </Card>

          <Card>
            <h3>⏱️ Tempo Total</h3>
            <h2>{tempoTotal} min</h2>
          </Card>

          <Card>
            <h3>🏆 Favorita</h3>
            <h2>{categoriaFavorita}</h2>
          </Card>

        </Grid>

      </Secao>

      <Secao>

        <TituloSecao>
          Motivação do Dia
        </TituloSecao>

        <Card>
          <h3>
            {fraseMotivacional}
          </h3>
        </Card>

      </Secao>

      <Secao>

        <TituloSecao>
          Como Funciona
        </TituloSecao>

        <Grid>

          <Passo>
            <h2>1️⃣</h2>

            <p>
              Cadastre seus treinos.
            </p>
          </Passo>

          <Passo>
            <h2>2️⃣</h2>

            <p>
              Acompanhe estatísticas
              e desempenho.
            </p>
          </Passo>

          <Passo>
            <h2>3️⃣</h2>

            <p>
              Alcance suas metas
              semanais.
            </p>
          </Passo>

        </Grid>

      </Secao>

      <Footer />
    </>
  );
}