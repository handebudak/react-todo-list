export const Todo = ({ todo, buttonOnClick, makeItDone }) => {
  return (
    <div className="flex justify-between gap-8 p-4 bg-red-100">
      <span> {todo.id}</span>
      <div> {todo.status} </div>
      <h2> {todo.name}</h2>
      <span> {todo.date}</span>
      <button onClick={(e) => buttonOnClick(e, todo)}>Delete</button>
      <button onClick={(e) => makeItDone(e, todo)}> Done</button>
    </div>
  );
};
