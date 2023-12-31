import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import TableRow from "./TableRow";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-one-sandy.vercel.app/services/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = myServices?.filter(prods => prods._id !== _id);
                        setMyServices(remaining)
                        console.log(data)
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="w-[85%] m-auto">
            <Helmet>
                <title>My Services</title>
            </Helmet>
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