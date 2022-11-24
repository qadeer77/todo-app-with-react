import React from "react";
import { BsFillBackspaceFill } from "react-icons/bs";

const TodoList = (props, index) => {
  return (
    <>
      <li key={index}>
        {props.text}
        <BsFillBackspaceFill
          className="icons"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </li>
    </>
  );
};

export default TodoList;
