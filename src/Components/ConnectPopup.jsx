import React from "react";

export default function ConnectPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] sm:w-[500px] text-center">
        <h2 className="text-2xl font-bold mb-6">Connect</h2>
        <div className="flex flex-col gap-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Call
          </button>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            WhatsApp
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
            Mail
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
