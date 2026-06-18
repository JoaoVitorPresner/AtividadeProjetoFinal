export default function Conquistas({
  treinos
}) {

  const total =
    treinos.length;

  const tempoTotal =
    treinos.reduce(
      (acc, treino)=>

        acc +
        Number(
          treino.duracao
        ),

      0
    );

  return (

    <div>

      <h2>Conquistas</h2>

      {total >= 1 &&
        <p>
          🏅 Primeiro Treino
        </p>
      }

      {total >= 10 &&
        <p>
          🏅 10 Treinos
        </p>
      }

      {tempoTotal >= 1000 &&
        <p>
          🏅 1000 Minutos
        </p>
      }

    </div>

  );
}