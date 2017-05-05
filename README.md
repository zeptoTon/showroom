# Objective

This project is demonstrating full stack technology by using a showroom

## Technology Used:
- Typescript
- Mobx
- React
- Jest Test Runner
- Express
- Webpack
- tslint
- Mongoose
- Promise & async/await
- pm2

## TODO:
- SASS
- enzyme, sinon in Frontend Testing
- CSS Presentation on DOM (at the moment is nothing!)
- HMR with webpack-dev-server in developement
- HTML5 history API / React Router

## Setup
`yarn install`

`npm install -g pm2`

## Start Dev
Note: If mongod already start, it will show error as it is trying to start mongod as well, however it can be ignore.

`yarn start`

`pm2 start process.json`

## Test
You can only run testing while `yarn start` is listening changes in behind.

`yarn test`

## Config
package.json
- MONGODB, connection string for jest test env.

process.json
- MONGODB, connection string for dev env.
- PORT, port number for dev server. default 3000


