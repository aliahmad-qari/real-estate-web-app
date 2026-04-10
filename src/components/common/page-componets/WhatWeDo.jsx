import { focus } from "../../../data/dummyData";

const WhatWeDo = () => {
  return (
    <div className="py-16">
      <div className="text-center">
        <h1 className="mx-auto sub-heading">what we do</h1>
        <h1 className="heading">Our Main Focus: Your Property Growth</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3">
        {focus.map(({ id, title, icon, description }) => (
          <div
            className="p-3 text-center rounded-lg group hover:card-shadow hover:border-t-4 hover:border-t-primary dark:hover:bg-card-dark transition-all"
            key={id}
          >
            <div className="icon-box !opacity-100 !w-14 !h-14 mx-auto !bg-primary/20 text-primary hover:!bg-primary hover:text-white transition-all">
              <div className="text-2xl"> {icon}</div>
            </div>
            <h1 className="mt-2 heading !text-xl">{title}</h1>
            <p className="mt-2">{description}</p>
            <div className="hidden mt-4 group-hover:flex-center-center ">
              <button className="btn btn-primary">View More Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
