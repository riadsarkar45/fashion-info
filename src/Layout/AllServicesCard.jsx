import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { useRef } from "react";
const AllServicesCard = ({ cards }) => {
    const { imgUrl, serviceName, serviceCat, servicePrice, serviceLoc, desc, _id, 
        uploaderName, uploaderPhoto } = cards;
    const constraintsRef = useRef(null)
    const visibleText = desc ? desc.split(' ').slice(0, 10).join(' ') : '...';

    return (
        <div>

            <div className="card md:w-[20rem] lg:w-[20rem] h-[28rem] bg-base-100 shadow-xl">
                <figure>
                    <motion.div ref={constraintsRef}>
                        <motion.img
                            className='w-full h-[15rem]'
                            src={imgUrl}
                            drag
                            dragConstraints={constraintsRef}
                        />
                    </motion.div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {serviceName}
                    </h2>
                    <span className="badge badge-outline p-3">Price: ${servicePrice}</span>
                    <span className="flex items-center gap-4 text-xl">
                        <img className="h-[52px] rounded-[31px] w-[19%]" src={uploaderPhoto} alt="" />
                        <h2>{uploaderName}</h2>
                    </span>
                    <p>{visibleText}</p>
                    <div className="card-actions  w-full">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Link to={`/detail/${_id}`} className="w-full">
                                <button className="badge badge-outline md:w-[16rem] lg:w-[16rem] p-3">View Detail</button>
                            </Link>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;