import React from 'react';

const TableRow = ({ servs }) => {
    const { imgUrl, serviceName, serviceCat, servicePrice, serviceLoc, email, price, _id } = servs;
    return (
        <tr>
            <button className="btn btn-circle btn-outline bg-primary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
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
            <td>{serviceCat}</td>
            <th>
                <button className="btn btn-warining btn-xs">Edit</button>
            </th>
        </tr>
    );
};

export default TableRow;