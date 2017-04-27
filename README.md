Micro Service NodeJS [LOT3]

# Introduction

MicroService REST de gestion des utilisateurs.

Jira : http://typunch/jira/browse/LAB-58

## Technologies & Frameworks utilisées

### Applicatif :

- NodeJS : v7.9.0
- Express : 4.X
- Sequelize (ORM) : 3.30.X
- MySQL : 5.7
- Voir package.json pour le reste.


### Docker :
 
 - docker-compose v3

## Installation & Démarrage

### Via docker
``` docker-compose build &&  docker-compose up ``` 
### Via NPM (sans BDD)
``` cd ./web ```
``` npm start ```

## Utilisation

Application REST sur le port 4000 (par défaut).
Url d'accès : http://localhost:4000/users

### Gestion des variables d'environnements
Les variables d'environnements (connexion BDD, port applicatif etc.) sont gerées de plusieurs façons :
* Par passage d'arguments des dockerfile depuis docker-compose (si utilisation de l'application via docker-compose)
* Via le fichier .env à la racine du projet web (dev only)
* Via les variables d'environnement

TODO: A Compléter

## TODO

- Ajout de tests unitaires

## Historique
0.0.2 - 20170421 - Ajout d'une BDD MySQL
0.0.1 - 20170421 - Initialisation

## Contributeurs
      
- Mathieu DURAND (mathieu.durand@scalian.com)
        
## License

TODO