# Welcome to My Cars R Us! Website

Live Site Link: [https://cars-r-us-afd67.web.app/](https://cars-r-us-afd67.web.app/)

Live Server Site Link: [https://carsrus.onrender.com/](https://carsrus.onrender.com/)

Client Repo: [https://github.com/minionsrahat/Full-Stack-CarsRus-ClientSide](https://github.com/minionsrahat/Full-Stack-CarsRus-ClientSide)


Server Repo: [https://github.com/minionsrahat/Full-Stack-CarsRus-ServerSide](https://github.com/minionsrahat/Full-Stack-CarsRus-ServerSide)


## Description

Hello, everyone! This is a single-page website for a Car Inventory Management system. The website provides information on the types of cars we have and allows the management of car inventory.

Using this management system, the admin can deliver cars, add new cars, and restock car quantities. Each car card contains various information such as an image, car description, quantity, price, and features.

To create this project, I set up a MongoDB database, which is a NoSQL database. Then, I connected the database with my server and created several APIs for loading, deleting, and updating data in MongoDB.

To display car information on the homepage, I fetch data by making a GET API call to the server.

For security and user authentication, I implemented GitHub and Firebase Login Authentication. This allows users to log in using their GitHub accounts or their Firebase credentials, providing a seamless and secure authentication experience.

If you have any questions or need further information, please feel free to reach out.

## Technology Used

- React
- React Bootstrap
- React Router
- React Icons
- Bootstrap CDN
- React Authentication
- Firebase Authentication
- React Firebase Hooks
- JWT
- Express.js
- MongoDB


## Client Side Installation

To get started with this, follow these steps:


```
$ git clone https://github.com/minionsrahat/Full-Stack-CarsRus-ClientSide.git
$ cd project
$ npm install

```

## Setup 

```
 Create .env.local file that include:

  * REACT_APP_apiKey
  * REACT_APP_authDomain
  * REACT_APP_projectId
  * REACT_APP_storageBucket
  * REACT_APP_messagingSenderId
  * REACT_APP_appId  


You can obtain these values by creating a Firebase project. Follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/).

2. Click on "Add project" or select an existing project.

3. Fill in the required details and create the project.

4. Once the project is created, go to the project settings.

5. Under the "General" tab, scroll down to the "Your apps" section.

6. Click on the "</>" icon to add a new web app to your project.

7. Register the app with a nickname and click on "Register app".

8. Copy the generated values for the environment variables mentioned above and paste them into the `.env.local` file.

Make sure to replace `<your-values>` with the actual values obtained from your Firebase project.

If you have any questions or need further information, please feel free to reach out.

```

## Run Project

```
$ npm start

```

## Server Side Installation

To get started with this, follow these steps:


```
$ git clone https://github.com/minionsrahat/Full-Stack-CarsRus-ServerSide.git
$ cd project
$ npm install

```

## Setup 

```
 Create .env file that include:

  * DB_USER
  * PASSWORD
  * ACCESS_TOKEN

```

## Run Project

```
$ npm start-dev

```