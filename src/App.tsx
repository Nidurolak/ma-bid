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
      <h1 className="text-2xl font-bold">Mabinogi Classic Font 적용!</h1>
      <p>이 문장은 글로벌 글꼴로 지정된 MabinogiClassic 글꼴을 사용합니다.</p>

      <Horomodal></Horomodal>
    </div>
  );
};

export default App;
