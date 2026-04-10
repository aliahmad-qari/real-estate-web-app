import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { categories } from "../../../data/dummyData";

const Categories = () => {
  const categoryContainer = useRef(null);
  const [isScroll, setIsscroll] = useState(false);
  
  const scrollContainer = (direction) => {
    if (categoryContainer.current) {
      direction === "right"
        ? (categoryContainer.current.scrollLeft += 200)
        : (categoryContainer.current.scrollLeft -= 200);
      setIsscroll(categoryContainer.current.scrollLeft > 0);
    }
  };

  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="md:col-span-1">
          <h1 className="sub-heading">categories</h1>
          <h1 className="heading">
            Find Your Dream House by Searching Our Popular Categories
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Browse through our diverse property categories to find exactly what you're looking for.
          </p>
          <Link to="/property">
            <button className="mt-4 btn btn-primary">All Categories</button>
          </Link>
        </div>
        
        <div className="md:col-span-3">
          <div className="justify-end flex-align-center gap-x-3 mb-4">
            <button
              className={`btn btn-secondary !p-2 ${
                !isScroll && "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => scrollContainer("left")}
              disabled={!isScroll}
            >
              <FiChevronLeft />
            </button>
            <button
              className="btn btn-secondary !p-2"
              onClick={() => scrollContainer("right")}
            >
              <FiChevronRight />
            </button>
          </div>

          <div
            className="gap-4 mt-4 overflow-auto flex-align-center scroll-smooth hide-scrollbar"
            ref={categoryContainer}
          >
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <Link
                  to="/property"
                  key={category.id}
                  className="flex-shrink-0 w-[280px] group"
                >
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 hover:shadow-xl transition-all border-2 border-slate-200 dark:border-slate-700 hover:border-primary">
                    <div className="p-8 text-center">
                      <div className="icon-box !w-20 !h-20 mx-auto !bg-primary/30 text-primary mb-4 group-hover:!bg-primary group-hover:text-white transition-all">
                        <div className="text-4xl">{category.icon}</div>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {category.name}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        {category.count} Properties
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center w-full">
                <p>No categories available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
