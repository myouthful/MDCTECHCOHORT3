import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
<section className="px-4 sm:px-6 bg-center  justify-center flex items-center bg-footer-hero-bg relative w-full h-screen bg-cover">
    {/* // over-lay box */}
    <div className="bg-white bg-opacity-80 rounded-xl shadow-lg p-6 sm:p-8 max-w-md text-center">
      <h1 className="text-2xl font-bold text-neutral-black mb-4">
        Do You Need A Reliable <br /> Help Fast?
      </h1>
      <p className="text-sm text-neutral mb-4">
        Post your gigs and find <br />
        trusted local talents.
      </p>
      <button className="hover:bg-blue-700 font-semibold bg-primary py-2 px-4 rounded text-white">
        <Link to="/start">Get Started</Link>
      </button>
    </div>
    </section>
  );
};

export default GetStarted;
