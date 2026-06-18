import styled from "styled-components";

const Rodape = styled.footer`

  background:#1f2937;

  color:white;

  text-align:center;

  padding:25px;

  margin-top:40px;

`;

export default function Footer() {
  return (
    <Rodape>

      <h3>
        🏋️ FitTrack
      </h3>

      <p>
        Sistema de Registro de Treinos
        e Atividades Físicas
      </p>

      <br />

      <small>
        © 2026 Todos os direitos reservados
      </small>

    </Rodape>
  );
}