import { useState } from "react";
import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSearchTerm,
  setSelectedType,
  setSelectedPurpose,
  setPriceRange,
} from "../../../features/filterSlice";

const Filters = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [price, setPrice] = useState("all");
  const [purpose, setPurpose] = useState("all");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(setSearchTerm(location));
    dispatch(setSelectedType(propertyType));
    dispatch(setPriceRange(price));
    dispatch(setSelectedPurpose(purpose));
    navigate("/property");
  };

  return (
    <div className="md:max-w-[80%] w-full mx-auto relative -mt-8 sm:-mt-20">
      <div className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Location</h1>
            <div className="flex-align-center gap-x-2">
              <BiMap />
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Property Type</h1>
            <div className="flex-align-center gap-x-2">
              <BiBuildings />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
              >
                <option value="all">All Types</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Price Range</h1>
            <div className="flex-align-center gap-x-2">
              <BiMoney />
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
              >
                <option value="all">All Prices</option>
                <option value="0-500000">Under $500K</option>
                <option value="500000-1000000">$500K - $1M</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000-999999999">Above $2M</option>
                <option value="0-2000">Under $2K/month</option>
                <option value="2000-5000">$2K - $5K/month</option>
                <option value="5000-999999">Above $5K/month</option>
              </select>
            </div>
          </div>
          <div className="flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light">
            <h1 className="font-bold">For</h1>
            <div className="flex-align-center gap-x-2">
              <BiBriefcase />
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark"
              >
                <option value="all">All</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>
        </div>
        <button 
          onClick={handleSearch}
          className="w-full btn btn-primary md:w-fit"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filters;
