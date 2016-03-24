'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDocumentTitle = setDocumentTitle;
exports.setDefaultTitle = setDefaultTitle;
// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

var defaultTitle = '';

function setDocumentTitle(title) {
  if (document) {
    if (title && typeof title === 'string') {
      title = title + ' | ' + defaultTitle;
    } else {
      title = '' + defaultTitle;
    }
    document.title = title;
  }
}

function setDefaultTitle(title) {
  defaultTitle = title;
}