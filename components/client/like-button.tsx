'use client'

import { useDataContext } from './dataContext'
import { IconContext } from 'react-icons'
import { PiHeartBold } from 'react-icons/pi'
import { AiFillHeart } from 'react-icons/ai'

export default function LikeButton({ id }: { id: string }) {
  const { data, setData } = useDataContext()

  const handleAddClick = () => {
    setData([...data, id])
  }

  const handleRemoveClick = () => {
    setData(data.filter((bookId: string) => bookId !== id))
  }

  return (
    <>
      {data.indexOf(id) == -1 ? (
        <button onClick={handleAddClick} className="flex gap-x-1 items-center">
          <IconContext.Provider value={{ color: '#83888c', size: '20px' }}>
            <PiHeartBold />
          </IconContext.Provider>
          <div className="text-gray-500 font-medium text-md">ブックマークに追加</div>
        </button>
      ) : (
        <button onClick={handleRemoveClick} className="flex gap-x-1 items-center">
          <IconContext.Provider value={{ color: '#eb4667', size: '20px' }}>
            <AiFillHeart />
          </IconContext.Provider>
          <div className="text-[#eb4667] text-md font-medium">ブックマークから削除</div>
        </button>
      )}
    </>
  )
}