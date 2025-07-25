import Container from '../components/Container'
import React from 'react'

function CreateBlog() {
    return (
        <Container>

            <div className='flex flex-col gap-4 justify-center items-center  mt-4  p-4'>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className='border border-gray-300 rounded-lg p-2' />
                <label htmlFor="description">Description</label>
                <textarea id="description" className='border border-gray-300 rounded-lg p-2 h-100 w-100' />
                <label htmlFor="image">Image</label>
                <input type="file" id="image" className='border border-gray-300 rounded-lg p-2' />
                <button type="submit" className='bg-gray-700 text-white p-2 rounded-lg'>Create</button>

            </div>

        </Container>
    )
}

export default CreateBlog