'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Label = require('grommet/components/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Heading = require('./Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

var CLASS_ROOT = 'quote';

var Quote = function Quote(props) {
  var author = props.author;
  var children = props.children;
  var detail = props.detail;


  var detailNode = void 0;
  if (detail) {
    detailNode = _react2.default.createElement(
      _Label2.default,
      null,
      '(',
      detail,
      ')'
    );
  }

  return _react2.default.createElement(
    _Box2.default,
    { className: CLASS_ROOT, pad: { vertical: 'small' } },
    _react2.default.createElement(
      _Heading2.default,
      { justify: 'end' },
      '"' + children + '"'
    ),
    _react2.default.createElement(
      _Box2.default,
      { direction: 'row', justify: 'end', pad: { vertical: 'small' } },
      _react2.default.createElement(
        _Label2.default,
        { uppercase: true, className: CLASS_ROOT + '__author' },
        author
      ),
      detailNode
    )
  );
};

Quote.defaultProps = {
  author: 'Unknown'
};

Quote.propTypes = {
  author: _react.PropTypes.string,
  children: _react.PropTypes.string.isRequired,
  detail: _react.PropTypes.string
};

exports.default = Quote;
module.exports = exports['default'];