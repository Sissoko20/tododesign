import React, { useState } from "react";
import "../Styles/TodoItem.css";
import { List, Button, Input } from "antd";
import { DeleteFilled, SaveOutlined, EditFilled } from "@ant-design/icons";

function TodoItem({ todo, index, removeTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(index, newValue);
    setIsEditing(false);
  };

  return (
    <List.Item
      className="todoItem"
      actions={[
        !isEditing ? (
          <EditFilled onClick={handleEdit} />
        ) : (
          <SaveOutlined onClick={handleSave} />
        ),
        <DeleteFilled onClick={() => removeTodo(index)} />,
      ]}
    >
      {isEditing ? (
        <Input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
      ) : (
        <List.Item.Meta title={todo.text} />
      )}
    </List.Item>
  );
}

export default TodoItem;
