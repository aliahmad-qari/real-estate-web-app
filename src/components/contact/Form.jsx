import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      console.log("Form submitted:", formData);
      setSubmitted(true);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="pt-10 pb-8">
      {submitted && (
        <div className="mb-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="flex-col gap-4 flex-align-center sm:flex-row">
          <div className="flex-1 w-full">
            <p className="mb-2">First Name <span className="text-red-500">*</span></p>
            <input
              type="text"
              name="firstName"
              className={`w-full input ${errors.firstName ? "!border-red-500" : ""}`}
              placeholder="First Name.."
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="flex-1 w-full">
            <p className="mb-2">Last Name <span className="text-red-500">*</span></p>
            <input
              type="text"
              name="lastName"
              className={`w-full input ${errors.lastName ? "!border-red-500" : ""}`}
              placeholder="Last Name.."
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Email Address <span className="text-red-500">*</span></p>
          <input
            type="email"
            name="email"
            className={`w-full input ${errors.email ? "!border-red-500" : ""}`}
            placeholder="Email Address.."
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mt-4">
          <p className="mb-2">Message <span className="text-red-500">*</span></p>
          <textarea
            name="message"
            rows={4}
            className={`w-full input ${errors.message ? "!border-red-500" : ""}`}
            placeholder="Your message.."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div className="mt-6 flex-center-center">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
