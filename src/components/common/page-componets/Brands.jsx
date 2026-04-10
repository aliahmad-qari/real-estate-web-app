import { brands } from "../../../data/dummyData";

const Brands = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center max-w-[500px] mx-auto mb-8">
        <h1 className="mx-auto sub-heading">partners</h1>
        <h1 className="heading">Trusted Partners</h1>
        <p className="text-gray-600 dark:text-gray-300">
          We collaborate with leading brands and companies to provide you with the best real estate experience.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 p-4 mt-8">
        {brands && brands.length > 0 ? (
          brands.map((brand) => (
            <div 
              className="group p-4 rounded-lg hover:shadow-lg transition-all bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-700" 
              key={brand.id}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
              />
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>No brands available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
