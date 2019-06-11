This project was a Coding challenge submitted to PeopleFluent and created using _create-react-app_

Live demo of application at
https://react-redux-calculator.netlify.com/

## Installation

```js
git clone repo
```

Execute the following commands in downloaded git repository which install all the neccessary packages required to execute the application

```js
npm install
```

Once the packages were installed in the form of node_modules in project directory run the command in command line to access the application in browser

```js
npm run start
```

Access the application in your local browser at http://localhost:3000/

## Technology Stack

- React.js 16.8
- Redux 4.0
- CSS3
- React-Redux 7.0
- Netlify

### Why React.js?

React.js is used to build this application as Single page applications are easy to build and maintain with React. Additonally, Jsx syntax helps in writing clean HTML code and One way data binding provide more concrete approach to applications like Calculator.

### Reason Behind Redux

State Mangament plays a major role in SPA which were consumed by large number of users in maintainability of code as application grew larger in size such as adding scinetific operations to simple calculator and increase performance by optimizing actions and reducers.

Redux is one such state management tool which is tightly coupled with React architecture. Features such as Store which has all the states and immutability of state objects makes Redux more suitable for React applications.

Redux Architecture:

<p align="center">
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--fCDvEpjd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.stack.imgur.com/LNQwH.png">
</p>

### CSS3

Traditional CSS styling method is used for this application as styling elements are very minimal and implementing CSS Pre-processors ,Server side rendering techniques are expensive operations which will serve better for complex and large scale applications.

In-line styling method is avoided to speedup the webpage as CSS modules architecture is followed to avoid CSS leaking to other components.

### React-Redux ??

React and Redux are tightly coupled and React-Reduc package provide the service to integrate them together. _Connect_,_mapStateToProps_,_mapDispatchToProps_ serve the purpose of accessing data and dispatching actions from React components.

Often one can find the following synatx which connects the store to components and allows us to access data from the store

```js
export default connect()({ Component_name });
```

_mapStateToProps_ helps in accessing the data from different states

```js
const mapStateToProps=state=>({
    {user_defined_variable} : state.{required_statename}
})
```

### Deployment with Serverless

As the application is standalone and doesnt require any database _NETLIFY_ is chose to deploy the application. The reasons behind choosing Netlify are :

- Easy to integrate Git repositories
- Configure AutoBuilds
- Access to inbuilt Netlify functions

### Handling Edge cases

Applications like Calculator which performs mathematical operations often identify invalid expressions written by users and handling them is very key.

In this application Edge cases are handled and displays a error messages "Invalid expression"

## State Management and Functionality

Though the coding challenge is meant to build the front end part , Time is invested to implement State management which is important for applications that are serverless and often grow in size with extended servcies. Functionality helps you identify potential edge cases.

## Future Work

Future work involves in using

- Webpack which bundles the applications and decrease the response time. Adding webpack would be more helpful to the application that is accessed by large group of users.

- Styled components in CSS to built custom styled buttons.

- Make the application progressive to serve as Offline Application
