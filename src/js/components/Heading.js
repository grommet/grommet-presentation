import React from 'react';

import Heading from 'grommet/components/Heading';

const PresentationHeading = (props) => {
  const { children, huge } = props;

  let className;
  if (huge) {
    className = 'heading--huge';
  }

  return (
    <Heading {...props} className={className}>
      {children}
    </Heading>
  );
};

export default PresentationHeading;
