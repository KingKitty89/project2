<h1 align="center">**Simply-Somm**</ht>

------
<img src="https://img.shields.io/badge/-made%20with%20love-brightgreen" >

## **Live Link**

<h2><a href ="https://metric-drake-50737.herokuapp.com/">Live Link</a></h2>

## **Description**

An app that allows a user to have a sommelier at their fingertips. Simply Somm is an app that gives a user the ability to view and search for wines and whiskeys based on certain taste and aroma profiles. If a user is looking for a wine that is sweet smelling on the nose and sweet tasting the app will query a database of wines and then display wines that correlate to those paramters. Then the user will be able to see a selection of wines that fit their taste and aroma needs. If the user is searching for a whiskey they will do the same procdure entering a taste and aroma they would like and then whiskeys that fit those search parameters will be displayed for the user.


## **Installation**
Step 1. Git clone the repository from this link into your terminal: https://github.com/KingKitty89/project2

    npm install

Step 2. Install all the required dependences using the command below:

Step 3: Run the app using the command below in your terminal:

    npm start

## **Technology Stack**
* HTML 
* CSS
* Bootstrap
* Express-Handlebars
* Express.js
* JavaScript
* Node.js
* JQuery
* Sequelize
* ESlint
* TravisCI
* Heroku`
* GitHub

I created the following HTML routes: 

* GET "/" returns the index.html file.

![Demo](./assets/notetaker1.png)

* GET /notes returns the notes.html file.

![Demo](./assets/notetaker2.png)

I created the following API routes: 

* GET /api/notes reads the db.json file and returns all saved notes.

* POST /api/notes receives a new note, saves it, and adds it to the db.json file.

![Demo](./assets/notetaker4.png)

* DELETE /api/notes/:id receives a query paramter which contains an id of a note to delete from the sidebar when the trash can button is clicked. This in turn also removes the note from the db.json.

![Demo](./assets/notetaker5.png)

<p align="center">
  <img width="460" height="300" src="./assets/notetaker6.gif">
</p>



## **Installation**

npm i

## **Usage**

This application will help users easily keep track of information by allowing them to take persistent notes and be able to call on those notes when needed. 

## **Contributors/Contact**

* #### **Name:** Jessica Helft (@KingKitty89)
* #### **Email:** [jessicahelft@gmail.com](jessicahelft@gmail.com)
* #### **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/jessicahelft)
------



@msplawn
@AlexTagg392

## **Tests**

![Demo](./assets/notetaker3.png)

<h3 align ="center"><a href ="https://drive.google.com/file/d/1htQpWXPep6DhwCx8mFfBmdVzPCxewhSO/view">Live Demo</a></h3>





