import Image from 'next/image'
import React from 'react'

const Topsection = () => {
  return (
    <section className='h-[200px] w-full flex items-center justify-center'>
         <div className='space-y-3'>
            {/* image container */}
            <div className='h-[80px] w-[80px] rounded-full overflow-hidden border' >
              <Image src={'/images/no-image-2.png'} height={80} width={80} className='object-cover' />
            </div>
            {/* name and title */}
            <div className='space-y-2 text-center'>
             <p className='font-medium text-normal text-black'>Mister Man</p>
             <p className='font-light text-sm text-gray-700'>Admin</p>
            </div>
         </div>
    </section>
  )
}

export default Topsection
