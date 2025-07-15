import { useEffect, useRef, useState } from "react";

export default function AutoPlayRider() {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const totalSlides = 6; // Update this if you change the number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 10}%)`;
    }
  }, [index]);

  return (
    <div className=" flex mr-10 flex-col h-70 relative right-10  pb-16 w-width-1241 mb-10  overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out gap-40"
      >
        <img
          src="/rider/gigs.png"
          className="w-full flex"
          alt="Slide 1"
        />
        <img
          src="/rider/matches.png"
          className="w-full flex"
          alt="Slide 2"
        />
        <img
          src="/rider/skil.png"
          className="w-full flex"
          alt="Slide 3"
        />

        <img
          src="/rider/gigs.png"
          className="w-full flex"
          alt="Slide 1"
        />
        <img
          src="/rider/matches.png"
          className="w-full flex"
          alt="Slide 2"
        />
        <img
          src="/rider/skil.png"
          className="w-full flex"
          alt="Slide 3"
        />
      </div>
    </div>
  );
}
