import Container from '../components/Container'
import React from 'react'

function Blogs() {
    return (
        <Container>
            <div className='grid  grid-cols-4 gap-4 mt-4'>

                <div className='shadow-2xl rounded-lg p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:bg-indigo-950 hover:text-white'>
                    <h2 className='text-2xl font-bold hover:text-white transition-all duration-300'>title</h2>
                    <p className=' text-gray-500 hover:text-white transition-all duration-300 '>description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                </div>

            </div>

        </Container>
    )
}

export default Blogs