import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between shadow-md py-4 px-[4%]">
        <h1 className="text-xl font-black">FLOWCODE</h1>
        <div className="flex gap-x-2">
            <button className="bg-white py-1 px-3 text-black border border-transparent rounded-[0.2rem]">Log in</button>
            <button className="bg-C1 py-1 px-3 text-white border border-transparent rounded-[0.2rem]">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar