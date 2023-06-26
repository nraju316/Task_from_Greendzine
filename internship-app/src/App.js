import React, { useState } from 'react';
import { useFetchUserData } from './api';
import './styles.css';

function App() {
  const users = useFetchUserData();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="user-list">
        {filteredUsers.map(user => (
          <div className="user-item" key={user.id}>
            <p className="user-id">ID: {user.id}</p>
            <div className="user-box">
              <img src={user.avatar} alt="Avatar" className="user-avatar" />
            </div>
            <p className="user-name">{user.first_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
