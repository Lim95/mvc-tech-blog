# MVC Tech Blog
   
## Description

A mysql database and CMS-style Blog built using Model View Controller (MVC) paradigm. Built using MySQL2, Express, Sequelize, Bulma, Handlebars and dotenv

## Application Deployment	

https://mvc-tech-blog1.herokuapp.com/

## Installation Guidelines

Add a .env file to the root of the project

```text
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PW='XXX'
```

If you haven't done yet, install npm

`npm init`

`npm install`
  
## Usage
  
Run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

Enter PW when promted

`source db/schema.sql`

`quit`

`npm run seed`
  
`npm start`

With Nodemon:

`npm run watch`

## Testing

Helper testing is currently setup with Jest

## Contributing
[Richard Lim](https://github.com/lim95)

## Questions
Contact me with any questions: [email](mailto:sungjoon.lim@gmail.com) , [GitHub](https://github.com/lim95)<br />