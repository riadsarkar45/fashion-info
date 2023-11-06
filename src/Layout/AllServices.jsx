import { useLoaderData } from "react-router-dom";
import AllServicesCard from "./AllServicesCard";
import { useState, useEffect } from "react";

const AllServices = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredLoad, setFilteredLoad] = useState(null);
    const [sortOrder, setSortOrder] = useState(""); // State for sorting order

    const loader = useLoaderData();

    // Function to sort the data based on servicePrice
    const sortData = (data, order) => {
        if (order === "High to Low") {
            return data.slice().sort((a, b) => b.servicePrice - a.servicePrice);
        } else if (order === "Low to High") {
            return data.slice().sort((a, b) => a.servicePrice - b.servicePrice);
        } else {
            return data; // Default order
        }
    };

    // Function to filter and sort data
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
        // Combine filtering and sorting to update the displayed data
        if (loader) {
            const sortedData = filterAndSortData(loader, searchQuery, sortOrder);
            setFilteredLoad(sortedData);
        }
    }, [searchQuery, sortOrder, loader]);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <div className="w-[85%] m-auto flex justify-between mt-4">
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered input-primary w-full max-w-xs"
                        value={searchQuery}
                        onChange={handleChange}
                    />
                </form>
                <div className="w-[6rem]">
                    <select
                        className="select select-accent w-full max-w-xs"
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="High to Low">High price to low</option>
                        <option value="Low to High">Low price to high</option>
                    </select>
                </div>
            </div>
            <div className="w-[85%] m-auto grid grid-cols-3 gap-3 mt-5">
                {filteredLoad ? (
                    filteredLoad.map((cards) => (
                        <AllServicesCard key={cards.id} cards={cards}></AllServicesCard>
                    ))
                ) : (
                    loader.map((cards) => (
                        <AllServicesCard key={cards.id} cards={cards}></AllServicesCard>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllServices;
