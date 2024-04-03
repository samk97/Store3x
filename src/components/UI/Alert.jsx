import React, { useEffect } from "react";

const Alert = ({ setShowAlert, messageType, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setShowAlert]);

  let messageColor;

  switch (messageType) {
    case "success":
      messageColor = "bg-green-700";

      break;
    case "fail":
      messageColor = "bg-red-700";

      break;
    case "error":
      messageColor = "bg-yellow-700";

      break;
    default:
      messageColor = "bg-gray-700";
  }

  return (
    <div
      className={`flex fixed bottom-0 right-1 p-4 mb-4 text-sm text-white border rounded-lg shadow-md z-50 ${messageColor}`}
      role="alert"
    >
      <svg
        className="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>{message}</div>
    </div>
  );
};

export default Alert;
