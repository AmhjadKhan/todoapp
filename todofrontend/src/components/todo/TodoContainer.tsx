import TodoCard from "./TodoCard";
import { Button } from "../ui/button";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <Button className="bg-primary-gradient">Add todo</Button>
        <Button className="bg-primary-gradient">Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
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
