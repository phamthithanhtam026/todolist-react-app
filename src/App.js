import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
