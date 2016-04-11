// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import KeyboardAccelerators from 'grommet/utils/KeyboardAccelerators';
import NextIcon from 'grommet/components/icons/base/LinkNext';
import PreviousIcon from 'grommet/components/icons/base/LinkPrevious';

import { setDocumentTitle } from '../utils/presentation';

const CLASS_ROOT = 'slides';

const CONTROL_CLASS_PREFIX = `${CLASS_ROOT}__control ${CLASS_ROOT}__control`;

export default class Slides extends Component {
  constructor () {
    super();

    this._loadCurrentSlide = this._loadCurrentSlide.bind(this);
    this._onPrevious = this._onPrevious.bind(this);
    this._onNext = this._onNext.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount () {
    this._keys = {left: this._onPrevious, right: this._onNext};
    KeyboardAccelerators.startListeningToKeyboard(this, this._keys);

    this._loadCurrentSlide();

    window.addEventListener('hashchange', this._loadCurrentSlide);
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
    children = React.Children.toArray(children);
    const childCount = children.length;
    let controls = [];
    if (this.state.activeIndex > 0) {
      controls.push(
        <Button key="previous" plain={true} a11yTitle='Previous Slide'
          className={`${CONTROL_CLASS_PREFIX}-left`}
          onClick={this._onPrevious} icon={<PreviousIcon size="large" />} />
      );
    }
    if (this.state.activeIndex < (childCount - 1)) {
      controls.push(
        <Button key="next" plain={true} a11yTitle='Next Slide'
          className={`${CONTROL_CLASS_PREFIX}-right`}
          onClick={this._onNext} icon={<NextIcon size="large" />} />
      );
    }

    return (
      <Box direction='row' className={CLASS_ROOT}>
        <Motion key={this.state.activeIndex}
          defaultStyle={{x: 20}} style={{x: spring(0)}}>
          {({x}) =>
            <div className={`${CLASS_ROOT}__animationcontainer`} style={{
              WebkitTransform: `translate3d(${x}%, 0, 0)`,
              transform: `translate3d(${x}%, 0, 0)`
            }}>
              {children[this.state.activeIndex]}
            </div>
          }
        </Motion>
        {controls}
      </Box>
    );
  }
};
