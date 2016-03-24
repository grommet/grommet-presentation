'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

var CLASS_ROOT = 'bullets';

var Bullets = function Bullets(props) {
  var children = props.children;
  var small = props.small;


  var classes = (0, _classnames3.default)(CLASS_ROOT, _defineProperty({}, CLASS_ROOT + '--small', small));
  return _react2.default.createElement(
    'ul',
    { className: classes },
    children
  );
};

Bullets.propTypes = {
  small: _react.PropTypes.bool
};

exports.default = Bullets;
module.exports = exports['default'];