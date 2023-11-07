
const Shedrows = ({ shed, handleStatus }) => {
    const { _id, imgUrl, serviceName, servicePrice, serviceLoc, serviceCat, status, date, instruct } = shed;
    return (
        <div className="hero md:w-[32rem] lg:w-[32rem] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={imgUrl} className="max-w-sm rounded-lg shadow-2xl w-[12rem] h-[22rem]" />
                <div>
                    <h1 className="text-2xl font-bold">{serviceName}</h1>
                    <h1 className="text-sm font-bold">Service Taking Date {date}</h1>
                    <p className="py-6">{instruct}</p>
                    <div className="grid grid-cols-2 gap-2">
                        {
                            status === 'Completed' ? (
                                <span className='btn btn-success btn-sm'>Completed</span>
                            ) : status === 'Inprogress' ? (
                                <span className='btn btn-warning btn-sm'>In Progress</span>
                            ) : (
                                <span className='btn btn-error btn-sm'>Pending</span>
                            )
                        }

                        <select onChange={(e) => handleStatus(_id, e.target.value)} className="h-[32px] rounded-md w-full">
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Inprogress">In Progress</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shedrows;




{/* <th>
                <select onChange={(e) => handleStatus(_id, e.target.value)} className="text-black select select-accent w-full max-w-xs">
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Inprogress">In Progress</option>
                </select>
            </th> */}