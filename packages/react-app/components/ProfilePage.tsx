import React from "react";
import {
  AiOutlineEdit,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import {
  BsFillCreditCard2BackFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex items-center justify-center bg-blue-500 p-4 text-white text-2xl font-bold">
        Profile
      </header>

      {/* Profile Info */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>
        <div className="mt-4 flex justify-around">
          <div className="text-center">
            <h3 className="text-xl font-bold">360</h3>
            <p className="text-gray-600">Tasks</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">117</h3>
            <p className="text-gray-600">Completed</p>
          </div>
        </div>
      </div>

      {/* Balance Info */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <div className="flex items-center">
          <BsFillCreditCard2BackFill size={24} className="text-gray-600" />
          <div className="ml-4">
            <p className="text-gray-600">Your Balance</p>
            <div className="flex items-center mt-2">
              <h3 className="text-xl font-bold">$32</h3>
              <span className="mx-2">=</span>
              <h3 className="text-xl font-bold">NGN320,000</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <ul>
          <li className="flex items-center py-2 border-b border-gray-200">
            <AiOutlineEdit size={24} className="text-gray-600" />
            <span className="ml-4 text-gray-700">Edit Profile</span>
          </li>
          <li className="flex items-center py-2 border-b border-gray-200">
            <AiOutlineQuestionCircle size={24} className="text-gray-600" />
            <span className="ml-4 text-gray-700">FAQ</span>
          </li>
          <li className="flex items-center py-2 border-b border-gray-200">
            <BsFillInfoCircleFill size={24} className="text-gray-600" />
            <span className="ml-4 text-gray-700">Help Center</span>
          </li>
          <li className="flex items-center py-2">
            <AiOutlineLogout size={24} className="text-gray-600" />
            <span className="ml-4 text-gray-700">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
