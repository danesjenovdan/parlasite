const express = require('express');
const data = require('../data');
const { i18n: _i18n, asyncRender: ar } = require('../utils');
const { i18n } = require('../server');

const router = express.Router();

router.get('/', ar((render) => {
  render('zakonodaja', {
    activeMenu: 'legislation',
    pageTitle: i18n('menu.legislation'),
  });
}));

router.get('/*', ar((render, req, res, next) => {
  const i18n = _i18n(req.query.lang);

  const epa = req.params[0];
  const lawData = data.laws.find(law => law.epa === epa);
  if (lawData) {
    render('zakonodaja/zakon', {
      activeMenu: 'legislation_act',
      pageTitle: i18n('titles.legislation'),
      lawData,
    });
  } else {
    next();
  }
}));

module.exports = router;
