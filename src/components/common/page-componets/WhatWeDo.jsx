import { focus } from "../../../data/dummyData";

const WhatWeDo = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-8">
        <h1 className="mx-auto sub-heading">what we do</h1>
        <h1 className="heading">Our Main Focus: Your Property Growth</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3">
        {focus && focus.length > 0 ? (
          focus.map((item) => (
            <div
              className="p-6 text-center rounded-lg border-2 border-slate-200 dark:border-slate-700 group hover:shadow-xl hover:border-primary transition-all bg-white dark:bg-card-dark"
              key={item.id}
            >
              <div className="icon-box !w-16 !h-16 mx-auto !bg-primary/20 text-primary group-hover:!bg-primary group-hover:text-white mb-4 transition-all">
                <div className="text-3xl">{item.icon}</div>
              </div>
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
              <div className="hidden mt-4 group-hover:block">
                <button className="btn btn-primary">View More Details</button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p>No focus items available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeDo;
