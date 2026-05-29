import React from 'react'

const CreateTask = () => {
  return (
    
    <div className="p-5 mt-7 rounded bg-[#1c1c1c] " >
      <h1 className='text-gray-50 text-7xl'>Admin Dasdhboard</h1>
        <form className="flex w-full flex-wrap items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5 ">Task Title</h3>
              <input
                className="text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
                type="text"
                placeholder="Make UI design"
              />
            </div>
            <div>
              <h3 className="text-sm mb-0.5 text-gray-300 ">Date</h3>
              <input
                className="text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm mb-0.5 text-gray-300 ">Assign to</h3>
              <input
                className="text-gray-400 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 "
                type="text"
                placeholder="Enployee name"
              />
            </div>

            <div>
              <h3 className="text-sm mb-0.5 text-gray-300">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] text-gray-400 border-gray-400 "
                type="text"
                placeholder="dev, design, etc "
              />
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-start">
            <h3 className="text-sm mb-0.5 text-gray-300">Description</h3>
            <textarea className="text-gray-400 w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 " name="" id="" cols={30} rows={10}></textarea>
            <button className="w-full mt-4 text-sm rounded px-5 hover:bg-emerald-600 py-3 bg-emerald-500 ">Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
