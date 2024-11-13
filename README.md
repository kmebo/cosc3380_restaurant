Restaurant Web Application
Using a Postgres Database

Steps for Setup
1)  Change the local database connection in the 'server.js' file. Current setup is
      user: 'postgres',
      host: 'localhost',
      database: 'hw4_test',
      password: '1234',
      port: 5432,
    Change any values if needed to match your local database.
2)  All tables being used in local database are located in the 'sqlTables.sql' file. You should be able to copy and paste the entire file into postgres query tool and execute to generate required database. If you can't do the entire .sql file at once, then
    generate each table one at a time.
3) Install the external 'node.js' at https://nodejs.org/en, click on the download tab and then prebuilt installer, select the correct download for your local system.
4) Once node.js is installed, you will need to run several npm commands in your terminal.
     npm install express     https://expressjs.com/
     npm install cors        https://www.npmjs.com/package/cors
     npm install path        https://www.npmjs.com/package/path
     npm install pg          https://www.npmjs.com/package/pg
