## UNMERRY: Universal Node Mongo Express React Redux app, Yippee!

A Universal (Isomorphic) application using the above titled stack.  The application is a simple todo list, but this is 
a codebase that can be used a starting place for many projects.  The app includes socket.io integration, so updates
in one browser appear immediately in all others.

[See it in action here](https://full-stack-redux.herokuapp.com/)

Try opening two browsers, placing them side by side, then adding and deleting todos. 

![Screenshot](/assets/preview.png?raw=true)

Features:
* Server Side Rendering
* Dev and Production Webpack Configs
* Redux Devtools and Hotreloading (development environment only)
* Client Side Tests (Action Creators/Reducers/Components/etc.) 
* Server Side Tests
* Socket.io integration
* ES6 everywhere, including in the testing.

# Usage

clone the repo and run

```npm install```


# Starting the Dev Server Locally

```npm run dev```

Visit http://localhost:8080/ 
Press `ctrl + h` to launch redux-dev-tools

# Production

* Set the NODE_ENV environment variable to 'production'
* Set the MONGOLAB_URI environment variable to your mongodb URI
* Update config/default.json express.prodHost to reflect your production host

with your environment variables/config set, run:
 
```npm start```

# Testing

Run tests with: ```npm test```

Run server side tests with ```npm run test-server```
