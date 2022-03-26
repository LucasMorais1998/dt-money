import { useEffect } from 'react';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch(`http://localhost:3000/api/transactions`)
    .then(response => response.json())
    .then(data => console.log(data));

  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$8.000,00</td>
            <td>Renda</td>
            <td>25/03/2022</td>
          </tr>
          <tr>
            <td>Cinema</td>
            <td className="withdraw">-R$120,00</td>
            <td>Lazer</td>
            <td>15/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}