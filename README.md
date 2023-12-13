README (1).md
## Parcel Locker System Application Development Documentation



## Project Development Team
The project was developed by a team of people with the same cultural background from the second year of Information Technology at the Oulu University of Applied Sciences:
- Zhizhou Zhao
- Kun Zhang
- Mei Yu




## Project Overview
The goal of this project was to build an application that simulates a parcel locker system, which was completed in our Advanced Web Application Development course. The system allows users to register and log in so that they can send and receive parcels and monitor the status of parcels in their lockers. The final version of the system will be deployed for use on the public internet.
Project Video Demonstration

(Link)


## Project Description
We used Agile software development methodology combined with Kanban templates from GitHub Projects to organise our workflow. Project progress and team communication remained consistent and moved forward on schedule. We work together in regular on-campus and online meetings and are committed to delivering a competent application as per project requirements.

## Technologies used in the project
User Interface:
- HTML and CSS
- React 

Front-end framework:
- React.js 

Backend:
- Node.js 
- Express API


Database:
- MySQL

Deployment:
- Azure

Tools
- UI Design: Figma
- Code Editor: Visual Studio Code
- Database Design: MySQL Workbench
- Version Control: Git and GitHub

## Application Architecture Diagram

![1701689655296](https://github.com/AWAP-Group9/Backend/assets/95314108/5ecd7e16-f7c8-4367-8ef3-91d7dc306576)


## Interface description
The system provides services through the following different views:
- User Registration and Login: through which the user can register for an account and login to the system.
- Parcel delivery interface: the user can fill in and send new parcel information.
- Receive parcel interface: the user can view the information of the parcel to be received.
- Parcel Status Tracking: allows tracking the status of parcels in the locker system.
- Locker interface: simulates the locker touch screen, allowing the user to interact with the locker.

## Installation and Usage Guide (Local Deployment)
### Step 1:
- Download the project or clone the project repository.
### Step 2:
- Install the front-end dependencies in the project root directory:
- ```npm install axios react-bootstrap bootstrap jwt-decode react-dom react-router-dom```
### Step 3:
- Go to the backend folder 'server', initialise npm and install the backend dependencies:
- ``` npm init -ynpm install express bcrypt body-parser cors jsonwebtoken mysql passport passport-http passport-jwt uuid```
### Step 4:
- Create the local database:  
- Start MySQL and import the SQL file provided by the project into the local database.  
- Create a 'database.js' file in the 'server' folder, add the following code and replace 'xxxx' as appropriate:
- ```javascriptconst mysql = require("mysql");const connection = mysql.createConnection({ host: "xxxx", user: "xxxx", password: "xxxx", database : "xxxx",});module.exports = connection;```
### Step 5:
- Start the application: - Run the backend server in the 'server' directory:
- ``node index.js``.
- Start the front-end service in the project root directory: ``npm start``:
   - ``npm start``.
   - Note: The above steps may need to be adjusted depending on the project.
