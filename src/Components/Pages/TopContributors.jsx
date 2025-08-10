import React from "react";
import { FiCheck } from "react-icons/fi";

export default function TopContributors() {
  return (
    <section className="max-w-4xl mx-auto p-6 rounded-lg shadow-md text-white">
      <h2 className="text-3xl font-bold mb-6 text-white">
        At KnowledgeShare, learning is more than just reading — it’s a journey.  

      </h2>

      <ul className="space-y-6 text-white ">
        <li className="flex items-start gap-4">
          <FiCheck className="text-[#00CED1] mt-1" size={44} />
          <div>
            <h3 className="font-semibold text-lg text-white ">Community-Powered Learning</h3>
            <p className="opacity-60">You’re part of a vibrant community that shares insights, answers questions, and supports growth every step of the way.</p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <FiCheck className="text-[#00CED1] mt-1" size={44} />
          <div>
            <h3 className="font-semibold text-lg text-white">Expert-Verified Content</h3>
            <p className="opacity-60">Our platform ensures that knowledge is accurate and reliable — verified by experts and trusted contributors.</p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <FiCheck className="text-[#00CED1] mt-1" size={44} />
          <div>
            <h3 className="font-semibold text-lg text-white">Grow & Track Progress</h3>
            <p className="opacity-60">We provide tools and features designed to help you learn, contribute, and track your knowledge journey effectively.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
