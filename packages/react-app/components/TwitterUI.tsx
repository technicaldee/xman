import React, { useState } from "react";
import { AiOutlineHome, AiOutlinePlus, AiOutlineProfile } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import TweetCard from "./TweetCards";

const TwitterUI = () => {
  const [activeTab, setActiveTab] = useState("Discover");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-center bg-blue-500 p-4 text-white text-2xl font-bold">
        X-Man
      </header>

      {/* Tab bar */}
      <nav className="flex justify-center space-x-4 bg-gray-200 p-2">
        <button
          className={`px-4 py-2 ${
            activeTab === "Discover"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Discover")}
        >
          Discover
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "Following"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Following")}
        >
          Following
        </button>
      </nav>

      {/* Content */}
      <main className="flex-1 p-4">
        {activeTab === "Discover" ? (
          <TweetCard
            message="Hey therre"
            name="Celo Devs"
            profileImage="https://picsum.photos/200"
          />
        ) : (
          <TweetCard
            message="Hey therre"
            name="Celo Devs"
            profileImage="https://picsum.photos/200"
          />
        )}

        {/* Tweet component */}
        <div className="mt-4 p-4 border rounded-lg shadow">
          <textarea
            className="w-full p-2 border rounded-lg"
            placeholder="What's happening?"
          />
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
            Tweet
          </button>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-16 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg">
        <AiOutlinePlus size={24} />
      </button>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t">
        <div className="flex justify-around">
          <button className="flex flex-col items-center p-2">
            <AiOutlineHome size={24} />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <BsFillCreditCard2BackFill size={24} />
            <span className="text-xs">Transactions</span>
          </button>
          <button className="flex flex-col items-center p-2">
            <AiOutlineProfile size={24} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TwitterUI;
