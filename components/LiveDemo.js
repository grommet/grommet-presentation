'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tile = require('grommet/components/Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _Tiles = require('grommet/components/Tiles');

var _Tiles2 = _interopRequireDefault(_Tiles);

var _Spinning = require('grommet/components/icons/Spinning');

var _Spinning2 = _interopRequireDefault(_Spinning);

var _KeyboardAccelerators = require('grommet/utils/KeyboardAccelerators');

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

var LiveDemo = function (_Component) {
  _inherits(LiveDemo, _Component);

  function LiveDemo(props) {
    _classCallCheck(this, LiveDemo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LiveDemo).call(this, props));

    _this._updateCode = _this._updateCode.bind(_this);
    _this._stopPropagation = _this._stopPropagation.bind(_this);

    _this.state = {
      code: props.code
    };
    return _this;
  }

  _createClass(LiveDemo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._keys = { left: this._stopPropagation, right: this._stopPropagation };
      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keys);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keys);
    }
  }, {
    key: '_updateCode',
    value: function _updateCode(event) {
      this.setState({ code: event.target.value });
    }
  }, {
    key: '_stopPropagation',
    value: function _stopPropagation() {
      return document.activeElement === this.refs.codeTextarea;
    }
  }, {
    key: 'render',
    value: function render() {
      var code = this.state.code;


      var codeNode = _react2.default.createElement(_Spinning2.default, null);

      if (code && code !== '') {
        codeNode = _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: code } });
      }

      return _react2.default.createElement(
        _Tiles2.default,
        { fill: true, flush: false },
        _react2.default.createElement(
          _Tile2.default,
          { pad: 'small' },
          _react2.default.createElement('textarea', { ref: 'codeTextarea', onChange: this._updateCode,
            className: 'code-editor', rows: '10', value: code })
        ),
        _react2.default.createElement(
          _Tile2.default,
          { pad: 'small', justify: 'center', align: 'center' },
          codeNode
        )
      );
    }
  }]);

  return LiveDemo;
}(_react.Component);

exports.default = LiveDemo;
;
module.exports = exports['default'];