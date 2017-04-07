// app/routes/users.js

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/:userId')
  .get(function(req, res, next) {
    res.send('Récupération de l\'utilisateur ' + req.params.userId);
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

  router.route('/')
  .get(function(req, res, next) {
      res.send('Récupération de tous les utilisateurs')
  }).post(function(req, res, next) {
      res.send('Création d\'un utilisateur');
  });
};