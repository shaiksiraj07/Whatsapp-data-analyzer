import React from 'react';

const Summary = ({ data }) => {
  return (
    <div className="summary">
      <div className="card">Total Active Users: {data.total_active_users}</div>
      <div className="card">Total Joined Users: {data.total_joined_users}</div>
    </div>
  );
};

export default Summary;
