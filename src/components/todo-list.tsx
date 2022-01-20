import React from "react";
import { Todo } from "./todo";

type Props = {
  items: Todo[];
};

const TodoList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
