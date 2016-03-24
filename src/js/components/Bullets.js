// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const CLASS_ROOT = 'bullets';

const Bullets = (props) => {
  const { children, small } = props;

  const classes = classnames(
    CLASS_ROOT,
    {
      [`${CLASS_ROOT}--small`]: small
    }
  );
  return (
    <ul className={classes}>
      {children}
    </ul>
  );
};

Bullets.propTypes = {
  small: PropTypes.bool
};

export default Bullets;
