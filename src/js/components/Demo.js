// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component, PropTypes } from 'react';
import jsxToString from 'jsx-to-string';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';

import CodeIcon from 'grommet/components/icons/base/Code';

//hjjs configuration
import hljs from 'highlight.js/lib/highlight';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import scss from 'highlight.js/lib/languages/scss';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('scss', scss);

function _highlightCode () {
  var nodes = document.querySelectorAll('pre code');
  for (var i = 0; i < nodes.length; i++) {
    hljs.highlightBlock(nodes[i]);
  }
}

export default class Demo extends Component {

  constructor () {
    super();

    this._toggleView = this._toggleView.bind(this);

    this.state = {
      showCode: false
    };
  }

  componentDidMount () {
    _highlightCode();
  }

  componentDidUpdate () {
    _highlightCode();
  }

  _toggleView () {
    this.setState({showCode: !this.state.showCode});
  }

  render () {

    const { anchor, code, explanation, source } = this.props;

    let demoNode = code;
    let codeLabel = 'Show';
    if (this.state.showCode) {
      codeLabel = 'Hide';
      demoNode = (
        <Box pad={{horizontal: 'medium', vertical: 'medium'}}>
          <pre><code>
            {jsxToString(source || code)}
          </code></pre>
        </Box>
      );
    }

    let justify = 'end';
    if (anchor) {
      justify = 'between';
    }
    return (
      <Box full='horizontal'>
        <Paragraph size='large'>
          {explanation}
        </Paragraph>

        <Box ref='container'>
          <Box direction='row' responsive={false} justify={justify} align='center'>
            {anchor}
            <Button label={`${codeLabel} Code`} plain={true}
              icon={<CodeIcon />} onClick={this._toggleView}
              a11yTitle={`${codeLabel} Code`} />
          </Box>

          {demoNode}
        </Box>
      </Box>
    );
  }
};

Demo.propTypes = {
  anchor: PropTypes.node,
  code: PropTypes.node.isRequired,
  explanation: PropTypes.string.isRequired,
  source: PropTypes.node
};
