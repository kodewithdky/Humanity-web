import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
        <div className="p-9">
          <img src={image} alt="certificates" />
          <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
            Realtime Collaboration
          </h3>
          <p className="mt-6 text-base text-gray-600">
            Collaborate in realtime with other editors in a project. See what
            othe editors are doing and edit even a simple text together
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
