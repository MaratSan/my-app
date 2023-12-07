import React, {useState} from 'react'


const CreateTodoForm = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((prev) => [
            {
                _id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,
        ]);

        setTitle(" ");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='flex items-center justify-between mb-2 rounded-2xl border-gray-800 border-2 px-5 py-3 w-full mt-20'
        >
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='bg-transparent w-full border-none outline-none'
                placeholder='Add a task'
            />
            <input type='submit' className='hidden'/>
        </form>
    );
};

export default CreateTodoField
