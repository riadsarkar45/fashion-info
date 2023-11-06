import { Link } from "react-router-dom";

const AllServicesCard = ({cards}) => {
    const { imgUrl, serviceName, serviceCat, servicePrice, serviceLoc, desc, _id } = cards;

    return (
        <div>
            <div className="bg-white  w-[21rem]">

                <img className="w-full h-[165px]" src={imgUrl} alt="" />
                <div className='flex mt-3 gap-3 items-center ml-4'>
                    <img src={imgUrl} className='rounded-3xl w-[11%]' alt="" />
                    <h2 className='text-2xl text-black'>Riad Sarkar</h2>
                </div>

                <div className='text-center border border-t-2 mt-4'>
                    <div className='grid grid-cols-2 border-gray-500'>
                        <h2 className=' text-black'>{serviceName}</h2>
                        <h2 className='text-black'>Price $ {servicePrice}</h2>
                    </div>

                </div>

                <div className='p-4'>
                    <Link to={`/detail/${_id}`}><button className="btn btn-primary w-full">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;