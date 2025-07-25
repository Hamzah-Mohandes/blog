import { IGetArticle } from '../blogs/page'
import React from 'react'

function Article({ title, description, id }: IGetArticle) {
    return (


        <div className='shadow-lg rounded-lg p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:bg-gray-600 hover:text-white'>
            <h2 className='text-2xl font-bold hover:text-white transition-all duration-300 text-red-700'>{title}</h2>
            <p className=' text-gray-500 hover:text-white transition-all duration-300 '>{description}</p>
        </div>


    )
}

export default Article