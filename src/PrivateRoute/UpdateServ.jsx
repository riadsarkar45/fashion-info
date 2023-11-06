import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateServ = () => {
    const loader = useLoaderData();
    console.log(loader)
    const { imgUrl, serviceName, serviceCat, servicePrice, serviceLoc, desc, _id } = loader;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const imgUrl = form.imgUrl.value;
        const desc = form.desc.value;
        const serviceName = form.serviceName.value;
        const serviceLoc = form.serviceLoc.value;
        const servicePrice = form.servicePrice.value;
        const serviceCat = form.serviceCat.value;
        const updateService = {

            imgUrl,
            desc,
            serviceName,
            serviceLoc,
            serviceCat,
            servicePrice,
        }


        fetch(`http://localhost:5000/services/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateService)
        })
        .then(res => res.json())
        .then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Changes you have made has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        });
    }
    return (
        <div className='lg:w-[55%] m-auto mt-6'>
            <form onSubmit={handleUpdate}>
                <div className="grid lg:grid-cols-2 md:grid-cols-2">
                    <div>
                        <input type="text" name="imgUrl" defaultValue={imgUrl} className="lg:w-[21rem] md:w-[21rem] w-[21rem] p-2 h-[9rem] rounded-md" placeholder="Image Url" />
                        <textarea name="desc" defaultValue={desc} className="lg:w-[21rem] md:w-[21rem] w-[21rem] p-2 h-[9rem] rounded-md mt-4" placeholder="Service Description" ></textarea>

                    </div>
                    <div className="">
                        <input type="text" name="serviceName"  defaultValue={serviceName} className="md:w-[22rem] lg:w-[22rem] w-[21rem] mt-3 rounded-md h-[3rem] p-2" placeholder="Service Name" />
                        <input type="text" name="serviceLoc"   defaultValue={serviceLoc} className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5" placeholder="Service Location" />
                        <input type="text" name="servicePrice" defaultValue={servicePrice} className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5" placeholder="Price" />
                        <select name="serviceCat" className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5" >
                            <option defaultValue={serviceCat} defaultChecked>{serviceCat}</option>
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

export default UpdateServ;