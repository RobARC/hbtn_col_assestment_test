# hbtn_col_assestment_test

This project is a fullstack web application. It is designed with JavaScript as programming language in both the backend and frontend. 

In the backend, we will be using a web server, built with nodejs and expressjs which will be communicating with the database and client requests in the frontend. The database we will use will be mysql version 8.

The frontend will be built with nodejs and handlebars which is a template engine, for the generation of files and HTML code. It will be styled with boostrap and some CSS if needed.

## The requirements are as follows: 

## The BackEnd

Build an app that handles the process of creating an order for a retailer company. This app consist of a series of endpoints, the information is as follows.

We have 4 separate entities that connect to each other: users, orders, shipping, and payments, each one has to save information about the domain of each table.

<img src='./src/images/tables.png'>

The above description does not include relations or conditionals between tables, you have to design the database yourself. 

The required outgoing end points are (well, just two single endpoint "orders" and "users" with multiple options and the login endpoint to get the login token):

**login** here you send username and password in order to obtain a token to keep working with the other endpoint.

**orders/#orderid** - pass the order ID and get the formatted JSON with the required information.

**orders/[order_ids]** - pass multiple order IDs in string format, separated by comma (,) and return the info of those orders.

**orders/date-start - date-end** - pass two dates and return the ids of the orders between those dates

**orders/shipping/{key=string}** return all orders with the given key (city, state, country) and string as value.

**orders/user_id** return orders from that specific user.

**users/all** list all users basic info

**users/user_id** list the user info from the given user id

**orders/search term -** search for the term given in multiple parts of the order, and return the results

Order is received as a parameter, but the ordering must be done in the code (not in the queries). And use the standard sorting and searching algorithms.

You are responsible for also building the endpoint that will save all the information for a new user and a new order (quick tip, shipping and payment must have an order, users are independent)

You should document your architecture selection in the README the reasons and why that architecture fits your project. (You are free to use any architecture or patterns you want)

For this you are limited to use:

- Python (Django, Flask, Django rest framework or Fast API)
- C, C++, Dart, Docker, Go, Java, Javascript, Kotlin, PHP, Ruby, Scala, Typescript
- MySQL or Postgres.
- You must implement and follow TDD.
- Terraform, shellscript and YAML

## Front End

You will build a front end for your Rest API, you can use React, Vue, Angular or plain HTML, CSS and JavaScript (Recommended the later). The design is up to you, but should allow us to see all the above endpoints.

You have to include 4 views.

- Login, to get the token a login into the system
- Search: here you have a search box, filters and links, order by, etc.
- Orders list. (result from previous search, could be the same view)
- Order details (for when you select an order)
- User Details

## DevOps.

Your projects should be easily deployed and integrated to one of the major vendors (AWS, Azure, Google Cloud, Heroku) And the configuration files should be included in the repository.

Your system should integrate basic CD (Continuous Deployment), deployment can be done automatically from GitHub or GitLab to your cloud vendor.

## Extra points if:

- You design your product, so it can reduce or eliminate variability. This means it should be consistent in various cases. (If you need help read a bit before attempting the task) 
A quick definition that will help greatly ([https://wise.vub.ac.be/topic/software-variability](https://wise.vub.ac.be/topic/software-variability))

You are allowed to use any extra tool like Postman, Jenkins, SonarQube, etc.

## Gotchas

- One order can have multiple payments
- The paid field in the order is boolean.
- The order information is not the same as the saved, some values need to be calculated.

## Expected output for an order includes**

- order_id
- customer_id
- customer_name
- gov_id
- order_date
- last_payment_date
- order status
- shipping_info
- totals
- user_information

It Is up to you to build this JSON object correctly.

gov_id stands for government issued ID (so it's alphanumeric)



# Entity - Relation Model

<img src='./src/images/MERHBTN.png'>

## Dependecies

Take a look to a package.json

## Data Base:

You must use mysql version 8.0. To create the data base and tables, use the SQL commands
content in db.sql file.

## start the app

Use **npm run dev**  in the command console to initialize the app. Remember this is a nodejs backend so you must have node installed on your system.

## Demo

<img src='./src/images/demo1.png'>

#### Endpoint Login

<br>

#### Session started 

Pay atention to the nav bar, In it appear, several items, that there was not before. Them you singin in the application you can work it like CRUD API, creating, reading, updating and deleting orders and users.

<img src='./src/images/demo2.png'>
<br>

#### Orders Lists
<br>
<img src='./src/images/demo3.png'>

#### Endpoint Order specific ID
<br>
<img src='./src/images/demo4.png'>
<br>

#### Output in JSON format Order specific ID
<br>
<img src='./src/images/demo5.png'>








