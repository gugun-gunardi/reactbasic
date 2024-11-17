import React from 'react';

const Table = ({ children }) => {
  return (
    <table cellPadding='10' cellSpacing='0'>
      {children}
    </table>
  );
};

export default Table;
