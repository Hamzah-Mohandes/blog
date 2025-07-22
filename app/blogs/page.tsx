import Article from '../components/Article'
import Container from '../components/Container'
import React from 'react'
function Blogs() {
    return (
        <Container>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                <Article />
            </div>

        </Container>
    )
}

export default Blogs