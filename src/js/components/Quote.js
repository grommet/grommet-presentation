// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Heading from './Heading';

const CLASS_ROOT = 'quote';

const Quote = (props) => {
  const { author, children, detail } = props;

  let detailNode;
  if (detail) {
    detailNode = (
      <Label>
        ({detail})
      </Label>
    );
  }

  return (
    <Box className={CLASS_ROOT} pad={{vertical: 'small'}}>
      <Heading label={content} justify='end'>
        {`"${children}"`}
      </Heading>
      <Box direction='row' justify='end' pad={{vertical: 'small'}}>
        <Label uppercase={true} className={`${CLASS_ROOT}__author`}>
          {author}
        </Label>
        {detailNode}
      </Box>
    </Box>
  );
};

Quote.defaultProps = {
  author: 'Unknown'
};

Quote.propTypes = {
  author: PropTypes.string,
  children: PropTypes.string.isRequired,
  detail: PropTypes.string
};

export default Quote;
