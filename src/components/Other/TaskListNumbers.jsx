import React from 'react'

function TaskListNumbers() {
  return (
    
    <div >

      <div className='text-8xl mt-10'><h1>Employee Dashboard</h1></div>
      
      <div className='flex mt-10  justify-between gap-5  screen'>
        <div className='bg-pink-100 py-6 px-9 w-[45%] rounded-xl'>
          <h2 className='text-black text-3xl font-semibold'>0</h2>
          <h3 className='text-black text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-blue-100 py-6 px-9 w-[45%] rounded-xl'>
          <h2 className='text-black text-3xl font-semibold'>0</h2>
          <h3 className='text-black text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-red-300 py-6 px-9 w-[45%] rounded-xl'>
          <h2 className='text-black text-3xl font-semibold'>0</h2>
          <h3 className='text-black text-xl font-medium'>New Task</h3>
        </div>
        <div className='bg-emerald-100 py-6 px-9 w-[45%] rounded-xl'>
          <h2 className='text-black text-3xl font-semibold'>0</h2>
          <h3 className='text-black text-xl font-medium'>New Task</h3>
        </div>
      </div>
      
    </div>
  )
}

export default TaskListNumbers
