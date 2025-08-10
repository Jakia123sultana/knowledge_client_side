import React from 'react';
import Marquee from 'react-fast-marquee';
import { FiActivity, FiHome, FiBriefcase, FiServer, FiPenTool } from 'react-icons/fi';
import { FaHeartbeat, FaPlane, FaLaptopCode, FaMoneyBill, FaGraduationCap } from 'react-icons/fa';
import { MdHealthAndSafety, MdTravelExplore, MdComputer, MdDesignServices, MdSchool } from 'react-icons/md';

const categoryIcons = {
  'All News': <FiActivity size={48} color="#00CED1" />,
  'Health': <FaHeartbeat size={48} color="#32CD32" />,
  'Travel': <FaPlane size={48} color="#FFD700" />,
  'Technology': <FaLaptopCode size={48} color="#8A2BE2" />,
  'Finance': <FaMoneyBill size={48} color="#FF6347" />,
  'Career': <FiBriefcase size={48} color="#20B2AA" />,
  'Programming': <FiServer size={48} color="#FF4500" />,
  'Mental Health': <MdHealthAndSafety size={48} color="#3CB371" />,
  'Environment': <MdTravelExplore size={48} color="#2E8B57" />,
  'Design': <MdDesignServices size={48} color="#6A5ACD" />,
  'Education': <MdSchool size={48} color="#4682B4" />
};

const categories = ['All News', 'Health', 'Travel', 'Technology', 'Design','Finance', 'Programming', 'Mental Health','Environment', 'Education'];

const MarqueeWithIcons = () => (
  <Marquee gradient={false} speed={50} pauseOnHover={true}>
   
    {categories.map((category, index) => (
      <div key={index} className="flex items-center space-x-2 mx-4">
        <div className="p-2 rounded-full text-[#00CED1]" >{categoryIcons[category]}</div>

      </div>
    ))}
  </Marquee>
);

export default MarqueeWithIcons;
