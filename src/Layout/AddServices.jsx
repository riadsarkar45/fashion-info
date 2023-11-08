import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddServices = () => {
    const { user } = useContext(AuthContext)
    const handleAddServices = e => {
        e.preventDefault();
        const form = e.target;
        const imgUrl = form.imgUrl.value;
        const desc = form.desc.value;
        const serviceName = form.serviceName.value;
        const serviceLoc = form.serviceLoc.value;
        const servicePrice = form.servicePrice.value;
        const serviceCat = form.serviceCat.value;
        const email = user.email;
        const uploaderName = user?.displayName;
        const uploaderPhoto = user?.photoURL;
        const service = {

            imgUrl,
            desc,
            serviceName,
            serviceLoc,
            serviceCat,
            servicePrice,
            email,
            uploaderName,
            uploaderPhoto
        }

        console.log(service)

        fetch('https://assignment-11-server-one-sandy.vercel.app/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        
    }
    return (
        <div className='lg:w-[55%] m-auto mt-6'>
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <form onSubmit={handleAddServices}>
                <div className="grid lg:grid-cols-2 md:grid-cols-2">
                    <div>
                        <input type="text" name="imgUrl" className="lg:w-[21rem] md:w-[21rem] w-[21rem] p-2 h-[9rem] rounded-md input input-bordered input-primary" placeholder="Image Url" />
                        <textarea name="desc" className="lg:w-[21rem] md:w-[21rem] w-[21rem] p-2 h-[9rem] rounded-md mt-4 input input-bordered input-primary" placeholder="Service Description" ></textarea>

                    </div>
                    <div className="">
                        <input type="text" name="serviceName" className="md:w-[22rem] lg:w-[22rem] w-[21rem] mt-3 rounded-md h-[3rem] p-2 input input-bordered input-primary" placeholder="Service Name" />
                        <input type="text" name="serviceLoc" className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5 input input-bordered input-primary" placeholder="Service Location" />
                        <input type="text" name="servicePrice" className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5 input input-bordered input-primary" placeholder="Price" />
                        <select name="serviceCat"  className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5 input input-bordered input-primary" >
                            <option value="Carpooling and Ride-Sharing">Carpooling and Ride-Sharing</option>
                            <option value="Tool Sharing">Tool Sharing</option>
                            <option value="Home Services Exchange">Home Services Exchange</option>
                            <option value="Language Exchange">Language Exchange</option>
                            <option value="Pet Sitting and Walking">Pet Sitting and Walking</option>
                            <option value="Book or Media Swap">Book or Media Swap</option>
                            <option value="Childcare Co-op">Childcare Co-op</option>
                            <option value="Clothing Swap">Clothing Swap</option>
                            <option value="Homegrown Produce Exchange">Homegrown Produce Exchange</option>
                            <option value="Fitness and Sports Partners">Fitness and Sports Partners</option>
                            <option value="Ride-Share for Seniors">Ride-Share for Seniors</option>
                            <option value="Local Tours and Guide">Local Tours and Guide</option>
                            <option value="Community Repair Workshops">Community Repair Workshops</option>
                            <option value="Pest Control">Pest Control</option>
                        </select>

                    </div>
                </div>
                <div>
                    <button className="btn btn-outline btn-primary w-full mb-4 mt-5">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddServices;