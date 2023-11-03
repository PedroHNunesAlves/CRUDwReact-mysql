import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";

const Table = ({ users, setUsers, setEdit }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/${id}`);
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      setEdit(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (item) => {
    setEdit(item);
    console.log(item);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome:</th>
          <th>E-mail:</th>
          <th>Telefone:</th>
          <th>Data Nascimento:</th>
          <th>Cidade:</th>
          <th>Estado:</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td>{item.nome}</td>
            <td>{item.email}</td>
            <td>{item.telefone}</td>
            <td>{item.dataNasc}</td>
            <td>{item.cidade}</td>
            <td>{item.estado}</td>
            <td className="icons">
              <FaEdit onClick={() => handleEdit(item)} />
            </td>
            <td className="icons">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
