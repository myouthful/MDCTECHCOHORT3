
const ctaSteps = [
  {
    title: 'Sign Up & Verify',
    icons: <img src="/icons/badge-check.png" className="mb-4 w-8 h-8" alt="Verify" />,
    txt: 'Create your free account in minutes. Complete a quick verification process to ensure a trusted community for all users.',
  },
  {
    title: 'Find Nearby Gigs',
    icons: <img src="/icons/location-03.png" className="mb-4 w-8 h-8" alt="Location" />,
    txt: 'Browse real-time listings based on your location and skills. Apply for the ones that suit you best, right from where you are.',
  },
  {
    title: 'Work & Get Rated',
    icons: <img src="/icons/badge-star-2.png" className="mb-4 w-8 h-8" alt="Rated" />,
    txt: 'Complete gigs to the best of your ability. Receive ratings and reviews to build your reputations and unlock more opportunities.',
  },
  {
    title: 'Earn While Working',
    icons: <img src="/icons/dollar.png" className="mb-4 w-8 h-8" alt="Earn" />,
    txt: 'Get paid quickly for every job you complete. The more you work, the more you earn, it’s that simple.',
  },
];

function CTA() {
  return (
    <div className="flex flex-col max-w-[1241px] mx-auto px-4 py-12 gap-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neutral-black">
          How It <span className="text-primary">Works</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {ctaSteps.map((step, index) => (
          <div
            key={index}
            className="border rounded-[20px] p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {step.icons}
              <h3 className="text-lg text-[20px] font-font-weight-600 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.txt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-primary hover:bg-blue-700 text-white font-medium px-6 py-2 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default CTA;
