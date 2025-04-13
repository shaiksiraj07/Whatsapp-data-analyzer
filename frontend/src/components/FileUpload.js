import React, { useState } from 'react';
import { analyzeChat, downloadCSV } from '../api';

const FileUpload = ({ setData }) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const data = await analyzeChat(file);
    setData(data);
    setLoading(false);
  };

  return (
    <div className="card">
      <input type="file" accept=".txt" onChange={handleFileChange} />
      {loading && <p>Analyzing...</p>}
      <button onClick={downloadCSV}>Download Report</button>
    </div>
  );
};

export default FileUpload;
