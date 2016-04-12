// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import KeyboardAccelerators from 'grommet/utils/KeyboardAccelerators';
import NextIcon from 'grommet/components/icons/base/LinkNext';
import PreviousIcon from 'grommet/components/icons/base/LinkPrevious';

import Responsive from 'grommet/utils/Responsive';

import { setDocumentTitle } from '../utils/presentation';

const CLASS_ROOT = 'slides';

const CONTROL_CLASS_PREFIX = `${CLASS_ROOT}__control ${CLASS_ROOT}__control`;

export default class Slides extends Component {
  constructor () {
    super();

    this._loadCurrentSlide = this._loadCurrentSlide.bind(this);
    this._onPrevious = this._onPrevious.bind(this);
    this._onNext = this._onNext.bind(this);
    this._onResponsive = this._onResponsive.bind(this);

    this.state = {
      activeIndex: 0,
      bottomControl: false
    };
  }

  componentDidMount () {
    this._keys = {left: this._onPrevious, right: this._onNext};
    KeyboardAccelerators.startListeningToKeyboard(this, this._keys);

    this._loadCurrentSlide();

    window.addEventListener('hashchange', this._loadCurrentSlide);

    this._responsive = Responsive.start(this._onResponsive);
  }

  componentDidUpdate () {
    let { children } = this.props;
    children = React.Children.toArray(children);
    const currentSlide = children[this.state.activeIndex];
    setDocumentTitle(currentSlide.props.title);
    if (currentSlide.props.id) {
      if (history.pushState) {
        history.pushState(null, null, `#${currentSlide.props.id}`);
      } else {
        location.hash = `#${currentSlide.props.id}`;
      }
    }
    document.activeElement.blur();
  }

  componentWillUnmount () {
    KeyboardAccelerators.stopListeningToKeyboard(this, this._keys);
    window.removeEventListener('hashchange', this._loadCurrentSlide);

    this._responsive.stop();
  }

  _onResponsive (small) {
    this.setState({bottomControl: small});
  }
  _loadCurrentSlide () {
    if (location.hash) {
      const children = React.Children.toArray(this.props.children);

      children.some((child, index) => {
        if (`#${child.props.id}` === location.hash) {
          this.setState({activeIndex: index});
          return true;
        }

        return false;
      }, this);
    }
  }

  _onNext (event) {
    event.preventDefault();
    let { children } = this.props;
    children = React.Children.toArray(children);
    const nextIndex = this.state.activeIndex + 1;
    const activeIndex = (nextIndex > children.length - 1) ?
        children.length - 1 : nextIndex;

    this.setState({activeIndex});
  }

  _onPrevious () {
    const previousIndex = this.state.activeIndex - 1;
    const activeIndex = (previousIndex < 0) ? 0 : previousIndex;

    this.setState({activeIndex});
  }

  render () {
    let { children } = this.props;
    let { bottomControl, activeIndex } = this.state;
    children = React.Children.toArray(children);
    const childCount = children.length;
    let previousButton;
    let nextButton;
    if (activeIndex > 0) {
      const previousClassName = (
        bottomControl ? undefined : `${CONTROL_CLASS_PREFIX}-left`
      );
      previousButton = (
        <Button key="previous" plain={true} a11yTitle='Previous Slide'
          className={previousClassName}
          onClick={this._onPrevious} icon={<PreviousIcon size="large" />} />
      );
    }
    if (activeIndex < (childCount - 1)) {
      const nextClassName = (
        bottomControl ? undefined : `${CONTROL_CLASS_PREFIX}-right`
      );

      nextButton = (
        <Button key="next" plain={true} a11yTitle='Next Slide'
          className={nextClassName}
          onClick={this._onNext} icon={<NextIcon size="large" />} />
      );
    }

    let controlsNode = [previousButton, nextButton];
    if (bottomControl) {
      controlsNode = (
        <Footer direction='row' align='center' justify='between'>
          {previousButton || <span style={{width: '72px'}} />}
          <span>{activeIndex + 1} of {children.length}</span>
          {nextButton || <span style={{width: '72px'}} />}
        </Footer>
      );
    }
    return (
      <Box direction='row' className={CLASS_ROOT}>
        <Motion key={activeIndex}
          defaultStyle={{x: 30}} style={{x: spring(0)}}>
          {({x}) =>
            <div className='flex' style={{
              WebkitTransform: `translateX(${x}%)`,
              transform: `translateX(${x}%)`
            }}>
              {children[activeIndex]}
            </div>
          }
        </Motion>
        {controlsNode}
      </Box>
    );
  }
};
