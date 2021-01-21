##Using Sequelize##

- run `npm i sequelize-cli -g, npm i pg -g`

- make file `.sequelizerc`.

- run `sequelize init`.

- run `sequelize model:create --name User --attributes firstname:string, lastname:string, password:string, email:string, gender:string, avatar:string` for make models database.

- run `sequelize db:migrate`.

- run `sequelize seed:create --name users` for boilerplate seeder database

- run `sequelize db:seed:all` for seeders database

## ----------------------- Delete DB -----------------

- run `sequelize db:undo` for deleting database (Delete Database).
