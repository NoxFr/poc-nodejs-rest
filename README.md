Micro Service NodeJS [LOT3]

# Introduction

MicroService REST de gestion des utilisateurs.

Jira : http://typunch/jira/browse/LAB-58

## Technologies & Frameworks utilisées

- NodeJS : v7.8.0
- Express : 4.X
- MySql
- Voir package.json pour le reste.

## Installation

``` docker build -t scalab-nodejs-service``` 
``` docker run -d -p 4000:4000 scalab-nodejs-service``` 

## Utilisation

TODO: Write usage instructions
### Intialisation des variables d'environnements
La librairie dotenv est présente sur ce projet afin de créer les variables d'environnement nécessaires (https://github.com/motdotla/dotenv)
Créer un fichier .env à la racine comme suit :
 ```javascript
NODE_ENV=development

NODE_PORT=4000
NODE_HTTPS=false

# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=users
```

## TODO

- Ajout de tests unitaires

## Historique
0.0.1 - 20170421 - Initialisation

## Contributeurs
      
- Mathieu DURAND (mathieu.durand@scalian.com)
        
## License

TODO
