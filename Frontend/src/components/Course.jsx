import React, { useState } from 'react'
// import list from "../../public/list.json"
import Cards from './Cards';
import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect } from 'react';
const Course = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    }, [])
    // console.log(list);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl '>We are delighted to have you {" "}
                        <span className='text-pink-500'>
                            Here!</span>😊</h1>
                    <p className='mt-12'>
                        Discover a world of stories, knowledge, and imagination with our extensive collection of books. Whether you're a passionate reader, a curious learner, or a collector of timeless classics, our bookstore offers something for everyone. Explore various genres, from thrilling mysteries to heartwarming romances, and immerse yourself in the joy of reading. Happy browsing! 📚✨
                    </p>
                    <Link to="/">
                        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 mt-12'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Course