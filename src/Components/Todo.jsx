import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const todo = () => {
  const [initial, setInitial] = useState("");
  const [data, setData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const getInput = (e) => {
    setInitial(e.target.value);
  };
  const getData = () => {
    let store = [...data, initial];
    setData(store);
    setInitial("");
  };
  const deleteTask = (indexValue) => {
    let filterData = data.filter((curElement, id) => {
      return id !== indexValue;
    });
    setData(filterData);
  };
  const startAnimation = () => {
    setIsHovered(true);
  };

  const stopAnimation = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 3000);
  };

  return (
    <div>
      <div className="todoList">
        <h1>ToDo List</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7692/7692809.png"
          className={`todoImage ${isHovered ? "animate" : ""}`}
          onMouseOver={startAnimation}
          onMouseLeave={stopAnimation}
        />
      </div>
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
        {data.map((curValue, index) => {
          return (
            <>
              <div className="taskData animate-task" key={index}>
                <p>{curValue}</p>
                <MdDelete id="deleteIcon" onClick={() => deleteTask(index)} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default todo;
