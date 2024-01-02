import React from 'react';

const Header = () => {
  return (
    <>
    <div className='p-2 flex  items-center bg-lime-200 shadow-md'>
      <div className="flex-none">
      <img src="./assets/tasty-log.png" alt="logo" className='h-16'/>
      </div>
      <div className='flex-grow text-center'>
        <div>
      <h1 className='font-bold text-4xl'>Tassty-Feast😋</h1>
      </div>
      </div>
      <div className='p-2'>
        <ul className='flex space-x-3 font-bold text-base'>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header