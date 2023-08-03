import React from 'react'
import { FiLink2 } from 'react-icons/Fi'
import { PiUploadSimpleBold } from 'react-icons/Pi'
import { BsChatLeftText } from 'react-icons/Bs'
import { BiImageAlt } from 'react-icons/Bi'
import { LiaGoogleDrive } from 'react-icons/Lia'
import { AiOutlineInstagram } from 'react-icons/Ai'
import { LiaFacebookSquare } from 'react-icons/Lia'
import { SlSocialYoutube } from 'react-icons/Sl'
import { FaWifi } from 'react-icons/Fa'
import { MdOutlineEmail } from 'react-icons/Md'
import { BsPlayCircle } from 'react-icons/Bs'

const MainContent = () => {
    return (
        <div className="grid grid-cols-12 mx-[10%] mt-10 mb-10 border border-transparent rounded-lg shadow-md">
            <div className="col-span-3">
                <h1 className="text-sm pl-[10%] pt-5 pb-2 border border-b-C2 border-x-transparent border-transparent">FLOWCODE</h1>
                <div className="grid gap-8 mt-6 mb-12">
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <FiLink2 className="text-2xl"/>
                        <h1>Website</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <PiUploadSimpleBold className="text-2xl"/>
                        <h1>Upload a file</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <BsChatLeftText className="text-2xl"/>
                        <h1>Text message</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <BiImageAlt className="text-2xl"/>
                        <h1>Image</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">                        
                        <LiaGoogleDrive className="text-2xl"/>
                        <h1>Google doc</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <AiOutlineInstagram className="text-2xl"/>
                        <h1>Instagram</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <LiaFacebookSquare className="text-2xl"/>
                        <h1>Facebook</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <SlSocialYoutube className="text-2xl"/>
                        <h1>Youtube</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <FaWifi className="text-2xl"/>
                        <h1>Wifi</h1>
                    </button>
                    <button className="flex items-center gap-x-2 pl-[15%] text-gray-500 hover:text-C1">
                        <MdOutlineEmail className="text-2xl"/>
                        <h1>Email</h1>
                    </button>
                </div>
                <button className="flex justify-center items-center gap-x-2  text-C1 ml-[15%] py-4 px-4 bg-C2 mt-16 mb-8 border border-transparent rounded-lg">
                    <BsPlayCircle className="text-2xl"/>
                    <h1>Watch Our Demo</h1>
                </button>
            </div>
        </div> 
    )
}

export default MainContent