'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../card/page'

const page = () => {

    const [container, setcontainer] = useState([])

    const getData = async () => {
 
        const options = {
            method: 'GET',
            url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
            params: { limit: '30' },
            headers: {
                'X-RapidAPI-Key': '77fda6d5b5msha6dec97b1da1a89p11fa38jsnac6b2ee6fccf',
                'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setcontainer(response.data);
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        getData();
    }, [])




    return (
        <>

            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-8'>

                {
                    container.map((item) => {
                        return (
                            <Card item={item}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default page