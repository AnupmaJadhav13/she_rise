import React from "react";

export default function BusinessDetailsPopup({ isOpen, onClose, business }) {
  if (!isOpen || !business) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50 overflow-auto p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-6">{business.name}</h2>
        <p className="text-lg text-gray-600 mb-6">{business.description}</p>

        {business.products?.length > 0 && (
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-xl">Products / Services:</h3>
            <div className="flex gap-4 flex-wrap">
              {business.products.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="product"
                  className="w-40 h-40 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        )}

        {business.website && (
          <p className="mb-3 text-lg">
            <strong>Website:</strong>{" "}
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {business.website}
            </a>
          </p>
        )}

        {business.owner && (
          <p className="mb-3 text-lg">
            <strong>Owner:</strong> {business.owner}
          </p>
        )}

        {business.location && (
          <p className="mb-3 text-lg">
            <strong>Location:</strong> {business.location}
          </p>
        )}

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
