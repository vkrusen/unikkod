import React, { useEffect, useState } from 'react';

const Icon = ({ path, color }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    fetch(path)
      .then(response => response.text())
      .then(svg => {
        setIcon(svg.replace(/fill="[^"]+"/g));
      });
  }, [path]);

  return (
    <>
      {icon ? (
        <div
          className="icon"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      ) : null}
    </>
  );
};

export default Icon;
