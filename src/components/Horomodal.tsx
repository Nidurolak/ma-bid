import React from 'react';
import logo from './logo.svg';
import '../App.css';
import { useQuery } from 'react-query';
import { getTest } from '../utils/api/api';


function Horomodal() {

    const bidOptions = [
        { id: 1, label: '전체', value: 'all' },
        { id: 2, label: '음식', value: 'food' },
    ];
    return (<div className="HoroModal_Back">
        <div className='HoroModal_Header'><h3 className='HoroModal_XMark HoroModal_XMark_OnMouse'>X</h3></div>
        asdasdasdsda
        <select>
            {bidOptions.map((val) => (
                <option key={val.id} value={val.value}>{val.label}</option>
            ))}
        </select>
    </div>)
}

export default Horomodal