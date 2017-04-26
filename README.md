Micro Service NodeJS [LOT3]

# Introduction

MicroService REST de gestion des utilisateurs.

Jira : http://typunch/jira/browse/LAB-58

## Technologies & Frameworks utilisées

### Applicatif :

- NodeJS : v7.9.0
- Express : 4.X
- MySql
- Voir package.json pour le reste.


### Docker :
 
 - docker-compose v3

## Installation & Démarrage

<<<<<<< HEAD
``` docker build -t scalab-nodejs-service ``` 

``` docker run -d -p 4000:4000 scalab-nodejs-service ``` 

## Utilisation

TODO: Write usage instructions
### Intialisation des variables d'environnements
La librairie dotenv est présente sur ce projet afin de créer les variables d'environnement nécessaires (https://github.com/motdotla/dotenv)
Créer un fichier .env à la racine comme suit :
 ```java
NODE_ENV=development
=======
### Via docker
``` docker-compose build &&  docker-compose up ``` 
### Via NPM (sans BDD)
``` cd ./web ```
``` npm start ```

## Utilisation

Application REST sur le port 4000 (par défaut).
Url d'accès : http://localhost:4000/users
>>>>>>> [EVO] MAJ Readme.MD

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