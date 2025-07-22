import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className="bg-indigo-950 w-full p-4 text-white flex items-start ">
            <Link href="/" className='mr-4 hover:text-indigo-300 transition-all duration-300' >Home</Link>
            <Link href="/blogs" className='mr-4 hover:text-indigo-300 transition-all duration-300' >Blogs</Link>

        </div>
    )
}

export default Navbar