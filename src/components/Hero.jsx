import React from "react";
import Image from "../images/crumb.png";

const AinaSourdoughComponent = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-4xl mx-auto ">
      {/* Main Content */}
      <div className="">
        <div className="flex justify-between flex-col lg:flex-row items-center mb-6">
          <div className="w-full max-w-md bg-white rounded-lg">
            <h1 className="text-5xl font-text text-primary tracking-tight">
              ĀINA Sourdough Bakery
            </h1>

            <div className="grid gap-1 border-2">
              <p className="text-gray-600 text-lg font-semibold">PICKUP</p>
              <p className="text-gray-600 text-lg font-lights">
                123 Maui St, Haiku HI, 96708 US
              </p>
              <p className="text-gray-600 text-lg font-light">
                (808) 123-4567 | info@ainabakery.com
              </p>
            </div>

            <div className="flex flex-col align-center justify-between border-t border-gray-300 ">
              <p className="text-secondary flex items-center text-lg font-semibold py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                MAUI | HAIKU | HI
              </p>
              <button className="m-0  lg:text-xl font-semibold text-tertiary bg-white border-2 border-black px-2 lg:px-6 py-3 rounded-md hover:bg-primary-dark focus:ring-4 focus:ring-primary-light transition">
                Order Online
              </button>
            </div>
          </div>

          <img
            className="rounded-lg max-w-sm "
            src={Image} // Replace with actual image URL
            alt="ĀINA Sourdough Bread"
          />
        </div>

        {/* Address Section */}

        {/* Info Section */}
        <div className=" tracking-wider bg-primary text-white p-6 rounded-lg">
          <p className="mb-2 text-sm">
            IF YOU HAVE ISSUES WITH YOUR DELIVERY ORDER, PLEASE REACH OUT TO US
            USING EITHER OF THE CONTACTS LISTED BELOW:
          </p>
          <p className="text-sm mb-2">
            EMAIL: INFO@AINASOURDOUGH.COM PHONE: (808) 123-4567
          </p>
          <p className="text-sm mb-2">
            PLEASE NOTE: ALL DELIVERIES MADE THROUGH THIRD PARTY COUNTERPART,
            DOORDASH - DELIVERY ORDERS SHOULD BE READY FOR DRIVER PICK UP FROM
            ĀINA SOURDOUGH AT THE TIME YOU SELECTED. THE ACTUAL DELIVERY MAY
            TAKE BETWEEN 20 TO 40 MINUTES, DEPENDING ON TRANSIT TIME. PLEASE
            PLAN ACCORDINGLY IF YOU NEED YOUR ORDER BY A SPECIFIC TIME.
          </p>
          <p className="text-sm mt-4">
            *Allergens: (V) vegan - (WF) wheat-free - (DF) dairy-free - (N)
            contains nuts
          </p>
        </div>
      </div>
    </div>
  );
};

export default AinaSourdoughComponent;
