// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component, PropTypes } from 'react';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Responsive from 'grommet/utils/Responsive';

export default class Slide extends Component {
  constructor () {
    super();

    this._onResponsive = this._onResponsive.bind(this);

    this.state = {
      horizontalPad: 'large'
    };
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount () {
    this._responsive.stop();
  }

  _onResponsive (small) {
    if (small) {
      this.setState({horizontalPad: undefined});
    }
  }

  render () {
    const { children, title } = this.props;
    const { horizontalPad } = this.state;
    let titleNode;
    if (title) {
      titleNode = (
        <Heading strong={true}>{title}</Heading>
      );
    }

    return (
      <Section {...this.props} pad='large'>
        <Box pad={{vertical: 'large', horizontal: horizontalPad}}>
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
