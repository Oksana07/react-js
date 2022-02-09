import React, { useState } from 'react';
import Counter from './components/Counter';
import TransactionTable from '../src/components/TransactionTable/TransactionTable';

function App() {
  const [value, setValue] = useState('Текст в тнпути')
  
  return (
    <div className="App">
      <div>
        <TransactionTable/>
  </div>
     
  </div>
  );
}

export default App;
