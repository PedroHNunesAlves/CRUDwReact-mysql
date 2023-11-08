import React, { useRef, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Form = ({ getUsers, edit, setEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (edit) {
      const user = ref.current;
      user.nome.value = edit.nome;
      user.email.value = edit.email;
      user.telefone.value = edit.telefone;
      user.dataNasc.value = edit.dataNasc;
      user.cidade.value = edit.cidade;
      user.estado.value = edit.estado;
    }
  }, [edit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.nome.value || !user.email.value || !user.telefone.value || !user.dataNasc.value || !user.cidade.value || !user.estado.value) {
      return window.alert("Preencha todos os campos!");
    }

    if (edit) {
      await axios.put("http://localhost:8800/" + edit.id, {
        nome: user.nome.value,
        email: user.email.value,
        telefone: user.telefone.value,
        dataNasc: user.dataNasc.value,
        cidade: user.cidade.value,
        estado: user.estado.value,
      });
    } else {
      await axios.post("http://localhost:8800", {
        nome: user.nome.value,
        email: user.email.value,
        telefone: user.telefone.value,
        dataNasc: user.dataNasc.value,
        cidade: user.cidade.value,
        estado: user.estado.value,
        id: uuidv4(),
      });
    }

    user.nome.value = "";
    user.email.value = "";
    user.telefone.value = "";
    user.dataNasc.value = "";
    user.cidade.value = "";
    user.estado.value = "";

    setEdit(null);
    getUsers();
  };

  return (
    <form ref={ref} onSubmit={handleSubmit} className="initForm">
      <div className="textfield">
        <label>Nome:</label>
        <input type="text" name="nome" />
      </div>
      <div className="textfield">
        <label>E-mail:</label>
        <input type="text" name="email" />
      </div>
      <div className="textfield">
        <label>Telefone:</label>
        <input type="text" name="telefone" />
      </div>
      <div className="textfield">
        <label>Data de Nascimento:</label>
        <input type="date" name="dataNasc" />
      </div>
      <div className="textfield">
        <label>Cidade:</label>
        <input type="text" name="cidade" />
      </div>
      <div className="textfield">
        <label>Estado:</label>
        <input type="text" name="estado" />
      </div>

      <button type="submit">Cadastrar!</button>
    </form>
  );
};

export default Form;
