
const Shedrows = ({ shed, handleStatus }) => {
    const { _id, imgUrl, serviceName, servicePrice, serviceLoc, serviceCat, status } = shed;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{serviceLoc}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceCat}
            </td>
            <td>

                {
                    status === 'Completed' ? (
                        <span className='btn btn-success btn-xs'>Completed</span>
                    ) : status === 'Inprogress' ? (
                        <span className='btn btn-warning btn-xs'>In Progress</span>
                    ) : (
                        <span className='btn btn-error btn-xs'>Pending</span>
                    )
                }





            </td>
            <th>
                <select onChange={(e) => handleStatus(_id, e.target.value)} className="text-black select select-accent w-full max-w-xs">
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Inprogress">In Progress</option>
                </select>
            </th>
        </tr>
    );
};

export default Shedrows;