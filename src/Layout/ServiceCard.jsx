import { motion } from 'framer-motion'

const ServiceCard = ({ servs }) => {
    const { imgUrl, desc, serviceName, serviceLoc, serviceCat, servicePrice, email } = servs;
    return (
        <div>
            <div className="bg-white  w-[21rem]">

                <motion.img className='w-full h-[20rem]'
                    src={imgUrl}

                    whileHover={{ scale: 1.2, rotate: 20 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -60,
                        borderRadius: "100%"
                    }}
                />
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
    );
};

export default ServiceCard;