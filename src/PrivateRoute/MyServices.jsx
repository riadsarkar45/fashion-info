import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import TableRow from "./TableRow";

const MyServices = () => {
    const { user } = useContext(AuthContext);
    const [myServices, setMyServices] = useState([]);
    const axiosSeceure = useAxiosSecure();
    const url = `/my-services?email=${user?.email}`;
    useEffect(() => {
        axiosSeceure.get(url)
            .then(res => setMyServices(res.data))
    }, [axiosSeceure, url]);

    const handeleDelete = _id => {
        fetch(`http://localhost:5000/products/${_id}`, {
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
        <div className=" w-[65%] m-auto">
            {/* This is an example component */}
            <div className="overflow-x-auto">
                <table className="table text-white">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="text-white">Service Name</th>
                            <th className="text-white">Location</th>
                            <th className="text-white">Service Type</th>
                            <th className="text-white"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            myServices?.map(servs => <TableRow key={servs._id} servs={servs} handeleDelete={handeleDelete}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyServices;