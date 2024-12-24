/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import useOutsideClick from "../features/hooks/useOutsideClick";

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = setOpenName;
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, modalName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(modalName),
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);
  //React, DOM elemanını oluşturduktan ve ekrana koyduktan sonra,
  //ref nesnenizin current özelliğini o DOM elemanına tanımlar.
  //Eleman ekrandan kaldırıldığında, React current özelliğini null olarak geri tanımlar

  if (name !== openName) return;

  if (name === openName) {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-[1000] backdrop-filter backdrop-blur-sm">
        <div
          ref={ref} // bu modal acilinca ref.current bu modal olacak kapaninca null
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 shadow-xl rounded-lg bg-nature1"
        >
          <button
            className="absolute top-3 right-4 p-1 border-none hover:bg-buttonHover transition-all"
            onClick={close}
          >
            <HiMiniXMark size={24} />
          </button>
          {cloneElement(children, { onCloseModal: close })}
          {/* bu direkt childrenda ne varsa ona props olarak alabilecegin bir fonksiyon gönderiyor (deleteModalText)*/}
        </div>
      </div>
    );
  }
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
