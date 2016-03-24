'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PresentationHeading = function PresentationHeading(props) {
  var children = props.children;
  var huge = props.huge;


  var className = void 0;
  if (huge) {
    className = 'heading--huge';
  }

  return _react2.default.createElement(
    _Heading2.default,
    _extends({}, props, { className: className }),
    children
  );
};

exports.default = PresentationHeading;
module.exports = exports['default'];