import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card, CardVariants } from "./Components/Card";
import { EventExemple } from "./Components/EventExemple";
import List from "./Components/List";
import { TodoItem } from "./Components/TodoItem";
import { TodoItemPage } from "./Components/TodoItemPage";
import { TodosPage } from "./Components/TodosPage";
import { UserItem } from "./Components/UserItem";
import { UserItemPage } from "./Components/UserItemPage";
import { UserPage } from "./Components/UserPage";
import { ITodo, IUser } from "./types/types";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavLink to='/users' style={{marginRight:30}}>Users</NavLink>
        <NavLink to='/todos'>Todo list</NavLink>

        <Routes>
          <Route path={"/users"} element={<UserPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />

          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/todos/:id"} element={<TodoItemPage />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
