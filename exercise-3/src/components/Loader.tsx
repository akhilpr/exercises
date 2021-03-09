import React from 'react';
import "./loader.css";

const Loader : React.FC = () => {
    return <div className='page'>
    <div className='container'>
      <div className='loader'>
        <div className='ball first'></div>
        <div className='ball second'></div>
        <div className='ball third'></div>
      </div>
    </div>
    </div>
}

export default Loader