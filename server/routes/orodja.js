const express = require('express');
const { i18n: _i18n, asyncRender: ar } = require('../utils');
const { siteMap: sm } = require('../../config');
const { i18n } = require('../server');

const router = express.Router();

router.get('/', ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('orodja', {
    activeMenu: 'tools',
    pageTitle: i18n('menu.tools'),
  });
}));

router.get(`/${sm.tools.notifications}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('orodja/obvestila', {
    activeMenu: 'tool',
    pageTitle: i18n('tools.notifications.title'),
    currentTool: 'obvestila',
    uid: req.query.uid || false,
    kid: req.query.kid || false,
    settings: req.query.settings || false,
  });
}));

router.get(`/${sm.tools.voteComparator}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('orodja/primerjalnik-glasovanj', {
    activeMenu: 'tool',
    pageTitle: i18n('tools.voteComparator.title'),
    currentTool: 'primerjalnik-glasovanj',
  });
}));

router.get(`/${sm.tools.discord}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('orodja/raziskovalec-neenotnosti', {
    activeMenu: 'tool',
    pageTitle: i18n('tools.discord.title'),
    currentTool: 'raziskovalec-neenotnosti',
  });
}));

router.get(`/${sm.tools.compass}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('orodja/parlamentarni-kompas', {
    activeMenu: 'tool',
    pageTitle: i18n('tools.compass.title'),
    currentTool: 'parlamentarni-kompas',
  });
}));

router.get(`/${sm.tools.wordGroups}`, ar((render, req) => {
  const i18n = _i18n(req.query.lang);

  render('orodja/skupine-besed', {
    activeMenu: 'tool',
    pageTitle: i18n('tools.wordGroups.title'),
    currentTool: 'skupine-besed',
  });
}));

module.exports = router;
