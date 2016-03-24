'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Anchor = require('grommet/components/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Heading = require('grommet/components/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _SocialTwitter = require('grommet/components/icons/base/SocialTwitter');

var _SocialTwitter2 = _interopRequireDefault(_SocialTwitter);

var _SocialGithub = require('grommet/components/icons/base/SocialGithub');

var _SocialGithub2 = _interopRequireDefault(_SocialGithub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

var Presenter = function Presenter(props) {
  var avatar = props.avatar;
  var detail = props.detail;
  var name = props.name;
  var twitterTag = props.twitterTag;
  var githubTag = props.githubTag;


  return _react2.default.createElement(
    _Box2.default,
    { align: 'center', pad: 'medium' },
    _react2.default.createElement(
      _Box2.default,
      { pad: 'small' },
      _react2.default.createElement('img', { className: 'gravatar', src: avatar, alt: name + ' Avatar' })
    ),
    _react2.default.createElement(
      _Heading2.default,
      { tag: 'h2' },
      name
    ),
    _react2.default.createElement(
      _Heading2.default,
      { tag: 'h3', align: 'center' },
      detail
    ),
    _react2.default.createElement(
      _Box2.default,
      { direction: 'row', responsive: false },
      _react2.default.createElement(_Anchor2.default, { href: 'https://twitter.com/' + twitterTag, target: '_blank',
        icon: _react2.default.createElement(_SocialTwitter2.default, { a11yTitle: name + ' Twitter',
          a11yTitleId: name + '-twitter' }) }),
      _react2.default.createElement(_Anchor2.default, { href: 'https://github.com/' + githubTag, target: '_blank',
        icon: _react2.default.createElement(_SocialGithub2.default, { a11yTitle: name + ' Github',
          a11yTitleId: name + '-github' }) })
    )
  );
};

exports.default = Presenter;
module.exports = exports['default'];