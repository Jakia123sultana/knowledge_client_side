import React from "react";
import knowledge1 from "../../assets/khowledge1.jpeg";
import knowledge2 from "../../assets/knowledge2.jpeg";
import knowledge3 from "../../assets/knowledge3.jpeg";
const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
<h1 className="text-xl fond-bold text-blue-900 text-center mb-4">Sharing your Knowledge</h1>
      <div className="space-y-5">
        <img src={knowledge1} alt="" />
        <img src={knowledge2} alt="" />
        <img src={knowledge3} alt="" />
      </div>
    </div>
  );
};

export default QZone;