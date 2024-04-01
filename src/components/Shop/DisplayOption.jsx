import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faList } from "@fortawesome/free-solid-svg-icons";

const DisplayOptions = () => {
  return (
    <div className="flex gap-2 ml-auto">
      <div className="border border-red-700 w-10 h-9 flex items-center justify-center text-white bg-red-700 rounded cursor-pointer">
        <FontAwesomeIcon icon={faGripVertical} />
      </div>
      <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
        <FontAwesomeIcon icon={faList} />
      </div>
    </div>
  );
};

export default DisplayOptions;
