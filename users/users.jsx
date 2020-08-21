import React,{useEffect,useState} from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsersHandler();
  }, []);
  const fetchUsersHandler = async () => {
    const response = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    setUsers([...response]);
  };

  return (
    <div>
        <ul>
        {users.map((users) => (
          <li key={users.id}>
            <p>{users.name}</p>
            <p>{users.username}</p>
            <p>{users.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;