import {
  BiBuildingHouse,
  BiBuildings,
  BiFullscreen,
  BiHomeAlt,
  BiMoney,
  BiShieldAlt2,
} from "react-icons/bi";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";

export const property = [
  {
    id: 1,
    name: "Luxury Villa with Ocean View",
    location: "Miami Beach, Florida",
    price: "1,250,000",
    distance: "0.5km from beach",
    purpose: "sale",
    type: "Villa",
    number_of_beds: 5,
    number_of_bathrooms: 4,
    contact: "+923079922301",
    dimensions: "4500 sq ft",
    description: "Stunning luxury villa featuring panoramic ocean views, modern architecture, and premium finishes. This property includes a private pool, spacious terrace, gourmet kitchen with high-end appliances, and smart home technology throughout. Perfect for those seeking an upscale coastal lifestyle.",
    image: "/images/property (25).jpg",
  },
  {
    id: 2,
    name: "Modern Family Home",
    location: "Austin, Texas",
    price: "675,000",
    distance: "2km from downtown",
    purpose: "sale",
    type: "House",
    number_of_beds: 4,
    number_of_bathrooms: 3,
    contact: "+923079922301",
    dimensions: "3200 sq ft",
    description: "Beautiful family home in a quiet neighborhood with excellent schools nearby. Features include an open-concept living area, updated kitchen, master suite with walk-in closet, large backyard perfect for entertaining, and a two-car garage. Move-in ready condition.",
    image: "/images/property (26).jpg",
  },
  {
    id: 3,
    name: "Downtown Luxury Apartment",
    location: "Manhattan, New York",
    price: "3,500",
    distance: "City Center",
    purpose: "rent",
    type: "Apartment",
    number_of_beds: 2,
    number_of_bathrooms: 2,
    contact: "+923079922301",
    dimensions: "1400 sq ft",
    description: "Sophisticated apartment in the heart of Manhattan with stunning city views. Features floor-to-ceiling windows, modern kitchen with stainless steel appliances, hardwood floors, in-unit washer/dryer, and 24/7 concierge service. Walking distance to restaurants, shops, and subway.",
    image: "/images/property (27).jpg",
  },
  {
    id: 4,
    name: "Cozy Suburban Cottage",
    location: "Portland, Oregon",
    price: "425,000",
    distance: "15km from city",
    purpose: "sale",
    type: "House",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+923079922301",
    dimensions: "1800 sq ft",
    description: "Charming cottage-style home with character and warmth. Features include original hardwood floors, updated kitchen and bathrooms, cozy fireplace, covered front porch, and a beautifully landscaped garden. Perfect starter home or investment property.",
    image: "/images/property (28).jpg",
  },
  {
    id: 5,
    name: "Executive Penthouse Suite",
    location: "Chicago, Illinois",
    price: "5,800",
    distance: "Downtown",
    purpose: "rent",
    type: "Penthouse",
    number_of_beds: 3,
    number_of_bathrooms: 3,
    contact: "+923079922301",
    dimensions: "2800 sq ft",
    description: "Exclusive penthouse offering breathtaking skyline views and luxury living. Features include a private elevator, chef's kitchen, spa-like bathrooms, walk-in closets, and a wraparound terrace. Building amenities include gym, pool, and valet parking.",
    image: "/images/property (29).jpg",
  },
  {
    id: 6,
    name: "Commercial Office Space",
    location: "San Francisco, California",
    price: "8,500",
    distance: "Financial District",
    purpose: "rent",
    type: "Commercial",
    number_of_beds: 0,
    number_of_bathrooms: 2,
    contact: "+923079922301",
    dimensions: "3500 sq ft",
    description: "Prime commercial office space in the heart of San Francisco's Financial District. Features include modern open floor plan, conference rooms, high-speed internet infrastructure, and stunning bay views. Perfect for tech startups or established businesses.",
    image: "/images/property (30).jpg",
  },
  {
    id: 7,
    name: "Beachfront Condo",
    location: "San Diego, California",
    price: "2,200",
    distance: "Beachfront",
    purpose: "rent",
    type: "Apartment",
    number_of_beds: 2,
    number_of_bathrooms: 2,
    contact: "+923079922301",
    dimensions: "1600 sq ft",
    description: "Wake up to ocean views in this beautiful beachfront condo. Features include a spacious balcony, updated kitchen, master bedroom with ensuite, and access to resort-style amenities including pool, hot tub, and fitness center. Steps from the sand.",
    image: "/images/property (31).jpg",
  },
  {
    id: 8,
    name: "Mountain View Estate",
    location: "Denver, Colorado",
    price: "1,850,000",
    distance: "Mountain foothills",
    purpose: "sale",
    type: "Villa",
    number_of_beds: 6,
    number_of_bathrooms: 5,
    contact: "+923079922301",
    dimensions: "6200 sq ft",
    description: "Magnificent estate with panoramic mountain views on 2 acres of land. Features include vaulted ceilings, gourmet kitchen, wine cellar, home theater, outdoor kitchen, infinity pool, and guest house. Ultimate luxury mountain living.",
    image: "/images/property (32).jpg",
  },
  {
    id: 9,
    name: "Urban Loft Apartment",
    location: "Seattle, Washington",
    price: "2,800",
    distance: "Downtown",
    purpose: "rent",
    type: "Apartment",
    number_of_beds: 1,
    number_of_bathrooms: 1,
    contact: "+923079922301",
    dimensions: "950 sq ft",
    description: "Stylish loft in a converted warehouse featuring exposed brick, high ceilings, and industrial charm. Includes modern kitchen, spacious living area, and large windows providing abundant natural light. Pet-friendly building with rooftop deck.",
    image: "/images/property (33).jpg",
  },
  {
    id: 10,
    name: "Lakeside Family Retreat",
    location: "Minneapolis, Minnesota",
    price: "895,000",
    distance: "Lakefront",
    purpose: "sale",
    type: "House",
    number_of_beds: 4,
    number_of_bathrooms: 3,
    contact: "+923079922301",
    dimensions: "3800 sq ft",
    description: "Stunning lakeside property with private dock and beach access. Features include open-concept design, floor-to-ceiling windows, gourmet kitchen, finished basement, and expansive deck overlooking the water. Perfect for year-round enjoyment.",
    image: "/images/property (34).jpg",
  },
  {
    id: 11,
    name: "Historic Brownstone",
    location: "Boston, Massachusetts",
    price: "1,450,000",
    distance: "Back Bay",
    purpose: "sale",
    type: "House",
    number_of_beds: 4,
    number_of_bathrooms: 3,
    contact: "+923079922301",
    dimensions: "3400 sq ft",
    description: "Beautifully restored historic brownstone blending original charm with modern amenities. Features include ornate moldings, marble fireplaces, chef's kitchen, private garden, and roof deck. Located in one of Boston's most prestigious neighborhoods.",
    image: "/images/property (35).jpg",
  },
  {
    id: 12,
    name: "Golf Course Villa",
    location: "Scottsdale, Arizona",
    price: "1,650,000",
    distance: "Golf course frontage",
    purpose: "sale",
    type: "Villa",
    number_of_beds: 5,
    number_of_bathrooms: 4,
    contact: "+923079922301",
    dimensions: "4800 sq ft",
    description: "Luxurious villa on the golf course with resort-style living. Features include gourmet kitchen, wine room, home office, casita, outdoor living space with fireplace, pool and spa, and stunning golf course and mountain views.",
    image: "/images/property (36).jpg",
  },
];

export const services = [
  {
    id: 1,
    icon: <BiHomeAlt />,
    title: "Residential Properties",
    description:
      "Find your dream home from our extensive collection of houses, apartments, and condos in prime locations.",
  },
  {
    id: 2,
    icon: <BiBuildings />,
    title: "Commercial Spaces",
    description:
      "Discover premium office spaces and commercial properties perfect for your business needs.",
  },
  {
    id: 3,
    icon: <BiBuildingHouse />,
    title: "Luxury Estates",
    description:
      "Explore exclusive luxury properties with premium amenities and stunning architectural designs.",
  },
  {
    id: 4,
    icon: <BiMoney />,
    title: "Investment Opportunities",
    description:
      "Smart real estate investments with high ROI potential in growing markets.",
  },
  {
    id: 5,
    icon: <BiShieldAlt2 />,
    title: "Property Management",
    description:
      "Comprehensive property management services to maximize your investment returns.",
  },
  {
    id: 6,
    icon: <BiFullscreen />,
    title: "Virtual Tours",
    description:
      "Experience properties from anywhere with our immersive 360° virtual tour technology.",
  },
];

export const team = [
  {
    id: 1,
    name: "John Anderson",
    role: "Senior Real Estate Agent",
    image: "/images/avatar.png",
    socials: [
      { id: 1, icon: <FaFacebook />, url: "#" },
      { id: 2, icon: <FaTwitter />, url: "#" },
      { id: 3, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-ali-ahmad-mern" },
    ],
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Property Consultant",
    image: "/images/avatar-1.png",
    socials: [
      { id: 1, icon: <FaFacebook />, url: "#" },
      { id: 2, icon: <FaTwitter />, url: "#" },
      { id: 3, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-ali-ahmad-mern" },
    ],
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Investment Specialist",
    image: "/images/avatar-2.png",
    socials: [
      { id: 1, icon: <FaFacebook />, url: "#" },
      { id: 2, icon: <FaTwitter />, url: "#" },
      { id: 3, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-ali-ahmad-mern" },
    ],
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Luxury Property Expert",
    image: "/images/avatar-3.png",
    socials: [
      { id: 1, icon: <FaFacebook />, url: "#" },
      { id: 2, icon: <FaTwitter />, url: "#" },
      { id: 3, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-ali-ahmad-mern" },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "David Thompson",
    role: "Homeowner",
    image: "/images/avatar.png",
    rating: 5,
    comment:
      "PrimeEstate helped me find my dream home! Their team was professional, responsive, and made the entire process smooth and stress-free. Highly recommended!",
  },
  {
    id: 2,
    name: "Jennifer Lee",
    role: "Property Investor",
    image: "/images/avatar-1.png",
    rating: 5,
    comment:
      "Excellent service and great investment opportunities. The team's market knowledge and expertise helped me make informed decisions. Very satisfied with my investment.",
  },
  {
    id: 3,
    name: "Robert Martinez",
    role: "Business Owner",
    image: "/images/avatar-2.png",
    rating: 5,
    comment:
      "Found the perfect commercial space for my business through PrimeEstate. Their understanding of commercial real estate is outstanding. Thank you!",
  },
];

export const blog = [
  {
    id: 1,
    title: "Top 10 Tips for First-Time Home Buyers",
    category: "Buying Guide",
    date: "March 15, 2024",
    author: "Sarah Mitchell",
    image: "/images/blog/blog (1).jpg",
    excerpt: "Essential advice for navigating your first home purchase, from budgeting to closing the deal.",
    description: "Essential advice for navigating your first home purchase, from budgeting to closing the deal. Learn about mortgage pre-approval, finding the right real estate agent, understanding market conditions, and making competitive offers.",
  },
  {
    id: 2,
    title: "Real Estate Investment Strategies for 2024",
    category: "Investment",
    date: "March 10, 2024",
    author: "Michael Chen",
    image: "/images/blog/blog (2).jpg",
    excerpt: "Discover the most profitable real estate investment strategies and market trends for this year.",
    description: "Discover the most profitable real estate investment strategies and market trends for this year. Explore rental properties, fix-and-flip opportunities, REITs, and commercial real estate investments that can maximize your returns.",
  },
  {
    id: 3,
    title: "How to Stage Your Home for a Quick Sale",
    category: "Selling Tips",
    date: "March 5, 2024",
    author: "Emily Rodriguez",
    image: "/images/blog/blog (3).jpg",
    excerpt: "Professional staging tips that can help you sell your property faster and for a better price.",
    description: "Professional staging tips that can help you sell your property faster and for a better price. Learn about decluttering, neutral colors, lighting, curb appeal, and creating an emotional connection with potential buyers.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How do I start the home buying process?",
    answer:
      "Start by getting pre-approved for a mortgage, then work with our agents to identify properties that match your criteria and budget. We'll guide you through viewings, negotiations, and closing.",
  },
  {
    id: 2,
    question: "What documents do I need to rent a property?",
    answer:
      "Typically, you'll need proof of income, employment verification, government-issued ID, and references. Specific requirements may vary by property.",
  },
  {
    id: 3,
    question: "Do you offer property management services?",
    answer:
      "Yes, we provide comprehensive property management services including tenant screening, rent collection, maintenance coordination, and financial reporting.",
  },
  {
    id: 4,
    question: "How are property prices determined?",
    answer:
      "Property prices are based on location, size, condition, market trends, and comparable sales in the area. Our agents provide detailed market analysis for accurate pricing.",
  },
  {
    id: 5,
    question: "Can I schedule a virtual tour?",
    answer:
      "Absolutely! We offer 360° virtual tours for most properties. Contact us to schedule a virtual viewing at your convenience.",
  },
];


export const brands = [
  { id: 1, image: "/images/brands/airbnb.png", name: "Airbnb" },
  { id: 2, image: "/images/brands/cisco.png", name: "Cisco" },
  { id: 3, image: "/images/brands/ebay.png", name: "eBay" },
  { id: 4, image: "/images/brands/microsoft.png", name: "Microsoft" },
  { id: 5, image: "/images/brands/uber.png", name: "Uber" },
];

export const categories = [
  { id: 1, name: "Residential", count: 45, icon: <BiHomeAlt /> },
  { id: 2, name: "Commercial", count: 28, icon: <BiBuildings /> },
  { id: 3, name: "Luxury", count: 15, icon: <BiBuildingHouse /> },
  { id: 4, name: "Apartments", count: 62, icon: <BiBuildings /> },
];

export const feeds = blog;

export const tags = [
  "Real Estate",
  "Property",
  "Investment",
  "Luxury Homes",
  "Commercial",
  "Residential",
  "Apartments",
  "Condos",
];

export const projects = property.slice(0, 6);

export const socials = [
  { id: 1, icon: <FaFacebook />, url: "#" },
  { id: 2, icon: <FaTwitter />, url: "#" },
  { id: 3, icon: <FaInstagram />, url: "#" },
  { id: 4, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-ali-ahmad-mern" },
];

export const teamMembers = team;

export const ratings = property.slice(0, 3);

export const focus = [
  {
    id: 1,
    icon: <BiShieldAlt2 />,
    title: "Trusted Service",
    description: "Over 15 years of trusted real estate expertise and customer satisfaction.",
  },
  {
    id: 2,
    icon: <BiMoney />,
    title: "Best Prices",
    description: "Competitive pricing and excellent value for your investment.",
  },
  {
    id: 3,
    icon: <FiHeadphones />,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your real estate needs.",
  },
];

export const priceRanges = [
  { id: 1, label: "Under $500K", value: "0-500000" },
  { id: 2, label: "$500K - $1M", value: "500000-1000000" },
  { id: 3, label: "$1M - $2M", value: "1000000-2000000" },
  { id: 4, label: "Above $2M", value: "2000000-999999999" },
  { id: 5, label: "Under $2K/month", value: "0-2000" },
  { id: 6, label: "$2K - $5K/month", value: "2000-5000" },
  { id: 7, label: "Above $5K/month", value: "5000-999999" },
];

export const propertyTypes = [
  { id: 1, name: "All Types", value: "all" },
  { id: 2, name: "House", value: "House" },
  { id: 3, name: "Apartment", value: "Apartment" },
  { id: 4, name: "Villa", value: "Villa" },
  { id: 5, name: "Penthouse", value: "Penthouse" },
  { id: 6, name: "Commercial", value: "Commercial" },
];
