import React from "react";

type PopupLoginProps = {
  message: string;
  onClose: () => void;
};

const PopupLogin: React.FC<PopupLoginProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-md space-y-6 max-w-sm text-center">
        <p className="text-gray-700 text-lg font-medium">{message}</p>
        <div className="space-y-4">
          <button
            onClick={() => (window.location.href = "/login")}
            className="w-full px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Join us now
          </button>
          <button
            onClick={onClose}
            className="w-full px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;
