import React, { useState } from 'react'
import Input from './components/Input'
import Board from './components/board';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className='p-3'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className='text-xl font-semibold'>To Do Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className='flex flex-col gap-4 mt-5 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
        {taskList.map((task, index) =>
          <Board
            key={index}
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
      </div>
    </div>
  )
}

export default App