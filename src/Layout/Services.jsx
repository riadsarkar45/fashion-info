import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import Banner from './Banner/Banner';
const Services = () => {
    const [showAll, setShowAll] = useState(false)
    const [service, setService] = useState([])
    const [loading, setLoading] = useState(true)
    const url = "http://localhost:5000/services";
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setLoading(false)
                setService(res.data)
            })
    }, [url])

    const visibleServices = showAll ? service : service.slice(0, 4);
    return (

        <div>
            {
                loading ? (
                    <div className="flex items-center justify-center h-screen">
                        <img
                            src="https://i.ibb.co/kqB1PZ5/23358104-2464-removebg-preview.png"
                            alt=""
                        />
                    </div>
                ) : null
            }
            <Banner></Banner>

            <div className=' mt-[6rem]'>
                <h2 className='text-center text-4xl mt-3'>Our most popular services</h2>

                <div className="lg:w-[55%] md:w-[55%] m-auto grid lg:grid-cols-2 md:grid-cols-2 mt-[2rem] gap-3">

                    {
                        visibleServices.length > 0 ? (
                            visibleServices.map(servs => <ServiceCard key={servs._id} servs={servs}></ServiceCard>)
                        ) : null
                    }

                </div>
            </div>

            <div className='text-center p-4'>
                <Link to="/services"><button className='btn btn-secondary text-center'>Show All Services</button></Link>

            </div>
        </div>
    );
};

export default Services;