import React, { useState } from 'react'

const TransactionMenu = ({onIncome,onExpense}) => {

    const [menu,setMenu]=useState(false);
    const toggleButton=()=>{
        console.log(menu)
        setMenu(!menu)
    }

  return (
    <div >
      <div className='mt-6 flex flex-com items-center'>
        <button className='bg-black text-white p-2 rounded-lg hover:bg-gray-700 mb-6'
        onClick={toggleButton}>
            Add transaction
        </button>
{
    menu &&
    <div>
        <div></div>
    </div>
}

      </div>
    </div>
  )
}

export default TransactionMenu
