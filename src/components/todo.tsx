import React, { useState } from "react";
import AddTodo from "./add-todo";
import TodoList from "./todo-list";

export type Todo = {
  id: string;
  description: string;
};

const Todo: React.FC = () => {
  const [items, setItems] = useState<Todo[]>([]);

  return (
    <div>
      <AddTodo setItems={setItems} />
      <TodoList items={items} />
    </div>
  );
};

export default Todo;
