import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const {user} = useContext(AuthContext);
    const handleAddServices = e => {
        e.preventDefault();
        const form = e.target;
        const desc = form.desc.value;
        const serviceName = form.serviceName.value;
        const serviceLoc = form.serviceLoc.value;
        const serviceCat = form.serviceCat.value;
        const email = user.email;
        const uploaderName = user?.displayName;
        const uploaderPhoto = user?.photoURL;
        const service = {
            desc,
            serviceName,
            serviceLoc,
            serviceCat,
            email,
            uploaderName,
            uploaderPhoto
        }

        console.log(service)

        fetch('https://assignment-11-server-one-sandy.vercel.app/blog', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset()
            })
        
    }
    return (
        <div className='lg:w-[55%] m-auto mt-6'>
            <Helmet>
                <title>Write a blog</title>
            </Helmet>
            <form onSubmit={handleAddServices}>
                <div className="grid lg:grid-cols-2 md:grid-cols-2">
                    <div>
                        <textarea name="desc"className="input input-bordered input-primary w-full max-w-xs h-[10rem]"  placeholder="Blog Description" ></textarea>

                    </div>
                    <div className="">
                        <input type="text" name="serviceName" className="input input-bordered input-primary w-full max-w-xs"  placeholder="Blog Title" />
                        <input type="text" name="serviceLoc" className="input input-bordered input-primary w-full max-w-xs mt-2"  placeholder="Short Title" />
                        <select name="serviceCat"  className="input input-bordered input-primary w-full max-w-xs mt-2" >
                            <option>Blog Type</option>
                            <option value="Technology">Technology</option>
                            <option value="Social">Social</option>
                            <option value="Education">Education</option>
                        </select>

                    </div>
                </div>
                <div>
                    <button className="btn btn-outline btn-primary w-full mb-4 mt-5">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default Blog;