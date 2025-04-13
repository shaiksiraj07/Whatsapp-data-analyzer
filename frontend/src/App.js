import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import Summary from './components/Summary';
import Charts from './components/Charts';
import ActiveUsers from './components/ActiveUsers';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="container">
      <h1>WhatsApp Chat Analyzer</h1>
      <FileUpload setData={setData} />
      {data && (
        <>
          <Summary data={data} />
          <Charts data={data} />
          <ActiveUsers users={data.consistent_users} />
        </>
      )}
    </div>
  );
}

export default App;
