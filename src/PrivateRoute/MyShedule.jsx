import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Shedrows from "./Shedrows";

const MyShedule = () => {
    const [myShedule, setMyshedule] = useState([]);
    const { user } = useContext(AuthContext);
    const axiosSeceure = useAxiosSecure();
    const url = `/booking?email=${user?.email}`;
    
    const handleStatus = (_id, newStatus) => {
        fetch(`http://localhost:5000/booking/service/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: newStatus })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                const updatedStatus = myShedule.map(servs => {
                    if (servs._id === _id) {
                        return { ...servs, status: newStatus };
                    }
                    return servs;
                });
                setMyshedule(updatedStatus);
            }
        });
        console.log(_id, newStatus);
    };

    useEffect(() => {
        axiosSeceure.get(url)
            .then(res => setMyshedule(res.data))
    }, [axiosSeceure, url]);

    return (
        <div className="overflow-x-auto w-[85%] text-white m-auto">
            <table className="table">
                {/* head */}
                <tbody>
                    {/* row 1 */}
                    {
                        myShedule?.map(shed => <Shedrows key={shed._id} shed={shed} handleStatus={handleStatus}></Shedrows>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyShedule;
