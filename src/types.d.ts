type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type addTodo = (newTodo: string) => void;
