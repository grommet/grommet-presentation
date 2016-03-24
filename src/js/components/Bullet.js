// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { PropTypes } from 'react';

const Bullet = (props) => {
  const { children, item } = props;

  return (
    <li className='bullet'>{item}
      {children}
    </li>
  );
};

Bullet.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired
};

export default Bullet;
