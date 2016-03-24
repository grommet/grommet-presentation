// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development Company, L.P.

let defaultTitle = '';

export function setDocumentTitle (title) {
  if (document) {
    if (title && typeof title === 'string') {
      title = `${title} | ${defaultTitle}`;
    } else {
      title = `${defaultTitle}`;
    }
    document.title = title;
  }
}

export function setDefaultTitle (title) {
  defaultTitle = title;
}
