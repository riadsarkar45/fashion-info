import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import TableRow from "./TableRow";

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [myServices, setMyServices] = useState([]);
    const [loading, setLoading] = useState(true)
    const axiosSeceure = useAxiosSecure();
    const url = `/my-services?email=${user?.email}`;
    useEffect(() => {
        axiosSeceure.get(url)
            .then(res => {
                setMyServices(res.data)
                setLoading(false)
            })
    }, [axiosSeceure, url]);

    const handeleDelete = _id => {
        fetch(`https://assignment-11-server-one-sandy.vercel.app/services/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                const remaining = myServices?.filter(prods => prods._id !== _id);
                setMyServices(remaining)
                console.log(data)
            })
    }

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
            <div>
                {
                    myServices?.length === 0 ? (
                        <div className="w-[35%] m-auto">
                            <img src="https://i.ibb.co/jJpf1zN/49e58d5922019b8ec4642a2e2b9291c2.png" alt="" />
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3">
                            {
                                myServices?.map(servs => <TableRow key={servs._id} servs={servs} handeleDelete={handeleDelete}></TableRow>)
                            }

                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default MyServices;