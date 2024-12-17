import React from 'react'
import { Instagram } from 'lucide-react'

const SocialCard = ({name, username, followers, link, icon}) => {
  return (
<>
<div className=" text-center items-center  flex flex-col p-4 rounded-lg shadow-md w-full">
    <div className="flex flex-col w-full gap-3 items-center">
        <h1 className='text-3xl font-bold text-white'>{name}</h1>
        <div className="text-gray-400 text">
        {icon}</div>
        <div className="text-center text-white w-full items-center">
        <p>Username: <a className='text-blue-500 hover:underline' href={link}>{username}</a></p>
        <h2>(Followers: {followers})</h2>
    </div>

    <a className='w-full' target='blank' href={link}><button className='px-1 py-2 w-1/2 text-center  bg-gray-500 hover:bg-gray-600 text-white ease-in-out duration-300 transition-all  rounded-lg'>Follow</button></a>
    </div>
</div>
</>
  )
}

export default SocialCard
