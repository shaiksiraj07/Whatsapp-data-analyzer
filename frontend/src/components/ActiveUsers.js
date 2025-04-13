import React from 'react';

const ActiveUsers = ({ users }) => {
  return (
    <div className="card">
      <h3>Consistent Users (Active 4+ Days)</h3>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveUsers;
