var express = require('express');
var router = express.Router();
var colors = require('colors');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});
*/

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/ingresar', (req, res) => {
  req.session.user = req.body.usuario;
  req.session.pass = req.body.clave;
  res.redirect('/vistaUno');
});

router.get('/vistaUno', (req, res) => {
  const user = req.session.user;
  delete req.session.user;

  const pass = req.session.pass;
  delete req.session.pass;

  res.render('vistaUno', {
    user,
    pass
  });
});


// ingresar dos
router.post('/ingresarDos', (req, res) => {
  req.session.respuesta = req.body.resUno;
  res.redirect('/vistaDos');
});


router.get('/vistaDos', (req, res) => {
  const respuesta = req.session.respuesta;
  delete req.session.respuesta;


  if (respuesta == "4") {
    res.render('vistaDos', {
      respuesta
    });
  } else {
    res.render('vistaError', {
      respuesta
    });
  }
});


module.exports = router;
