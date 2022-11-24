import React, { useState } from "react";
import { Input, Button } from "antd";
import TodoList from "./todolist";

function Todo() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const eventItems = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteTodo = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <div className="main">
        <h1 style={{ textAlign: "center" }}>Todo-App</h1>
        <Input
          placeholder="Add Todo"
          value={inputList}
          style={{
            width: "350px",
            display: "flex",
            marginLeft: "500px",
            marginTop: "20px",
            border: "1px solid black",
          }}
          onChange={eventItems}
        />
        ;
        <Button
          onClick={listOfItems}
          type="primary"
          style={{ position: "absolute", left: "870px", top: "59px" }}
        >
          Add Todo
        </Button>
        {/* <Button type="primary" style={{position:"absolute", left:"970px", top:"59px"}}>Delete All Todo</Button> */}
        <ul>
          {Items.map((itemsValue, index) => {
            // return <li key={index}>{itemsValue}</li>
            return (
              <TodoList
                id={index}
                text={itemsValue}
                key={index}
                onSelect={deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
