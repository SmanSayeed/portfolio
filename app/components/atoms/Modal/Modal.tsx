import { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultWidth?: string;
  defaultHeight?: string;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  defaultWidth = "w-[90vw] md:w-[50vw]",
  defaultHeight = "h-[80vh] md:h-[70vh]",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Blurred background */}
      <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black backdrop-filter backdrop-blur-sm" />

      {/* Modal */}
      <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div
          className={`relative bg-slate-800 border-2 border-slate-600 rounded-lg shadow-lg p-4 ${defaultWidth} ${defaultHeight} md:h-[80vh] md:w-[90vw]`}
        >
          <button
            className="absolute top-3 right-3 text-[20px] text-gray-600 hover:text-gray-800"
            onClick={() => {
              onClose();
            }}
          >
            X
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
