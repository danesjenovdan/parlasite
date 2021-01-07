const express = require('express');
const { i18n: _i18n, asyncRender: ar } = require('../utils');
const { siteMap: sm } = require('../../config');
const { i18n } = require('../server');

const router = express.Router();

router.get('/', ar((render) => {
  render('seje', {
    activeMenu: 'sessions',
    pageTitle: i18n('titles.session-list'),
  });
}));

router.get(`/${sm.sessions.search.base}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  const mps = req.query.mps ? req.query.mps.split(',').map(Number).filter(Boolean) : undefined;
  const pgs = req.query.pgs ? req.query.pgs.split(',').map(Number).filter(Boolean) : undefined;
  render('seje/isci', {
    activeMenu: 'sessions_search',
    pageTitle: i18n('titles.sessions-search'),
    query: req.query.q,
    mps,
    pgs,
  });
}));

module.exports = router;
