import CheckBox from './CheckBox'
import React from 'react'
import cn from 'classnames'
import { FaRegTrashAlt } from "react-icons/fa";


const TodoItem = ({todo, changeTodo, removeTodo}) => {
    
    return (
        <div 
        className='flex items-center justify-between mb-2 rounded-2xl bg-gray-800 p-5 w-full'
        
        >
        <button 
            className='flex items-center' 
            onClick={()=> changeTodo(todo._id)}>
                <CheckBox isCompleted={todo.isCompleted}/>
                    <span 
                        className={cn('ml-4 text-lg font-semibold',{    
                        'line-through': todo.isCompleted
                        })}
                    >
                    {todo.title}    
                    </span>
        </button>
        <button 
            onClick={()=> removeTodo(todo._id)}>
                <FaRegTrashAlt 
                    size={22}
                    className='text-gray-900 hover:text-pink-400
                    transition-colors ease-in-out duration-300'
                />
        </button>
        </div>
    )
}

export default TodoItem