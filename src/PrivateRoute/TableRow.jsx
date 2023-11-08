import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ servs, handeleDelete }) => {
    const { imgUrl, serviceName, serviceCat, servicePrice, serviceLoc, email, price, _id } = servs;
    return (
        <div className="hero md:w-[32rem] lg:w-[32rem] bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={imgUrl} className="max-w-sm rounded-lg shadow-2xl w-[12rem] h-[22rem]" />
                <div>
                    <h1 className="text-2xl font-bold">{serviceName}</h1>
                    <div className="grid grid-cols-2 gap-2 mt-10">
                        <Link to={`/update-serv/${_id}`}>
                            <button className="btn btn-outline btn-warning">Edit</button>
                        </Link>

                        <button onClick={() => handeleDelete(_id)} className="btn btn-outline btn-error">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableRow;

{/* <Link to={`/update-serv/${_id}`}>
                    <button className="btn btn-warining btn-xs">Edit</button>
                </Link><button onClick={() => handeleDelete(_id)} className="btn btn-circle btn-outline bg-primary btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button> */}