import { Link } from "react-router-dom";

const AllServices = () => {
    return (
        <div>

            <div className="w-[85%] m-auto flex justify-between">
                <input type="text" placeholder="Type here" className=" input input-bordered input-accent w-full max-w-xs" />
                <div className="w-[6rem]">
                    <select className="select select-accent w-full max-w-xs">
                        <option disabled selected>Sort</option>
                        <option>Auto</option>
                        <option>Dark mode</option>
                        <option>Light mode</option>
                    </select>
                </div>
            </div>
            <div className="w-[85%] m-auto grid grid-cols-3 gap-3 mt-5">
                <div className="bg-white  w-[21rem]">
                    <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className="w-full h-[20rem]" alt="" />
                    <div className='flex mt-3 gap-3 items-center ml-4'>
                        <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className='rounded-3xl h-[4rem] w-[20%]' alt="" />
                        <h2 className='text-2xl text-black'>Riad Sarkar</h2>
                    </div>

                    <div className='text-center border border-t-2 mt-4'>
                        <div className='grid grid-cols-2 border-gray-500'>
                            <h2 className=' text-black'>Tool Sharing Service</h2>
                            <h2 className='text-black'>Price $ 1200</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sit magni, aut, odio officia dolorem totam non, sequi dolorem libero praesentium cum nam quis.</p>

                    </div>

                    <div className='p-4'>
                        <button className="btn btn-primary w-full">See Details</button>
                    </div>
                </div>
                <div className="bg-white  w-[21rem]">
                    <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className="w-full h-[20rem]" alt="" />
                    <div className='flex mt-3 gap-3 items-center ml-4'>
                        <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className='rounded-3xl h-[4rem] w-[20%]' alt="" />
                        <h2 className='text-2xl text-black'>Riad Sarkar</h2>
                    </div>

                    <div className='text-center border border-t-2 mt-4'>
                        <div className='grid grid-cols-2 border-gray-500'>
                            <h2 className=' text-black'>Tool Sharing Service</h2>
                            <h2 className='text-black'>Price $ 1200</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sit magni, aut, odio officia dolorem totam non, sequi dolorem libero praesentium cum nam quis.</p>

                    </div>

                    <div className='p-4'>
                        <button className="btn btn-primary w-full">See Details</button>
                    </div>
                </div>
                <div className="bg-white  w-[21rem]">
                    <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className="w-full h-[20rem]" alt="" />
                    <div className='flex mt-3 gap-3 items-center ml-4'>
                        <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className='rounded-3xl h-[4rem] w-[20%]' alt="" />
                        <h2 className='text-2xl text-black'>Riad Sarkar</h2>
                    </div>

                    <div className='text-center border border-t-2 mt-4'>
                        <div className='grid grid-cols-2 border-gray-500'>
                            <h2 className=' text-black'>Tool Sharing Service</h2>
                            <h2 className='text-black'>Price $ 1200</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sit magni, aut, odio officia dolorem totam non, sequi dolorem libero praesentium cum nam quis.</p>

                    </div>

                    <div className='p-4'>
                        <button className="btn btn-primary w-full">See Details</button>
                    </div>
                </div>
                <div className="bg-white  w-[21rem]">
                    <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className="w-full h-[20rem]" alt="" />
                    <div className='flex mt-3 gap-3 items-center ml-4'>
                        <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className='rounded-3xl h-[4rem] w-[20%]' alt="" />
                        <h2 className='text-2xl text-black'>Riad Sarkar</h2>
                    </div>

                    <div className='text-center border border-t-2 mt-4'>
                        <div className='grid grid-cols-2 border-gray-500'>
                            <h2 className=' text-black'>Tool Sharing Service</h2>
                            <h2 className='text-black'>Price $ 1200</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sit magni, aut, odio officia dolorem totam non, sequi dolorem libero praesentium cum nam quis.</p>

                    </div>

                    <div className='p-4'>
                        <button className="btn btn-primary w-full">See Details</button>
                    </div>
                </div>
            </div>
            <div className='text-center p-4'>
                <Link to="/services"><button className='btn btn-secondary text-center'>Show All Services</button></Link>

            </div>
        </div>
    );
};

export default AllServices;