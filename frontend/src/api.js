const BASE_URL = 'http://localhost:5000';

export const analyzeChat = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await fetch(`${BASE_URL}/analyze`, { method: 'POST', body: formData });
  return await response.json();
};

export const downloadCSV = () => {
  window.open(`${BASE_URL}/download-report`);
};
