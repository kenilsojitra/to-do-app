"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    // console.log("kenil sojitra")
    setMainTask([...mainTask, { title, desc }]);
    console.log(mainTask)
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let randerTask = <h2> No Task available</h2>

  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between mb-5 w-2/3 '>
          <h5 className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-medium'>{t.desc}</h6>
        </div>
        <button
          className='bg-red-700 text-white px-4 py-2 rounded font-bold'
          onClick={() => { deleteHandler(i) }}
        >
          Delete
        </button>
      </li>
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-xl10 font-bold text-center'>Kenil Sojitra' todo List</h1>
      <form onSubmit={submithandler} >
        <input
          type="text"
          className='text-2xl border-zinc-800 border-2 m-8 px-3 py-3 rounded'
          placeholder='Enter Task  here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}
        />

        <input
          type="Description"
          className='text-2xl border-zinc-800 border-2 m-8 px-3 py-3 rounded'
          placeholder='Enter Description  here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white m-3 px-4 py-2 text-2xl font-bold rounded'>
          Add Task
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-400'>
        <ul>

          {randerTask}
        </ul>
      </div>
    </>
  )
}
export default page

