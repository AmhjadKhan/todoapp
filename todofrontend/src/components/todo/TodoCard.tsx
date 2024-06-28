
const TodoCard = () => {
  return (
    <div>
      <div className="bg-white rounded-md flex justify-between items-center p-3">
        <input type="checkbox" name="" id="" />
        <p className="font-semibold">Todo Title</p>
        <p>Time</p>
        <p>Descraption</p>
        <div className="space-x-5">
        <button>del</button>
        <button>edit</button>
        </div>
      </div>
    </div>
  )
}

export default TodoCard
