import { useEffect, useRef } from "react";

// eslint-disable-next-line no-unused-vars
function useOutsideClick(closeModal) {
  const ref = useRef(null);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) closeModal();
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [closeModal]
  );

  return ref;
}

export default useOutsideClick;
