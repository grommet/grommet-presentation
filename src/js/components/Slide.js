// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';

export default class Slide extends Component {
  render () {
    const { children, title } = this.props;
    let titleNode;
    if (title) {
      titleNode = (
        <Heading strong={true}>{title}</Heading>
      );
    }

    return (
      <Section {...this.props} pad='large'>
        <Box pad={{vertical: 'large'}}>
          {titleNode}
          {children}
        </Box>
      </Section>
    );
  }
};

Slide.defaultProps = {
  full: 'horizontal'
};

Slide.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};
