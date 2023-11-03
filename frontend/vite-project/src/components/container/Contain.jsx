import React from "react";
import Form from "../FormControl/Form";

const container = ({ edit, setEdit, getUsers }) => {
  return (
    <div>
      <Form edit={edit} setEdit={setEdit} getUsers={getUsers} />
    </div>
  );
};

export default container;
