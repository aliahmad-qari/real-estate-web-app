import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BiBed, BiMap, BiMapAlt, BiTab, BiPhone } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { property } from "../data/dummyData";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const foundProperty = property.find((item) => item.id === parseInt(id));
    if (foundProperty) {
      setPropertyData(foundProperty);
    } else {
      navigate("/property");
    }
  }, [id, navigate]);

  if (!propertyData) {
    return (
      <div className="min-h-screen flex-center-center">
        <div className="loader"></div>
      </div>
    );
  }

  const whatsappMessage = `Hi, I'm interested in ${propertyData.name} located at ${propertyData.location}`;
  const whatsappUrl = `https://wa.me/923079922301?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-20 px-[3%] md:px-[6%] pb-20">
      {/* Breadcrumb */}
      <div className="mb-6 flex-align-center gap-x-2 text-sm">
        <Link to="/" className="hover:text-primary transition-a">Home</Link>
        <span>/</span>
        <Link to="/property" className="hover:text-primary transition-a">Properties</Link>
        <span>/</span>
        <span className="text-primary">{propertyData.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Property Image */}
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img
              src={propertyData.image}
              alt={propertyData.name}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className={`px-4 py-2 rounded-full text-white font-semibold ${
                propertyData.purpose === "sale" ? "bg-green-500" : "bg-blue-500"
              }`}>
                For {propertyData.purpose}
              </span>
              {propertyData.type && (
                <span className="px-4 py-2 rounded-full bg-black/70 text-white font-semibold">
                  {propertyData.type}
                </span>
              )}
            </div>
          </div>

          {/* Property Info */}
          <div className="card mb-6">
            <h1 className="text-3xl font-bold mb-2">{propertyData.name}</h1>
            <div className="flex-align-center gap-x-2 text-muted mb-4">
              <BiMap className="text-primary" />
              <p>{propertyData.location}</p>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              ${propertyData.price}
              {propertyData.purpose === "rent" && <span className="text-lg text-muted">/month</span>}
            </h2>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex-align-center gap-x-3 p-3 bg-slate-100 dark:bg-hover-color-dark rounded-lg">
                <div className="icon-box !w-10 !h-10 bg-primary/20 text-primary">
                  <BiBed />
                </div>
                <div>
                  <p className="text-sm text-muted">Bedrooms</p>
                  <p className="font-bold">{propertyData.number_of_beds}</p>
                </div>
              </div>
              <div className="flex-align-center gap-x-3 p-3 bg-slate-100 dark:bg-hover-color-dark rounded-lg">
                <div className="icon-box !w-10 !h-10 bg-primary/20 text-primary">
                  <BiTab />
                </div>
                <div>
                  <p className="text-sm text-muted">Bathrooms</p>
                  <p className="font-bold">{propertyData.number_of_bathrooms}</p>
                </div>
              </div>
              <div className="flex-align-center gap-x-3 p-3 bg-slate-100 dark:bg-hover-color-dark rounded-lg">
                <div className="icon-box !w-10 !h-10 bg-primary/20 text-primary">
                  <BiMapAlt />
                </div>
                <div>
                  <p className="text-sm text-muted">Area</p>
                  <p className="font-bold">{propertyData.dimensions}</p>
                </div>
              </div>
              <div className="flex-align-center gap-x-3 p-3 bg-slate-100 dark:bg-hover-color-dark rounded-lg">
                <div className="icon-box !w-10 !h-10 bg-primary/20 text-primary">
                  <BiMap />
                </div>
                <div>
                  <p className="text-sm text-muted">Distance</p>
                  <p className="font-bold">{propertyData.distance}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-muted leading-relaxed">{propertyData.description}</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Contact Card */}
          <div className="card sticky top-20 mb-6">
            <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
            
            <div className="space-y-3 mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-align-center gap-x-3 p-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-all"
              >
                <FaWhatsapp className="text-2xl" />
                <div>
                  <p className="text-sm">WhatsApp</p>
                  <p className="font-semibold">Chat Now</p>
                </div>
              </a>

              <a
                href={`tel:${propertyData.contact}`}
                className="flex-align-center gap-x-3 p-3 bg-primary text-white rounded-lg hover:bg-[#f7751e] transition-all"
              >
                <BiPhone className="text-2xl" />
                <div>
                  <p className="text-sm">Call Us</p>
                  <p className="font-semibold">{propertyData.contact}</p>
                </div>
              </a>
            </div>

            {/* Inquiry Form */}
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full input"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full input"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full input"
                defaultValue={`I'm interested in ${propertyData.name}`}
              ></textarea>
              <button type="submit" className="w-full btn btn-primary">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
