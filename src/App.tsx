import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import { getTest } from './utils/api/api';
import Horomodal from './components/Horomodal';

function App() {

  const { isLoading } = useQuery(["testkey", { page: 1, size: 5 }], () => getTest({ page: 1, size: 5 }), {
    onSuccess: ({ data }) => {
      console.log(data)
    },
  }


  )

  return (
    <div className="font-mabinogi Mid_Aligin Full_WH">
      <h1 className="text-2xl font-bold">호로 서치!</h1>
      <p>어느 녀석이 내 물건에서 1빼기 하고있나!</p>

      <Horomodal></Horomodal>
    </div>
  );
};

export default App;
