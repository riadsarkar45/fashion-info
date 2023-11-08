import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Shedrows from "./Shedrows";

const MyShedule = () => {
    const [myShedule, setMyshedule] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const axiosSeceure = useAxiosSecure();
    const url = `/booking?email=${user?.email}`;

    const handleStatus = (_id, newStatus) => {
        fetch(`https://assignment-11-server-one-sandy.vercel.app/booking/service/${_id}`, {
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
            .then(res => {
                setMyshedule(res.data)
                setLoading(false)
                console.log(res.data)
            })
    }, [axiosSeceure, url]);


    return (
        <div className="w-[85%] m-auto">
            <div>
                {
                    loading ? (
                        <div className="flex items-center justify-center h-screen">
                            <img
                                src="https://i.ibb.co/kqB1PZ5/23358104-2464-removebg-preview.png"
                                alt=""
                            />
                        </div>
                    ) : null
                }
            </div>
            <p>My Shedule : {myShedule.length}</p>
            <div>
                {
                    myShedule?.length === 0 ? (
                        <div className="w-[35%] m-auto">
                            <img src="https://i.ibb.co/jJpf1zN/49e58d5922019b8ec4642a2e2b9291c2.png" alt="" />
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3">
                            {
                                myShedule?.map(shed => <Shedrows key={shed._id} shed={shed} handleStatus={handleStatus}></Shedrows>)
                            }

                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default MyShedule;
