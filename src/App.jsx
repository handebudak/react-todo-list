import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { AddTodo } from "./components/AddTodo";
import { Table } from "./components/Table";

function App() {
  const hande = 123;
  return (
    <main className="bg-red-50">
      <Header />
      <AddTodo />
      <Table />
    </main>
  );
}

export default App;
