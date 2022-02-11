module.exports = {
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "nodejs_boilerplate",
    "host": "127.0.0.1",
    "dialect": "postgresql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}