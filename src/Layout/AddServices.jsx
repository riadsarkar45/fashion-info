
const AddServices = () => {
    return (
        <div className='lg:w-[55%] m-auto'>
            <form>
                <div className="grid lg:grid-cols-2 md:grid-cols-2">
                    <div>
                        <input type="text" className="lg:w-[21rem] md:w-[21rem] w-[21rem] p-2 h-[9rem] rounded-md" placeholder="Image Url" />
                        <input type="text" className="lg:w-[21rem] md:w-[21rem] w-[21rem] p-2 h-[9rem] rounded-md mt-4" placeholder="Service Description" />
                        <input type="text" className="lg:w-[44rem] md:w-[44rem] w-[21rem] p-2 h-[9rem] rounded-md mt-4" placeholder="Service Description" />
                    </div>
                    <div className="">
                        <input type="text" name="serviceName" className="md:w-[22rem] lg:w-[22rem] w-[21rem] mt-3 rounded-md h-[3rem] p-2" placeholder="Service Name" />
                        <input type="text" name="serviceName" className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5" placeholder="Service Location" />
                        <input type="text" name="serviceName" className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5" placeholder="Price" />
                        <input type="text" name="serviceName" className="md:w-[22rem] lg:w-[22rem] w-[21rem] rounded-md h-[3rem] p-2 mt-5" placeholder="Service Category" />
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