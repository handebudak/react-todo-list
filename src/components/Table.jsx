import { useState } from "react";
import data from "../data.json";
import { Todo } from "./Todo";

export const Table = () => {
  const [todoItems, setTodoItems] = useState(data.items);

  const buttonOnClick = (e, todo) => {
    const deletedTodoItems = todoItems.filter((item) => item.id !== todo.id);
    setTodoItems(deletedTodoItems);
  };

  const makeItDone = (e, todo) => {
    const newItem = todoItems.find((item) => item.id == todo.id);
    newItem.status = "Done";
    const newArr = todoItems.filter((item) => item.id !== todo.id);
    newArr.push(newItem);
    setTodoItems(
      newArr.sort(function (a, b) {
        return a.id - b.id;
      })
    );
  };

  return (
    <div className="mt-4 border border-red-500 flex flex-col gap-2">
      {todoItems.map((todo, index) => {
        return (
          <Todo
            key={todo.id + index}
            todo={todo}
            buttonOnClick={buttonOnClick}
            makeItDone={makeItDone}
          />
        );
      })}
    </div>
  );
};
