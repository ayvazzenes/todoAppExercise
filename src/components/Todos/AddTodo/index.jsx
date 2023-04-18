import React, { useEffect } from "react";
import { useState } from "react";

const initialValue = "";
const AddTodo = ({ todos, setTodos }) => {
  const [form, setForm] = useState(initialValue);
  useEffect(() => {
    setForm(initialValue);
  }, [todos]);

  const onChangeForm = (e) => {
    setForm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      return false;
    }

    setTodos([...todos, {id : Math.round(Math.random()*999999),form,isComplated:false}]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <div>
          
          <input
            value={form}
            onChange={onChangeForm}
            placeholder="What needs to be done?"
          />
        </div>
        
      </form>
    </div>
  );
};

export default AddTodo;
