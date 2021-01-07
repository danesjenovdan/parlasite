const express = require('express');
const { i18n: _i18n, asyncRender: ar } = require('../utils');
const { siteMap: sm } = require('../../config');

const router = express.Router();

/**
 * TOP NAVIGATION
 */

router.get('/', ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('landing', {
    activeMenu: 'landing',
    pageTitle: i18n('landing.title'),
    query: req.query.q,
  });
}));

// get /zakonodaja -> routes/zakonodaja.js

// get /seje -> routes/seje.js

router.get(`/${sm.landing.members}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('landing/poslanci', {
    activeMenu: 'mps',
    pageTitle: i18n('menu.mps'),
  });
}));

router.get(`/${sm.landing.parties}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('landing/poslanske-skupine', {
    activeMenu: 'pgs',
    pageTitle: i18n('menu.pgs'),
  });
}));

// get /orodja -> routes/orodja.js

/**
 * ABOUT PAGES
 */

router.get(`/${sm.landing.about}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('landing/o-projektu', {
    activeMenu: 'landing',
    pageTitle: i18n('footer.about'),
  });
}));

router.get(`/${sm.landing.media}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('landing/za-medije', {
    activeMenu: 'landing',
    pageTitle: i18n('footer.press'),
  });
}));

router.get(`/${sm.landing.legal}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('landing/pravno-obvestilo', {
    activeMenu: 'landing',
    pageTitle: i18n('legal.title'),
  });
}));

router.get(`/${sm.landing.thankYou}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('landing/hvala', {
    activeMenu: 'landing',
    pageTitle: i18n('titles.thank-you'),
  });
}));

router.get(`/${sm.landing.error}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('landing/ups', {
    activeMenu: 'landing',
    pageTitle: i18n('titles.ups'),
  });
}));

module.exports = router;
