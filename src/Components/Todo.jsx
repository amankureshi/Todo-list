import React, { useState } from "react";
const Todo = () => {
  const [initial, setInitial] = useState();
  const [data, setData] = useState([]);
  const getInput = (e) => {
    setInitial(e.target.value);
  };
  const getData = () => {
    console.log(initial);
    let store = [...data, initial];
    setData(store);
    setInitial("");
  };
  return (
    <div>
      <div className="container">
        <div className="inputTask">
          <input
            type="text"
            placeholder="Enter your task"
            onChange={getInput}
            value={initial}
          />
          <button className="add-btn" onClick={getData}>
            Add
          </button>
        </div>
        <h1>{data}</h1>
      </div>
    </div>
  );
};

export default Todo;
