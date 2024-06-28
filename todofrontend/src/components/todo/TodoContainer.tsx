import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5 "></div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-red-300 p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
