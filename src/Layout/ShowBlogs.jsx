import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const ShowBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const url = 'https://assignment-11-server-one-sandy.vercel.app/blogs';
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBlogs(res.data)
            })
    }, [])
    return (
        <div>
            <section className="bg-white dark:bg-gray-300  w-[85%] m-auto mt-6">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Our Blog
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            We use an agile approach to test assumptions and connect with the needs
                            of your audience early and often.
                        </p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {
                            blogs?.map(blogs => <BlogCard key={blogs._id} blogs={blogs}></BlogCard>)
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ShowBlogs;