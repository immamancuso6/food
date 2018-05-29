This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Prerequisits

First up you will need [NodeJS](https://nodejs.org/en/) installed on your system to run the build tools & test runner.


## Getting Started

To install the app dependencies do a
```
npm install
```


Run app in the development mode.
```
npm start
```
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

Run unit tests
```
npm test
```


//////////////////////////
MY COMMENTS

The test is not completed sorry. But maybe what I have done is enough to make you get an idea about my coding, hopefully.

The application is made with Reactjs.
I have created a main component (a class) and three other secondary components rendering the menu items, the products and the search field.

In the main component I made two HTTP requests using Axios module and got two arrays of objects containing categories and products, which I have assigned to some state properties.
To render the two arrays in the DOM I have used the map() method.
To show the list of products related to the clicked category I have used the filter() method.
To show only the description of the selected product I have created a click function to which is passed the description of the clicked product and that assigns that description to a state property that I used as filter with a conditional statement in the Product component.

To create the free search I have created a onChange event function to assign the value typed by the user to a state property that I used as filter in showing the products with the searched letters.

To create the bold effect on the clicked category I have used a click event and a function to assign the clicked category name to a state property.

About css, I created a css file for each components and installed tools like Material-UI and Bootstrap.
I am sorry but I didn't have time to do the style properly.

