import React from "react";

const SourdoughBreadCard = () => {
  return (
    <div className="mx-auto">
      {/* First Card (Classic Sourdough) */}
      <div className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1uW17JKdtb29sFGfh-h0kwHaE8%26pid%3DApi&f=1&ipt=d5bb41cb07f47bfb6159c160aeaca7d855eb131647113ae7705dd46eaeb438a1&ipo=images" // Replace with your actual image URL
          alt="Classic Sourdough Bread"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800">Classic Sourdough</h3>
          <p className="text-sm text-gray-600 mt-2">
            A tangy, chewy, and crusty sourdough bread, perfect for sandwiches
            or just with butter.
          </p>
          <p className="text-lg font-semibold text-gray-900 mt-4">$5.99</p>
          <button className="mt-6 w-full bg-yellow-600 text-white p-3 rounded-md font-medium hover:bg-yellow-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Second Card (Minimalistic Style) */}
      <div className="max-w-xs rounded-lg shadow-md bg-white overflow-hidden border border-gray-300 mt-6">
        <img
          className="w-full h-40 object-cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1uW17JKdtb29sFGfh-h0kwHaE8%26pid%3DApi&f=1&ipt=d5bb41cb07f47bfb6159c160aeaca7d855eb131647113ae7705dd46eaeb438a1&ipo=images" // Replace with your actual image URL
          alt="Sourdough Bread"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Sourdough Bread
          </h3>
          <p className="text-sm text-gray-600 mt-2">
            Freshly baked with a crispy crust and soft, tangy interior.
          </p>
          <p className="text-xl font-semibold text-gray-900 my-4">$12.99</p>
          <button className="w-full bg-gray-900 text-white p-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SourdoughBreadCard;
