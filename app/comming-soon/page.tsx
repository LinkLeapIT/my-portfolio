import Link from 'next/link'
import React from 'react'

const commingSoon = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
        <h1 className="text-6xl text-center text-white">Coming Soon</h1>
        <p className="text-center text-gray-300">This App will be available soon.</p>
        <Link href="/" className="text-white text-2xl font-bold hover:text-[#24C8D5] transform transition-transform hover:scale-105">Back to Home</Link>
    </div>
  )
}

export default commingSoon