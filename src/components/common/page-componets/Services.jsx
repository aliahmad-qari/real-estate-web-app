import { services } from "../../../data/dummyData";

const Services = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">services</h1>
        <h1 className="heading">
          Specialist Services for Your Real Estate Needs
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {services.map(({ id, title, icon, description }) => (
          <div
            className="p-3 text-center rounded-lg hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark transition-all"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white transition-all">
              <div className="text-2xl"> {icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{title}</h1>
            <p className="mt-2">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
