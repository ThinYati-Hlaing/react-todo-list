import React from 'react'

const Status = (props) => {
    return (
        <div className=' flex justify-between items-center text-center mb-5'>
            <h3 className='text-2xl font-bold'>Your List</h3>
            <div className='flex justify-center items-center bg-neutral-700 text-white px-3 py-2 rounded-full text-sm'>
                Done (
                    <span id='doneCount'>
                        {props.tasks.filter((task) => task.isDone === true).length}
                    </span> /
                    <span id='listCount'>
                        {props.tasks.length}
                    </span>
                )
            </div>
        </div>
    )
}

export default Status