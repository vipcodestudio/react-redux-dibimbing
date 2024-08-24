import { useDispatch } from 'react-redux';
import { deposit } from '../redux/slices/accountSlice';

const Deposit = () => {
  const dispatch = useDispatch();
  const handleDeposit = (event) => {
    event.preventDefault();
    const amount = event.target.deposit.value;
    dispatch(deposit(parseInt(amount)));
    event.target.deposit.value = 0;
  };
  return (
    <div>
      <h4>Deposit</h4>
      <form onSubmit={handleDeposit}>
        <input type="number" name="deposit" />
        <button type="submit">Deposit</button>
      </form>
    </div>
  );
};

export default Deposit;
