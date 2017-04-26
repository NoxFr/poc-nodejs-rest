// app/routes/users.js

var logger = require('winston');

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/:userId')
    .get(function(req, res, next) {
      logger.info('Récupération de l\'utilisateur ' + req.params.userId);
      req.getConnection(function(err, connection) {
        if (err)  {
          return next(err);
        }
        connection.query('SELECT * FROM t_users WHERE id = ?', [req.userId], function(err, results) {
          if (err) {
            return next(err);
          }
          res.status(200).json(results);
        });
      });

    }) 
    .put(function(req, res, next) {
      res.send('Mise à jour de l\'utilisateur ' + req.params.userId);
    })
    .patch(function(req, res,next) {
      res.send('Mise à jour ponctuelle de l\'utilisateur ' + req.params.userId);
    })
    .delete(function(req, res, next) {
      res.send('Suppression de l\'utilisateur ' + req.params.userId);
    });

  // This will handle the url calls for /users/
  router.route('/')
    .get(function(req, res, next) {
      logger.info('Récupération de tous les utilisateurs')
      req.getConnection(function(err, connection) {
        if (err)  {
          return next(err);
        }
        connection.query('SELECT * FROM t_users', [], function(err, results) {
          if (err) {
            return next(err);
          }
          res.status(200).json(results);
        });
      });
    })   
    .post(function(req, res, next) {
        res.send('Création d\'un utilisateur');
    });
};