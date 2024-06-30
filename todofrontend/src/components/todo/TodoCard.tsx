import { Button } from "../ui/button"

type TTodoCardProps ={
   id:string;
   title:string;
   description:string;   
}

const TodoCard = ({title,description}: TTodoCardProps) => {
  return (
    <div>
      <div className="bg-white rounded-md flex justify-between items-center p-3 border">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">{title}</p>
        {/* <p>Time</p> */}
        <p>{description}</p>
        <div className="space-x-5">
        <Button className="bg-red-700">Del</Button>
        <Button className="bg-[#5C53FE]">edit</Button>
        </div>
      </div>
    </div>
  )
}

export default TodoCard
