import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div className={className} style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
      {children}
    </div>
  );
}

export default Container;