import { useState, useEffect } from 'react';

export function useFetchUserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => setUsers(data.data));
  }, []);

  return users;
}
