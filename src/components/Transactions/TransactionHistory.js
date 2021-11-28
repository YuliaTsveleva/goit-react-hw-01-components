import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  const headNamesArray = [
    Object.keys(items[0])[1].charAt(0).toUpperCase() +
      Object.keys(items[0])[1].slice(1),
    Object.keys(items[0])[2].charAt(0).toUpperCase() +
      Object.keys(items[0])[2].slice(1),
    Object.keys(items[0])[3].charAt(0).toUpperCase() +
      Object.keys(items[0])[3].slice(1),
  ];
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableHead}>
        <tr>
          <th className={s.headCell}>{headNamesArray[0]}</th>
          <th className={s.headCell}>{headNamesArray[1]}</th>
          <th className={s.headCell}>{headNamesArray[2]}</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={s.bodyCell}>{item.type}</td>
            <td className={s.bodyCell}>{item.amount}</td>
            <td className={s.bodyCell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
