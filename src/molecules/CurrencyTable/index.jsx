import React from 'react';
import Table from '../../atoms/Table';
import TableHeader from '../../atoms/TableHeader';
import TableRow from '../../atoms/TableRow';

const CurrencyTable = ({ data }) => {
  const headers = ['Currency', 'We Buy', 'Exchange Rate', 'We Sell'];

  return (
    <Table>
      <TableHeader headers={headers} />
      <tbody>
        {data.map((item) => (
          <TableRow key={item.currency}>
            <td>{item.currency}</td>
            <td>{item.weBuy}</td>
            <td>{item.exchangeRate}</td>
            <td>{item.weSell}</td>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default CurrencyTable;
