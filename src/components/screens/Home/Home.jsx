import React, {useState} from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './createTodoField/CreateTodoField'


const data = [{
    _id:'sdjkhfbv',
    title: 'Finish',
    isCompleted: false,
},
{
    _id:'bgfd',
    title: 'Read next',
    isCompleted: false,
},
{
    _id:'nhgf',
    title: 'Send the finish',
    isCompleted: false,
},
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (_id) =>
    {
        const copy =[...todos]
        const current = copy.find (t => t._id === _id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (_id) =>
        setTodos ([...todos].filter(t=>t._id !== _id))
  
    return (
        <div className='text-white w-4/5 mx-auto'>
        <h1 className='font-bold text-center mb-8'>
            Todo Marat
        </h1>
        {todos.map(todo => (
        <TodoItem 
                key={todo.id} 
                todo={todo} 
                changeTodo={changeTodo}
                removeTodo={removeTodo}
                />
        ))}
        <CreateTodoField setTodos={setTodos}/>
        </div>
    )
}

export default Home