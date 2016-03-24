'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bullet = function Bullet(props) {
  var children = props.children;
  var item = props.item;


  return _react2.default.createElement(
    'li',
    { className: 'bullet' },
    item,
    children
  );
}; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

Bullet.propTypes = {
  item: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]).isRequired
};

exports.default = Bullet;
module.exports = exports['default'];