import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className="bg-gray-700 w-full p-4 text-white flex items-start ">
            <Link href="/" className='mr-4 ' >Home</Link>
            <Link href="/blogs" className='mr-4 ' >Blogs</Link>

        </div>
    )
}

export default Navbar