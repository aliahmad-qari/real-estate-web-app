import { useEffect } from "react";

const PortifolioTwo = () => {
  useEffect(() => {
    // Redirect to external portfolio
    window.location.href = "https://muhammad-ali-ahmad-portfolio.vercel.app/";
  }, []);

  return (
    <div className="pt-20 px-[3%] md:px-[6%] min-h-screen flex-center-center">
      <div className="text-center">
        <div className="loader mb-4"></div>
        <h1 className="text-2xl font-bold">Redirecting to Portfolio...</h1>
        <p className="mt-2 text-muted">
          If you're not redirected automatically,{" "}
          <a
            href="https://muhammad-ali-ahmad-portfolio.vercel.app/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default PortifolioTwo;
