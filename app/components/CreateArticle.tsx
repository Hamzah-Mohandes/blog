"use client"

import React from 'react'
import { useState } from 'react'

function CreateArticle() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handelSubmit = () => {
        fetch('http://localhost:3001/articles', {
            method: 'POST',
            body: JSON.stringify({ title, description })
        })
    }

    return (
        <div className='flex flex-col gap-4 justify-center items-center  mt-4  p-4'>
            <label htmlFor="title">Title </label>
            <input type="text" id="title" className='border border-gray-300 rounded-lg p-2' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="description">Description</label>
            <textarea id="description" className='border border-gray-300 rounded-lg p-2 h-100 w-100' value={description} onChange={(e) => setDescription(e.target.value)} />
            <label htmlFor="image">Image</label>
            <input type="file" id="image" className='border border-gray-300 rounded-lg p-2' />
            <button type="submit" className='bg-gray-700 text-white p-2 rounded-lg' onClick={handelSubmit}>Create</button>

        </div>
    )
}

export default CreateArticle