import Plus from "./assets/Plus";

const ToDoForm = ({ newItem, setNewItem, addTodo }) => {
  return (
    <div className="todo">
      <form className="new-task" onSubmit={addTodo}>
        <input
          type="text"
          className="input"
          placeholder="todo"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="button">
          <Plus />
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
