import { useDispatch, useSelector } from 'react-redux';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import axios from 'axios';
import { fetchCatData, setData } from '../redux/slices/catSlice';
import { useEffect } from 'react';

const DisplayAccount = () => {
  const account = useSelector((state) => state.account);
  const cat = useSelector((state) => state.cat);
  console.log(cat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatData());
  }, []);

  return (
    <div>
      {/* <h1>Tabungan</h1>
      <p>Saldo: {account.tabungan}</p>
      <Deposit />
      <Withdraw /> */}

      {cat.isLoading && (
        <div style={{ display: 'flex', gap: '10px' }}>
          <div
            style={{ width: '200px', height: '200px', backgroundColor: 'grey' }}
          ></div>
          <div
            style={{ width: '200px', height: '200px', backgroundColor: 'grey' }}
          ></div>
          <div
            style={{ width: '200px', height: '200px', backgroundColor: 'grey' }}
          ></div>
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {cat.data.map((item) => (
          <div key={item.id} style={{ width: '200px', height: '200px' }}>
            <img src={item.url} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </div>

      {cat.error !== '' && <p>Data tidak dapat di load</p>}
    </div>
  );
};

export default DisplayAccount;
