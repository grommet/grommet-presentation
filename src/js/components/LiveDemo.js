// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component } from 'react';

import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Spinning from 'grommet/components/icons/Spinning';
import KeyboardAccelerators from 'grommet/utils/KeyboardAccelerators';

export default class LiveDemo extends Component {

  constructor (props) {
    super(props);

    this._updateCode = this._updateCode.bind(this);
    this._stopPropagation = this._stopPropagation.bind(this);

    this.state = {
      code: props.code
    };
  }

  componentDidMount () {
    this._keys = {left: this._stopPropagation, right: this._stopPropagation};
    KeyboardAccelerators.startListeningToKeyboard(this, this._keys);
  }

  componentWillUnmount () {
    KeyboardAccelerators.stopListeningToKeyboard(this, this._keys);
  }

  _updateCode (event) {
    this.setState({code: event.target.value});
  }

  _stopPropagation () {
    return document.activeElement === this.refs.codeTextarea;
  }

  render () {
    const {code} = this.state;

    let codeNode = (
      <Spinning />
    );

    if (code && code !== '') {
      codeNode = (
        <div dangerouslySetInnerHTML={{__html: code}} />
      );
    }

    return (
      <Tiles fill={true}>
        <Tile pad='small'>
          <textarea ref='codeTextarea' onChange={this._updateCode}
            className='code-editor' rows='10' value={code} />
        </Tile>
        <Tile pad='small' justify='center' align='center'>
          {codeNode}
        </Tile>
      </Tiles>
    );
  }
};
