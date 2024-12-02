/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ children, column }) {
  return (
    <TableContext.Provider value={{ column }}>
      <div
        className="border border-gray-300 overflow-hidden rounded-lg bg-nature "
        role="table"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const col = useContext(TableContext);

  return (
    <div
      style={{ gridTemplateColumns: col.column }} //tailwindde olmadigi icin inline sekilde verdim
      className={`tableColumn border-b bg-nature1 p-4 uppercase font-semibold text-sm text-gray-600 `}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const col = useContext(TableContext);
  return (
    <div
      style={{ gridTemplateColumns: col.column }}
      className="tableColumn border-b py-4 px-4"
    >
      {children}
    </div>
  );
}

function Body({ children }) {
  return <div>{children}</div>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
