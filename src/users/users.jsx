import { useState, useEffect } from "react";
import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteUser = async (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="users-list">
      {users.map((user) => (
        <div className="user-item" key={user.id}>
          <span>{user.name}</span>
          <span>{user.email}</span>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Users;