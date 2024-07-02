import React from 'react'
import { FaUserTie } from "react-icons/fa6";
const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <FaUserTie className="rounded-full mt-1 border border-gray-400 text-2xl" />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
