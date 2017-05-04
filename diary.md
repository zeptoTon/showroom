#Showroom Diary

##2017-05-03
frontend source map issue. it cannot map tsx!

dev => config webpack to let index.html serve..
 - do I need webpacke-dev-server for live reload or HMR?
 - I need a html loader in webpack and output to dist
production => config node serve under /dist/index.html

__v in Mongo Document ?


##2017-04-29
Create DB schemas in ES6 style for mongoose
 - characters model
import data from json function
Express Route
 - '/' index.html
 - '/characters' GET PUT PATCH(batch) DELETE(all)
 - '/characters/:id' GET PATCH DELETE
Folder Structure
/client-src
 - tsx
/server-src
 - tsx
/client-build
 - bundle.js
/server-build
index.html


##2017-04-28
What dev stack should I use?
what I learn from masterchef(webpack + babel + react), we could use typescript + react this time.
Nodejs + Express + Jest test runner + Sinon
 - create, update, delete, retrieve
SASS + mobx + typescript + Jest test runner + Sinon
 - bookmark individual character, store on server as well
deploy
 - N/A
database
 - store characters mongodb
 - ORM: mongoose, mongod --dbpath=./data
search
cache

remark:
 - single user problem, cannot allow more than 1 user behaviour


