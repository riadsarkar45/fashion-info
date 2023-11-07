import { motion } from 'framer-motion'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ servs }) => {
    const { imgUrl, desc, serviceName, serviceLoc, serviceCat, servicePrice, email, _id } = servs;
    const visibleText = desc ? desc.split(' ').slice(0, 10).join('') : '...';
    const constraintsRef = useRef(null)
    return (
        <div>

            <div className="card md:w-[20rem] lg:w-[20rem] h-[22rem] bg-base-100 shadow-xl">
                <figure>
                    <motion.div ref={constraintsRef}>
                        <motion.img
                            className='w-full h-[10rem]'
                            src={imgUrl}
                            drag
                            dragConstraints={constraintsRef}
                        />
                    </motion.div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
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

export default ServiceCard;