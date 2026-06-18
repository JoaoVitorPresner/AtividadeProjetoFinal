import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Categoria = styled.p`
  color: #666;
  font-size: 14px;
`;

const Btn = styled.button`
  margin-top: 10px;
  background: #f59e0b;
  border: none;
  padding: 10px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;

export default function CardExercicio({ item, onFavoritar }) {
  return (
    <Card>
      <h3>💪 {item.nome}</h3>
      <Categoria>{item.categoria}</Categoria>
      <p>ID: {item.id}</p>

      <Btn onClick={() => onFavoritar(item)}>
        ⭐ Favoritar
      </Btn>
    </Card>
  );
}