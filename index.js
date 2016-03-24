'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Bullet = require('./components/Bullet');

Object.keys(_Bullet).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Bullet[key];
    }
  });
});

var _Bullets = require('./components/Bullets');

Object.keys(_Bullets).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Bullets[key];
    }
  });
});

var _Demo = require('./components/Demo');

Object.keys(_Demo).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Demo[key];
    }
  });
});

var _Heading = require('./components/Heading');

Object.keys(_Heading).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Heading[key];
    }
  });
});

var _Presenter = require('./components/Presenter');

Object.keys(_Presenter).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Presenter[key];
    }
  });
});

var _Slide = require('./components/Slide');

Object.keys(_Slide).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Slide[key];
    }
  });
});

var _Slides = require('./components/Slides');

Object.keys(_Slides).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Slides[key];
    }
  });
});

var _presentation = require('./utils/presentation');

Object.keys(_presentation).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _presentation[key];
    }
  });
});