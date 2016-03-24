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
      <Section full={true} pad='large' justify={this.props.justify}>
        <Box align='start' {...this.props} pad={{vertical: 'large'}}>
          {titleNode}
          <Box full='horizontal'>
            {children}
          </Box>
        </Box>
      </Section>
    );
  }
};

Slide.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};
