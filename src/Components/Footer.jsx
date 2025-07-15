import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description + Socials */}
        <div>
          <div className="rounded-3xl h-[49px] flex items-center gap-2 mb-4 bg-white w-[170px]">
            <img src="/Assets/logo.jpg" alt="Skill2Earn Logo" className="w-6 h-6 ml-5" />
            <span className="font-bold text-lg text-primary">Skill2Earn</span>
          </div>
          <p className="text-sm mb-4">
            We empower individuals to earn, grow, and succeed through flexible gig opportunities. Join a trusted community where skills meet real-world demand.
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          </div>
          <p className="text-xs mt-6">© 2025 Skill2Earn. All rights reserved.</p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li className='w-lstw h-lsh cursor-pointer'>Our Story</li>
            <li className='w-lstw h-lsh cursor-pointer'>Mission & Vision</li>
            <li className='w-lstw h-lsh cursor-pointer'>How It Works</li>
            <li className='w-lstw h-lsh cursor-pointer'>Meet the Team</li>
            <li className='w-lstw h-lsh cursor-pointer'>Careers</li>
            <li className='w-lstw h-lsh cursor-pointer'>Newsroom</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className='w-lstw h-lsh  cursor-pointer'>Contact Us</li>
            <li className='w-lstw h-lsh  cursor-pointer'>FAQs</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Support Center</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Media Kit</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Affiliate Program</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Partner With Us</li>
          </ul>
        </div>

        {/* Services */} 
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className='w-lstw h-lsh  cursor-pointer'>Courses</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Browse Gigs</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Post a Gig</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Gig Categories</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Ratings & Review</li>
            <li className='w-lstw h-lsh  cursor-pointer'>Payment Info</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
