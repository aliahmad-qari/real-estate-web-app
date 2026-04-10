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
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3">
        {services && services.length > 0 ? (
          services.map((service) => (
            <div
              className="p-6 text-center rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-primary transition-all bg-white dark:bg-card-dark"
              key={service.id}
            >
              <div className="icon-box !w-16 !h-16 mx-auto !bg-primary/20 text-primary mb-4">
                <div className="text-3xl">{service.icon}</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p>No services available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
