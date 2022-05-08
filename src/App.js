import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <React.Fragment>
        <div style={{
          minWidth: '900px!important',
          maxWidth: '900px',
          margin: '0 auto!important'
        }}>
          <div className='calc-container'>
            <Calculator />
            <Calculator />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;