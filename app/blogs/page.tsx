import Article from '../components/Article'
import Container from '../components/Container'
import Link from 'next/link';
import React from 'react'

// server side rendering

export interface IGetArticle {
    id?: string;
    title?: string;
    description?: string;
}
export default async function Blogs() {

    const result = await fetch('http://localhost:3001/articles')
    const data = await result.json() as IGetArticle[]
    console.log(data) // data is an array of objects
    return (
        <Container>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                {data.map((item) => (
                    <Link href={`/blogs/${item.id}`} key={item.id}>
                        <Article key={item.id} {...item} />
                    </Link>

                ))}
            </div>

        </Container>
    )
}
