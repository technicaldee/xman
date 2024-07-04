// components/TaskScreen.js
import React, { useState } from "react";

const TaskScreen = () => {
  const [taskName, setTaskName] = useState("");
  const [instructions, setInstructions] = useState("");
  const [amount, setAmount] = useState("");
  const [maxPeople, setMaxPeople] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      taskName,
      instructions,
      amount,
      maxPeople,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="flex items-center justify-center bg-blue-500 p-4 text-white text-2xl font-bold">
        Create Task
      </header>

      {/* Task Form */}
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="taskName"
            >
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="instructions"
            >
              Instructions
            </label>
            <textarea
              id="instructions"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Amount to be Spent
            </label>
            <input
              type="number"
              id="amount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="maxPeople"
            >
              Maximum Amount of People to Carry Out the Task
            </label>
            <input
              type="number"
              id="maxPeople"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={maxPeople}
              onChange={(e) => setMaxPeople(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-red-500">Amount to charge: $500</div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskScreen;
