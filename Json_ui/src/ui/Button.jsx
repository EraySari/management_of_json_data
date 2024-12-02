// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <button className="border rounded-md hover:shadow-lg hover:shadow-gray-600/40">
      {children}
    </button>
  );
}

export default Button;
