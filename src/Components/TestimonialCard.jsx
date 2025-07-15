const testimonials = [
  {
    name: "Chika A., Lagos",
    title: "Event Assistant & Tutor",
    rating: "4.5+",
    comment: "I used to struggle to find legit short-term jobs near me. Since joining Skill2Earn, I've worked over 10 gigs in just two months. From event support to tutoring, it's been a real game-changer!",
    img: "/imgtst/tst1.png", 
  },
  {
    name: "David M., Abuja",
    title: "Cleaning & Logistics Worker",
    rating: "4.5+",
    comment: "I was fresh out of school with no experience. I found cleaning gigs on this platform and took a few skill courses too. Now I'm building a steady income and even landed a permanent job through one of my gigs",
    img: "/imgtst/tst2.png",
  },
  {
    name: "Tolu B., Business Owner",
    title: "Events & Logistics Coordinator",
    rating: "4.5+",
    comment: "Hiring for events and last-minute delivery jobs used to be stressful. Now I just log into Skill2Earn, post the job and get quality applicants fast. Super reliable",
    img: "/imgtst/tst3.png",
  },
  {
    name: "Aminat R., Ibadan",
    title: "Freelance Tutor & Learner",
    rating: "4.5+",
    comment: "I started with zero experience, but the free skill courses gave me confidence. After completing two, I got hired for a tutoring gig the same week. Now I balance learning and earning all in one place",
    img: "/imgtst/tst4.png",
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-neutral-black text-3xl font-bold text-center mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border p-6 rounded-lg">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex flex-col justify-between">
            <p className="text-sm text-gray-700 mb-4">{item.comment}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={item.img} alt="user" className="w-10 h-10 rounded-full" />
                <div className="text-sm">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-primary text-xs">{item.title}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-yellow-500 text-sm font-bold">⭐ ★ ★ ★ ★</p>
                <p className="text-sm font-semibold">{item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






