// app/routes/users.js
'use strict';

var logger = require('winston');
var models = require('../models');

module.exports = function(router) {
   'use strict';
   // This will handle the url calls for /users/:user_id
   router.route('/:userId')
      .get(function(req, res, next) {
         logger.info('Récupération de l\'utilisateur ' + req.params.userId);

         models.User.findById(req.params.userId).then(function(user) {
            if (user != null) {
               logger.info('Utilisateur id=' + req.params.userId + ' trouvé')
               res.status(200).json(user);
            } else {
               logger.info('Utilisateur non trouvé');
               res.sendStatus(404);
            }
         });

      })
      .put(function(req, res, next) {
         logger.info('Récupération de l\'utilisateur ' + req.params.userId);

         models.User.findById(req.params.userId).then(function(user) {
            if (user != null) {
               logger.info('Utilisateur id=' + req.params.userId + ' trouvé')
               logger.info('Mise à jour de l\'utilisateur ' + req.params.userId);
               user.update({
                  login: req.body.login
               }).then(function() {
                  res.sendStatus(200);
               });
            } else {
               logger.info('Utilisateur non trouvé');
               res.sendStatus(404);
            }
         });

      })
      .patch(function(req, res, next) {
         res.status(404).send('Non implémenté');
      })
      .delete(function(req, res, next) {
         logger.info('Suppression de l\'utilisateur ' + req.params.userId);
         models.User.destroy({
            where: {
               id: req.params.id
            }
         }).then(function() {
            res.sendStatus(200);
         })
      });
   // This will handle the url calls for /users/
   router.route('/')
      .get(function(req, res, next) {
         logger.info('Récupération de tous les utilisateurs')
         models.User.findAll().then(function(users) {
            res.status(200).json(users);
         })
      })
      .post(function(req, res, next) {
         logger.info('Création d\'un utilisateur');
         logger.info('Données reçues : ' + JSON.stringify(req.body));
         models.User.create({
            login: req.body.login
         }).then(function() {
            res.sendStatus(200);
         });
      });
};