import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import axios from "axios";
import ProviderServ from "./ProviderServ.jsx/ProviderServ";
const ServiceDetail = () => {
    const [service, setService] = useState([])
    const [filteredService, setFilteredService] = useState([]); const { user } = useContext(AuthContext);
    const loader = useLoaderData();
    const { imgUrl, desc, serviceName, servicePrice, serviceLoc, serviceCat, email, _id } = loader;
    const url = "http://localhost:5000/services";
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setService(res.data)
                console.log(res.data)
            })
    }, [url])

    useEffect(() => {
        if (service && email) {
            const filteredResult = service.filter(service => service.email === email);
            setFilteredService(filteredResult);
        }
    }, [service, email]);

    const handleBookNow = (loader) => {
        if (!user) {
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Login required',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            )
        }

        const dataToStore = { imgUrl, serviceName, servicePrice, serviceCat, email: user.email }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(dataToStore)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
            })
    }
    console.log(loader)
    return (
        <div className="w-[85%] m-auto">
            <section className="py-20 overflow-hidden bg-white font-poppins h-auto dark:bg-gray-800">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10" style={{ height: 450 }}>
                                    <img
                                        src={imgUrl}
                                        alt=""
                                        className="object-contain w-full h-full "
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                                    <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                                        New
                                    </span>
                                    <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                                        {serviceName}
                                    </h2>
                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        {desc}
                                    </p>
                                    <div>
                                        <h2 className="text-2xl">Service Provider Detail</h2>
                                        <div className="mt-8">
                                            <div className="flex gap-4 items-center">
                                                <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className="w-[20%] rounded-3xl" alt="" />
                                                <p className="text-2xl ">Riad Sarkar</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 mt-10">
                                        <span>${servicePrice}</span>
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center ">

                                    <div className="mb-4 mr-4 lg:mb-0">
                                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <h2 className="text-center text-5xl mt-6">Services You May Like</h2>
                <div className="grid grid-cols-3 mt-5">
                    {
                        filteredService?.map(serv => <ProviderServ key={serv._id} serv={serv}></ProviderServ>)
                    }
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action">
                        <form method="dialog">
                            <div className="w-full">
                                <div className="text-center">
                                    <img className="w-[30rem]" src={imgUrl} alt="" />
                                </div>
                                <div className=" mt-5">
                                    <h1 className="text-xl">Service Name : {serviceName}</h1>
                                    <h1 className="text-xl">Provider Email : {email}</h1>

                                    {
                                        user ? <><h2 className="text-xl">Your Email : {user?.email} </h2></> : <h2 className="text-xl">Login Required</h2>
                                    }
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <button onClick={() => handleBookNow(loader)} className="btn btn-md btn-success">Purchase this Service</button>
                                <button className="btn btn-md btn-error">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ServiceDetail;