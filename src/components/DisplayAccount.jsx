import { useDispatch, useSelector } from 'react-redux';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import axios from 'axios';
import { setData } from '../redux/slices/catSlice';
import { useEffect } from 'react';

const DisplayAccount = () => {
  const account = useSelector((state) => state.account);
  const cat = useSelector((state) => state.cat);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res = await axios(
      'https://api.thecatapi.com/v1/images/search?limit=10',
    );
    const data = res.data;
    dispatch(setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(cat);

  return (
    <div>
      <h1>Tabungan</h1>
      <p>Saldo: {account.tabungan}</p>
      <Deposit />
      <Withdraw />
    </div>
  );
};

export default DisplayAccount;
