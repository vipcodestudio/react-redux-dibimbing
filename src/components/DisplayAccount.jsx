import { useDispatch, useSelector } from 'react-redux';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import axios from 'axios';
import { fetchCatData, setData } from '../redux/slices/catSlice';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const DisplayAccount = () => {
  // const account = useSelector((state) => state.account);
  const cat = useSelector((state) => state.cat);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCatData());
  // }, []);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['catData'],
    queryFn: async () => {
      const res = await axios(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      );
      const data = await res.data;
      return data;
    },
  });

  return (
    <div>
      {/* <h1>Tabungan</h1>
      <p>Saldo: {account.tabungan}</p>
      <Deposit />
      <Withdraw /> */}

      {isLoading && (
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
        {data?.map((item) => (
          <div key={item.id} style={{ width: '200px', height: '200px' }}>
            <img src={item.url} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </div>

      {error && <p>Data tidak dapat di load</p>}

      <button onClick={refetch}>Refresh</button>
    </div>
  );
};

export default DisplayAccount;
