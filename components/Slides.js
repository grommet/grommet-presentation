'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _Box = require('grommet/components/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('grommet/components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _KeyboardAccelerators = require('grommet/utils/KeyboardAccelerators');

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

var _LinkNext = require('grommet/components/icons/base/LinkNext');

var _LinkNext2 = _interopRequireDefault(_LinkNext);

var _LinkPrevious = require('grommet/components/icons/base/LinkPrevious');

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

var _presentation = require('../utils/presentation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

var CLASS_ROOT = 'slides';

var CONTROL_CLASS_PREFIX = CLASS_ROOT + '__control ' + CLASS_ROOT + '__control';

var Slides = function (_Component) {
  _inherits(Slides, _Component);

  function Slides() {
    _classCallCheck(this, Slides);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Slides).call(this));

    _this._loadCurrentSlide = _this._loadCurrentSlide.bind(_this);
    _this._onPrevious = _this._onPrevious.bind(_this);
    _this._onNext = _this._onNext.bind(_this);

    _this.state = {
      activeIndex: 0
    };
    return _this;
  }

  _createClass(Slides, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._keys = { left: this._onPrevious, right: this._onNext };
      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keys);

      this._loadCurrentSlide();

      window.addEventListener('hashchange', this._loadCurrentSlide);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var children = this.props.children;

      children = _react2.default.Children.toArray(children);
      var currentSlide = children[this.state.activeIndex];
      (0, _presentation.setDocumentTitle)(currentSlide.props.title);
      if (currentSlide.props.id) {
        if (history.pushState) {
          history.pushState(null, null, '#' + currentSlide.props.id);
        } else {
          location.hash = '#' + currentSlide.props.id;
        }
      }
      document.activeElement.blur();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keys);
      window.removeEventListener('hashchange', this._loadCurrentSlide);
    }
  }, {
    key: '_loadCurrentSlide',
    value: function _loadCurrentSlide() {
      var _this2 = this;

      if (location.hash) {
        var children = _react2.default.Children.toArray(this.props.children);

        children.some(function (child, index) {
          if ('#' + child.props.id === location.hash) {
            _this2.setState({ activeIndex: index });
            return true;
          }

          return false;
        }, this);
      }
    }
  }, {
    key: '_onNext',
    value: function _onNext(event) {
      event.preventDefault();
      var children = this.props.children;

      children = _react2.default.Children.toArray(children);
      var nextIndex = this.state.activeIndex + 1;
      var activeIndex = nextIndex > children.length - 1 ? children.length - 1 : nextIndex;

      this.setState({ activeIndex: activeIndex });
    }
  }, {
    key: '_onPrevious',
    value: function _onPrevious() {
      var previousIndex = this.state.activeIndex - 1;
      var activeIndex = previousIndex < 0 ? 0 : previousIndex;

      this.setState({ activeIndex: activeIndex });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      children = _react2.default.Children.toArray(children);
      var childCount = children.length;
      var controls = [];
      if (this.state.activeIndex > 0) {
        controls.push(_react2.default.createElement(_Button2.default, { key: 'previous', plain: true, a11yTitle: 'Previous Slide',
          className: CONTROL_CLASS_PREFIX + '-left',
          onClick: this._onPrevious, icon: _react2.default.createElement(_LinkPrevious2.default, { size: 'large' }) }));
      }
      if (this.state.activeIndex < childCount - 1) {
        controls.push(_react2.default.createElement(_Button2.default, { key: 'next', plain: true, a11yTitle: 'Next Slide',
          className: CONTROL_CLASS_PREFIX + '-right',
          onClick: this._onNext, icon: _react2.default.createElement(_LinkNext2.default, { size: 'large' }) }));
      }

      return _react2.default.createElement(
        _Box2.default,
        { direction: 'row', className: CLASS_ROOT },
        _react2.default.createElement(
          _reactMotion.Motion,
          { key: this.state.activeIndex,
            defaultStyle: { x: 20 }, style: { x: (0, _reactMotion.spring)(0) } },
          function (_ref) {
            var x = _ref.x;
            return _react2.default.createElement(
              'div',
              { className: CLASS_ROOT + '__animationcontainer', style: {
                  WebkitTransform: 'translate3d(' + x + '%, 0, 0)',
                  transform: 'translate3d(' + x + '%, 0, 0)'
                } },
              children[_this3.state.activeIndex]
            );
          }
        ),
        controls
      );
    }
  }]);

  return Slides;
}(_react.Component);

exports.default = Slides;
;
module.exports = exports['default'];