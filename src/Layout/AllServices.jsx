import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AllServicesCard from "./AllServicesCard";
import { motion } from "framer-motion";

const AllServices = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredLoad, setFilteredLoad] = useState([]);
    const [sortOrder, setSortOrder] = useState("");
    const [showAll, setShowAll] = useState(false); // State to control displaying all data
    const loader = useLoaderData();

    const sortData = (data, order) => {
        if (order === "High to Low") {
            return data.slice().sort((a, b) => b.servicePrice - a.servicePrice);
        } else if (order === "Low to High") {
            return data.slice().sort((a, b) => a.servicePrice - b.servicePrice);
        } else {
            return data;
        }
    };

    const filterAndSortData = (data, query, order) => {
        let filteredData = data;

        if (query) {
            filteredData = data.filter((card) =>
                card.serviceName?.toLowerCase().includes(query.toLowerCase())
            );
        }

        return sortData(filteredData, order);
    };

    useEffect(() => {
        if (loader) {
            const sortedData = filterAndSortData(loader, searchQuery, sortOrder);
            setFilteredLoad(sortedData);
        }
    }, [searchQuery, sortOrder, loader]);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleShowAll = () => {
        setShowAll(true); // Display all data when "Show All" is clicked
    };

    const visibleData = showAll ? filteredLoad : filteredLoad.slice(0, 6);

    return (
        <div>
            <div className="lg:w-[85%] md:w-[85%] m-auto lg:flex md:flex justify between mt-4">
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered input-primary w-full max-w-xs"
                        value={searchQuery}
                        onChange={handleChange}
                    />
                </form>
                <div className="md:w-[6rem] lg:w-[6rem]">
                    <select
                        className="select select-accent w-full max-w-xs"
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="">Sort</option>
                        <option value="High to Low">High price to low</option>
                        <option value="Low to High">Low price to high</option>
                    </select>
                </div>
            </div>
            <div className="w-[85%] m-auto grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-3 mt-5">
                {visibleData.map((cards) => (
                    <AllServicesCard key={cards.id} cards={cards}></AllServicesCard>
                ))}
            </div>
            <div className="text-center mb-3 mt-4">
                {
                    filteredLoad.length > 6 && !showAll ? (
                        <button onClick={handleShowAll} className="btn btn-primary">
                            Show All
                        </button>
                    ) : null

                }
            </div>
        </div>
    );
};

export default AllServices;
