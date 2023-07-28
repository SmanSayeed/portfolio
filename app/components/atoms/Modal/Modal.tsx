import { ReactNode, useEffect, useState } from "react";

interface ModalProps {
  onClose: () => void;

  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent && !modalContent.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 backdrop-blur-md"></div>
          <div className="overflow-auto relative h-[80vh] w-[80vw] md:w-[50vw] p-8 bg-slate-700 border border-slate-400 rounded-lg z-10 modal-content">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-white"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Your modal content goes here */}
            <div>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
