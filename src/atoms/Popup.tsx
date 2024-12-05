import React from "react";

type PopupProps = {
  message: string;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 ">
      <div className="bg-white p-6 rounded-md shadow-lg border-neutral-800 border-4 max-w-sm w-full">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl font-semibold text-red-600">Warning</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close Popup"
          >
            &times;
          </button>
        </div>
        <p className="mt-2 text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default Popup;
