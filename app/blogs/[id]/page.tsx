import Container from '@/app/components/Container'
import { IGetArticle } from '@/app/blogs/page'
import React from 'react'
import { SearchParams } from 'next/dist/server/request/search-params';

interface IarticleProps {
    params: Promise<{ id: string }>,

    searchParams: Promise<{}>

}
async function Article({ params, searchParams }: IarticleProps) {


    const { id } = await params // object id aus der url

    const result = await fetch(`http://localhost:3001/articles/${id}`);
    const data = (await result.json() as IGetArticle)
    console.log(data)
    return (
        <Container>
            <div>
                <h1 className='text-2xl font-bold mt-4'>{data.title}</h1>

                <p className='text-gray-500 mt-4 text-lg'>{data.description}</p>

            </div>
        </Container >
    )
}

export default Article

// start bekommt die id aus der url 
// fetch die data aus der api
// render die data