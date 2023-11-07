import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
import { useRef } from "react";
const ProviderServ = ({ serv }) => {
    const { imgUrl, desc, serviceName, servicePrice, serviceLoc, serviceCat, email, _id } = serv;
    const constraintsRef = useRef(null)
    const visibleText = desc ? desc.split(' ').slice(0, 10).join('') : '...';

    return (
        <div>
            <div className="card lg:w-[20rem] md:w-[20rem] w-full  h-[22rem] bg-base-100 shadow-xl">
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

export default ProviderServ;