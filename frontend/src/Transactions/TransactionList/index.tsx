import { Table, THead, TBody, Th, Td } from "./styles";
import transactions from "../transactions.json";

const TransactionList = () => {
  return (
    <Table>
      <THead>
        <tr>
          <Th>Name</Th>
          <Th>Amount (£)</Th>
          <Th>Categories</Th>
        </tr>
      </THead>
      <TBody>
        {transactions.map(({ id, name, amount, categories }) => (
          <tr key={id}>
            <Td>{name}</Td>
            <Td isCurrency>{amount.toFixed(2)}</Td>
            <Td>{categories.join(", ")}</Td>
          </tr>
        ))}
      </TBody>
    </Table>
  );
};
export default TransactionList;
