import { Link } from "react-router-dom";

const ProviderServ = ({serv}) => {
    const { imgUrl, desc, serviceName, servicePrice, serviceLoc, serviceCat, email, _id } = serv;
    return (
        <div>
            <div>
                <div className="bg-white  w-[21rem]">

                   <img className="w-full" src={imgUrl} alt="" />
                    <div className='flex mt-3 gap-3 items-center ml-4'>
                        <img src={imgUrl} className='rounded-3xl h-[4rem] w-[20%]' alt="" />
                        <h2 className='text-2xl text-black'>Riad Sarkar</h2>
                    </div>

                    <div className='text-center border border-t-2 mt-4'>
                        <div className='grid grid-cols-2 border-gray-500'>
                            <h2 className=' text-black'>{serviceName}</h2>
                            <h2 className='text-black'>Price $ 1200</h2>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum sit magni, aut, odio officia dolorem totam non, sequi dolorem libero praesentium cum nam quis.</p>

                    </div>

                    <div className='p-4'>
                        <Link to={`/detail/${_id}`}><button className="btn btn-primary w-full">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProviderServ;