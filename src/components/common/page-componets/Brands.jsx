import { brands } from "../../../data/dummyData";

const Brands = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center max-w-[400px] mx-auto">
        <h1 className="mx-auto sub-heading">partners</h1>
        <h1 className="heading">Trusted Partners</h1>
        <p>
          We collaborate with leading brands and companies to provide you with the best real estate experience.
        </p>
      </div>
      <div className="flex-wrap p-4 mt-8 flex-center-center gap-x-16 gap-y-5">
        {brands.map((brand) => (
          <div className="group" key={brand.id}>
            <img
              src={brand.image}
              alt={brand.name}
              className="w-20 h-20 object-contain group-hover:scale-125 transition-a"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
