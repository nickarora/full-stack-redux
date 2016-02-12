## NMERR: Node + Mongo + Express + React + Redux 

A Universal (Isomorphic) application using the above titled stack.  The application is a simple todo list, but this is 
a codebase that can be used a starting place for many projects.

[See it in action here](https://full-stack-redux.herokuapp.com/)

Features:
* Server Side Rendering
* Dev and Production Webpack Configs
* Redux Devtools and Hotreloading
* Client Side Tests (Action Creators/Reducers/etc.) 
* Server Side Tests
* ES6 everywhere, including in the testing.

# Usage

clone the repo and run

```npm install```


# Starting the Dev Server Locally

```npm run dev```

Then visit http://localhost:8080/

# Production

Set the NODE_ENV environment variable to 'production'
Set the MONGOLAB_URI environment variable to your mongodb URI

with your environment variables set, run:
 
```npm start```

# Testing

Run tests with: ```npm test```
Run server side tests with ```npm run test-server```
