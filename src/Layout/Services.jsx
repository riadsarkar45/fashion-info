import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
const Services = () => {
    const [service, setService] = useState([])
    const url = "http://localhost:5000/services";
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setService(res.data)
            })
    }, [url])
    return (

        <div>
            <h2 className='text-center text-4xl mt-3'>Our most popular services</h2>

            <div className="w-[55%] m-auto grid grid-cols-2 gap-3 mt-5">
                {
                    service?.map(servs => <ServiceCard key={servs._id} servs={servs}></ServiceCard>)
                }
            </div>
            <div className='text-center p-4'>
                <Link to="/services"><button className='btn btn-secondary text-center'>Show All Services</button></Link>

            </div>
        </div>
    );
};

export default Services;