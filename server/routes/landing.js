const express = require('express');

const router = express.Router();

/**
 * TOP NAVIGATION
 */

router.get('/', (req, res) => {
  res.render('landing', {
    activeMenu: 'landing',
    pageTitle: 'Parlameter',
    query: req.query.q,
  });
});

// get /zakonodaja -> routes/zakonodaja.js

// get /seje -> routes/seje.js

router.get('/poslanci', (req, res) => {
  res.render('landing/poslanci', {
    activeMenu: 'poslanci',
    pageTitle: 'Seznam poslancev',
  });
});

router.get('/poslanske-skupine', (req, res) => {
  res.render('landing/poslanske-skupine', {
    activeMenu: 'poslanske-skupine',
    pageTitle: 'Seznam poslanskih skupin',
  });
});

// get /orodja -> routes/orodja.js

/**
 * ABOUT PAGES
 */

router.get('/o-projektu', (req, res) => {
  res.render('landing/o-projektu', {
    activeMenu: 'landing',
    pageTitle: 'O projektu',
  });
});

router.get('/za-medije', (req, res) => {
  res.render('landing/za-medije', {
    activeMenu: 'landing',
    pageTitle: 'Za medije',
  });
});

router.get('/pravno-obvestilo', (req, res) => {
  res.render('landing/pravno-obvestilo', {
    activeMenu: 'landing',
    pageTitle: 'Pravno obvestilo',
  });
});

module.exports = router;