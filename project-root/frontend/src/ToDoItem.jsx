//ToDoItem.jsx
import Trash from "./assets/trash.jsx";
import Edit from "./assets/Edit.jsx";

import { useState } from "react";
const ToDoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (updatedText.trim()) {
      updateTodo(todo._id, updatedText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="tasks">
      <input className="check" type="checkbox" />
      {isEditing ? (
        <>
          <input
            type="text"
            className="edit-input"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            autoFocus
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        </>
      ) : (
        <>
          <div className="integer-urna">{todo.title}</div>
          <button onClick={() => deleteTodo(todo._id)} className="trash">
            <Trash />
          </button>
          <button onClick={handleEdit} className="edit">
            <Edit />
          </button>
        </>
      )}
    </div>
  );
};

export default ToDoItem;
