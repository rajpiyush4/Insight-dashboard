import {BarChart2, Menu} from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'


interface HeadersProps {
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

function Headers({setIsShow} : HeadersProps) {
  return (
    <header className='p-4 bg-[#f6f8fc]'>
      
        <div className='flex items-center gap-2'>
          <button className='rounded-full w-[50px] h-[50px] grid place-content-center' onClick={()=>setIsShow((s)=>!s)}><Menu size={20} /></button>
            <BarChart2  />
            <span className='font-bold text-lg'>Insight</span>
        </div>
    </header>
  )
}

export default Headers