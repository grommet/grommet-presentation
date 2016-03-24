'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jsxToString = require('jsx-to-string');

var _jsxToString2 = _interopRequireDefault(_jsxToString);

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Paragraph = require('grommet/components/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Code = require('grommet/components/icons/base/Code');

var _Code2 = _interopRequireDefault(_Code);

var _highlight = require('highlight.js/lib/highlight');

var _highlight2 = _interopRequireDefault(_highlight);

var _bash = require('highlight.js/lib/languages/bash');

var _bash2 = _interopRequireDefault(_bash);

var _xml = require('highlight.js/lib/languages/xml');

var _xml2 = _interopRequireDefault(_xml);

var _javascript = require('highlight.js/lib/languages/javascript');

var _javascript2 = _interopRequireDefault(_javascript);

var _scss = require('highlight.js/lib/languages/scss');

var _scss2 = _interopRequireDefault(_scss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

//hjjs configuration


_highlight2.default.registerLanguage('bash', _bash2.default);
_highlight2.default.registerLanguage('xml', _xml2.default);
_highlight2.default.registerLanguage('javascript', _javascript2.default);
_highlight2.default.registerLanguage('scss', _scss2.default);

function _highlightCode() {
  var nodes = document.querySelectorAll('pre code');
  for (var i = 0; i < nodes.length; i++) {
    _highlight2.default.highlightBlock(nodes[i]);
  }
}

var Demo = function (_Component) {
  _inherits(Demo, _Component);

  function Demo() {
    _classCallCheck(this, Demo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this));

    _this._toggleView = _this._toggleView.bind(_this);

    _this.state = {
      showCode: false
    };
    return _this;
  }

  _createClass(Demo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _highlightCode();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _highlightCode();
    }
  }, {
    key: '_toggleView',
    value: function _toggleView() {
      this.setState({ showCode: !this.state.showCode });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var anchor = _props.anchor;
      var code = _props.code;
      var explanation = _props.explanation;
      var source = _props.source;


      var demoNode = code;
      var codeLabel = 'Show';
      if (this.state.showCode) {
        codeLabel = 'Hide';
        demoNode = _react2.default.createElement(
          _Box2.default,
          { pad: { horizontal: 'medium', vertical: 'medium' } },
          _react2.default.createElement(
            'pre',
            null,
            _react2.default.createElement(
              'code',
              null,
              (0, _jsxToString2.default)(source || code)
            )
          )
        );
      }

      var justify = 'end';
      if (anchor) {
        justify = 'between';
      }
      return _react2.default.createElement(
        _Box2.default,
        { full: 'horizontal' },
        _react2.default.createElement(
          _Paragraph2.default,
          { size: 'large' },
          explanation
        ),
        _react2.default.createElement(
          _Box2.default,
          { ref: 'container' },
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row', responsive: false, justify: justify, align: 'center' },
            anchor,
            _react2.default.createElement(_Button2.default, { label: codeLabel + ' Code', plain: true,
              icon: _react2.default.createElement(_Code2.default, null), onClick: this._toggleView,
              a11yTitle: codeLabel + ' Code' })
          ),
          demoNode
        )
      );
    }
  }]);

  return Demo;
}(_react.Component);

exports.default = Demo;
;

Demo.propTypes = {
  anchor: _react.PropTypes.node,
  code: _react.PropTypes.node.isRequired,
  explanation: _react.PropTypes.string.isRequired,
  source: _react.PropTypes.node
};
module.exports = exports['default'];