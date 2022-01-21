import React, { useRef } from "react";
import { Todo } from "./todo";

type Props = {
  setItems: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const AddTodo: React.FC<Props> = ({ setItems }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    if (!textInputRef.current) return;
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    setItems((items: Todo[]) => [
      ...items,
      { id: Math.random().toString(), description: enteredText },
    ]);
    textInputRef.current.value = "";
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <input type="text" aria-label="description" ref={textInputRef} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
