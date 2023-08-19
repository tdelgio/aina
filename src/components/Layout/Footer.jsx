import React from "react";

const Footer = () => {
  return (
    <div className="fixed text-sm text-gray-900 bottom-0 text-center w-full shadow-lg bg-gray-100 py-2 border-t font-light">
      <span className="font-bold"> © {new Date().getFullYear()} [ Āina ]</span>{" "}
      - All rights reserved.
    </div>
  );
};

export default Footer;
