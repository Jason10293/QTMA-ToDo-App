//ToDoItem.jsx
import Trash from "./assets/trash.jsx";
import Edit from "./assets/Edit.jsx";

import { useState } from "react";
const ToDoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.title);
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (updatedText.trim()) {
      updateTodo(todo._id, { title: updatedText });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedText(todo.title);
  };

  const handleCompleted = (e) => {
    const newCompletionStatus = !isCompleted;
    setIsCompleted(newCompletionStatus);
    updateTodo(todo._id, { completed: newCompletionStatus });
  };

  return (
    <div className="tasks">
      <input
        className="check"
        type="checkbox"
        checked={isCompleted}
        onChange={handleCompleted}
      />
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
