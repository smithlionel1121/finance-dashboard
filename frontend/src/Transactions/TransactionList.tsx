import data from "./transactions.json";

const TransactionList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Categories</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, amount, categories }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{categories.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionList;
