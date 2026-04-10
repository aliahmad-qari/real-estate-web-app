import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SingleFeedCardGrid = ({
  id,
  title,
  date,
  image,
  category,
  author,
  description,
  excerpt,
}) => {
  // Use excerpt if description is not available
  const content = description || excerpt || "";
  const displayText = content.length > 200 ? content.slice(0, 200) + "..." : content;

  return (
    <div className="flex flex-col gap-3 sm:flex-row group">
      <div className="relative flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-64 rounded-lg sm:w-48"
          loading="lazy"
        />
        <div className="absolute right-0 -rotate-90 translate-y-1/2 top-1/2">
          <span className="px-3 py-1 text-white capitalize rounded-full bg-secondary">
            {category || "Blog"}
          </span>
        </div>
      </div>
      <div>
        <Link
          to={`/blog/${id}`}
          className="group-hover:text-primary transition-a"
        >
          <h1 className="text-lg font-semibold capitalize">{title}</h1>
        </Link>
        <p className="mt-3 text-sm uppercase opacity-60">
          by {author || "PrimeEstate"}: {date}
        </p>
        <p className="mt-2">{displayText}</p>
        <Link to={`/blog/${id}`} className="mt-4 flex-align-center gap-x-2 hover:underline text-primary">
          <span className="uppercase hover:underline">read more</span>{" "}
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SingleFeedCardGrid;
