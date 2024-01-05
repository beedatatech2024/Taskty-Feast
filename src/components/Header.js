import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className='p-2 flex items-center bg-blue-400 shadow-md'>
  <div className="flex-none">
    <Link to="/" className=''>
      <img src="./assets/tasty-log.png" alt="logo" className='h-16'/>
    </Link>
  </div>
  <div className='flex-grow text-center'>
    <div>
      <h1 className='font-bold text-4xl'>Tassty-Feast😋</h1>
    </div>
  </div>
  <div className='p-3'>
    <ul className='flex font-bold text-lg space-x-3'>
      <Link to="/" className='hover:font-extrabold'>
        Home
      </Link>
      <Link to="/main" className='hover:font-extrabold'>
        Search
      </Link>
    </ul>
  </div>
</div>

    </>
  );
};

export default Header;
