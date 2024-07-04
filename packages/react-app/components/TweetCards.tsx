import Image from "next/image";
import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

const TweetCard = ({ profileImage, name, message }) => {
  return (
    <div className="flex items-start space-x-4 p-4 border-b border-gray-200">
      {/* Profile Image */}
      <Image
        src={profileImage}
        alt="Profile"
        className="w-12 h-12 rounded-full"
        width={200}
        height={200}
      />

      {/* Tweet Content */}
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <h4 className="font-bold">{name}</h4>
        </div>
        <p className="text-gray-700 mt-2">{message}</p>

        {/* Actions */}
        <div className="flex items-center space-x-4 mt-2 text-gray-500">
          <button className="flex items-center space-x-1">
            <AiOutlineHeart size={20} />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-1">
            <AiOutlineShareAlt size={20} />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
