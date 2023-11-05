
const ServiceDetail = () => {
    return (
        <div className="w-[85%] m-auto">
            <section className="py-20 overflow-hidden bg-white font-poppins h-auto dark:bg-gray-800">
                <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10" style={{ height: 450 }}>
                                    <img
                                        src="https://i.postimg.cc/8zr7BpVj/long-sleeved-t-shirt-isolated-2021-08-26-17-06-58-utc-removebg-preview.png"
                                        alt=""
                                        className="object-contain w-full h-full "
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 ">
                            <div className="lg:pl-20">
                                <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                                    <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                                        New
                                    </span>
                                    <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                                        Long-Sleeved T-shirt
                                    </h2>
                                    <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                        Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                        Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                        Lorem ispum dor amet Lorem ispum dor amet
                                    </p>
                                    <div>
                                        <h2 className="text-2xl">Service Provider Detail</h2>
                                        <div className="mt-8">
                                            <div className="flex gap-4 items-center">
                                                <img src="https://i.ibb.co/MZwCv5m/tech-daily-pz-L0-Yp-SVv-E-unsplash.jpg" className="w-[20%] rounded-3xl" alt="" />
                                                <p className="text-2xl ">Riad Sarkar</p>
                                            </div>
                                            <p className="max-w-md mb-8 mt-4 text-gray-700 dark:text-gray-400">
                                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                                                Lorem ispum dor amet Lorem ispum dor amet
                                            </p>
                                        </div>
                                    </div>
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                        <span>$994.00</span>
                                        <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                                            $1500.00
                                        </span>
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center ">

                                    <div className="mb-4 mr-4 lg:mb-0">
                                        <button className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiceDetail;