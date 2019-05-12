# SportsStore

## Description
  My application, called SportsStore, will follow the classic approach taken by online stores everywhere.I will create an online product catalog that customers can browse by category and page, a shopping cart where users can add and remove products, and a checkout where customers can enter their shipping details and place their orders.

## Prerequisites
  The first step is to create a new Deployd application. You will need to download and install Deployd, and after that you need to create a directory to hold the files that are generated. 
```
dpd create sportsstore
dpd -p 5500 sportsstore/app.dpd
>dashboard
```
  The next step is to tell Deployd about the structure of the data it will be string. Click the large green button in the dashboard and select Collection from the pop-up menu. Set the name of the collection to /products. Deployd will prompt you to create the properties of the JSON objects it will store in the collection. Enter the properties listened in the following table:
    
| Name          | Type     | Required? |
| :-----------: |:--------:| :--------:|
| name          | string   | yes       |
| description   | string   | yes       |
| category      | string   | yes       |
| price         | number   | yes       |

Now that we have defined the structure of the objects that Deployd will store, we can add details that the SportsStore will offer to the customers. Click the Data link, which is on the left side of the dashboard. This will display an editor grid into which you can enter values for object properties and so populate the database. To test that Deployd is correctly configured and working, open a browser window and navigate to the following URL: http://localhost:5500/products

We need to extend the Deployd configuration to capture the orders that the SportsStore application will submit. To do that we need to create a new collection /orders and enter the properties listened in the foolowing table:

| Name          | Type     | Required? |
| :-----------: |:--------:| :--------:|
| name          | string   | yes       |
| street        | string   | yes       |
| city          | string   | yes       |
| state         | string   | yes       |
| zip           | string   | yes       |
| country       | string   | yes       |
| giftwrap      | boolean  | no        |
| products      | array    | yes       |


## Directory Structure
* angularjs
  * components
    * cart
      * cart.js
      * cartSummary.html
  * controllers
    * checkoutControllers.js
    * productListControllers.js
    * sportsStore.js
  * filters
    * customFilters.js
  * ngmodules
    * angular-resource.js(*)
    * angular-route.js(*)
  * views
    * checkoutSummary.html
    * placeOrder.html
    * productList.html
    * thankYou.html
  * angular.js(*)
  * bootstrap.css(*)
  * bootstrap-theme.css(*)
  * app.html
* node_modules
* .gitignore
* package-lock.json
* package.json
* Readme.md
* server.js

## Installing the AngularJS and Bootstrap Files
In order for application to work, you'll need to download all the files marked with (*) and paste them in the right place based on directory structure. After that you need to install Node.js and from the SportStore directory , run the following commands:
```
npm install
node server.js
```

