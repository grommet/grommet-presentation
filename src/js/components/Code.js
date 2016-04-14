// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

import React, { Component } from 'react';

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

export default class Code extends Component {

  componentDidMount () {
    _highlightCode();
  }

  componentDidUpdate () {
    _highlightCode();
  }

  render () {
    return (
      <pre><code>
        {this.props.children}
      </code></pre>
    );
  }
};
