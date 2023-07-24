const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
      <div className="todo"
      style={{
        textDecorationLine: todo.isCompleted ?"line-through" :"",
        backgroundColor: todo.isCompleted ?"green" :"",
        color: todo.isCompleted ?"#f8f8f2" :""
      }}
      >
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete"style={{
        backgroundColor: todo.isCompleted ?"#6272a4" :"",
            color: todo.isCompleted ?"#f8f8f2" :""
          }} onClick={() => completeTodo(todo.id)}>completar</button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
        </div>
      </div>
    );
  };
  
  export default Todo;
  