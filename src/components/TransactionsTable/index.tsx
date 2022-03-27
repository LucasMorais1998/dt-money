import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface TransactionProps {
  id: number;
  title: string,
  type: string,
  category: string,
  amout: number,
  createAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get(`transactions`)
    .then(response => setTransactions(response.data.transactions));

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
          {transactions.map(({ id, title, type, category, amout, createAt } : TransactionProps) => (
            <tr key={id}>
              <td>{title}</td>
              <td className={type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(amout)}
              </td>
              <td>{category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(createAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}