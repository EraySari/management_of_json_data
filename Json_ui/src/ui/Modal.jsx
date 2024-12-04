/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";

const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open }}>
      {children}
    </ModalContext.Provider>
  );
}

// eslint-disable-next-line no-unused-vars
function Open({ children, modalName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(modalName),
  });
}

function Window({ children, name }) {
  const { openName, open } = useContext(ModalContext);
  if (name !== openName) return;

  if (name === openName) {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-[1000] backdrop-filter backdrop-blur-sm">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 shadow-xl rounded-lg bg-nature1">
          {cloneElement(children, { onCloseModal: () => open("") })}
          {/* bu direkt childrenda ne varsa ona props olarak alabilecegin bir fonksiyon gönderiyor (deleteModalText)*/}
        </div>
      </div>
    );
  }
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
