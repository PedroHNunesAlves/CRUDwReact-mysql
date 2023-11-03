import { useState, useEffect } from "react";
import Container from "../src/components/container/Contain";
import axios from "axios";

import "./App.css";
import Table from "./components/TableData/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch {
      console.log("Erro");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Container edit={edit} setEdit={setEdit} getUsers={getUsers} />
      <Table users={users} setUsers={setUsers} setEdit={setEdit} />
    </>
  );
}

export default App;
