import React from 'react'

const Steps = () => {
    return (
        <div className="grid grid-cols-12 justify-items-center px-[15%] mt-[-2rem]">
            <div className="col-span-4 grid justify-items-center">
                <div className="py-2 px-4 text-xl text-white border border-transparent rounded-full bg-C3">
                    1
                </div>
                <p className="mt-2">Choose your</p>
                <p className="">destination</p>
            </div>
            <div className="col-span-4 grid justify-items-center">
                <div className="py-2 px-4 text-xl text-white border border-transparent rounded-full bg-C3">
                    2
                </div>
                <p className="mt-2">Enter your</p>
                <p className="">website and design your code</p>
            </div>
            <div className="col-span-4 grid justify-items-center">
                <div className="py-2 px-4 text-xl text-white border border-transparent rounded-full bg-C3">
                    3
                </div>
                <p className="mt-2">Download your</p>
                <p className="">code and share it</p>
            </div>
        </div>
    )  
}

export default Steps