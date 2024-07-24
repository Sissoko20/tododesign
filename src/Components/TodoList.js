import React from "react";
import "../Styles/todoList.css";

import {
  FileAddFilled,
  DeleteFilled,
  EditFilled,
  SaveFilled,
} from "@ant-design/icons";
import { Space } from "antd";
import TodoItem from "./TodoItem";
function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <div className="todoList">
      {todos.map((todo, index) => (
        <li key={index}>
            
          <Space size="middle">
            <TodoItem
            index={index}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            todo={todo}
            />
            
            
          
           
                  </Space>
        </li>
      ))}
    </div>
  );
}
export default TodoList;
