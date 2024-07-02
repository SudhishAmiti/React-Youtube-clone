import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const List = ["All","Gaming","Food", "Travel","Coding", "Gadgets","Music" ]
  return (
    <div className='flex mx-4'>
     
    {
        List.map(item => <Button key={item} name={item}/>)
    }
    </div>
  )
}

export default ButtonList
