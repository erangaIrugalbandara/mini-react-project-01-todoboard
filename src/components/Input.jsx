import React, { useState } from 'react'

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("");

    const handleAddTask = (e) => {
        e.preventDefault();
        if (input !== "") {
            setTaskList([...taskList, input]);          
        }
        setInput("");          
    }

    return (
        <>
            <form className='flex flex-row items-center gap-3'>
                <input type="text"
                    placeholder='Add a task'
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    className="border rounded-lg py-1.5 px-2.5 text-lg"
                />
                <button onClick={handleAddTask} className="bg-green-500 text-white py-2 px-3.5 rounded-lg">Add</button>
            </form>
        </>
    )
}

export default Input