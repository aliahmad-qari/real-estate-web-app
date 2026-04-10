import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pagination } from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { property } from "../data/dummyData";
import { filterStore } from "../features/filterSlice";

const Property = () => {
  const { searchTerm, selectedType, selectedPurpose, priceRange } = useSelector(filterStore);
  const [filteredData, setFilteredData] = useState(property);

  useEffect(() => {
    let filtered = [...property];

    // Filter by search term (location)
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by property type
    if (selectedType && selectedType !== "all") {
      filtered = filtered.filter((item) => item.type === selectedType);
    }

    // Filter by purpose (sale/rent)
    if (selectedPurpose && selectedPurpose !== "all") {
      filtered = filtered.filter((item) => item.purpose === selectedPurpose);
    }

    // Filter by price range
    if (priceRange && priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((item) => {
        const price = parseFloat(item.price.replace(/,/g, ""));
        return price >= min && price <= max;
      });
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedType, selectedPurpose, priceRange]);

  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Available Properties</h1>
        <p className="text-muted">
          {filteredData.length} {filteredData.length === 1 ? 'property' : 'properties'} found
        </p>
      </div>
      <PropertyList basis="basis-[25rem]" />
      <Pagination itemsPerPage={6} pageData={filteredData} />
    </div>
  );
};

export default Property;
