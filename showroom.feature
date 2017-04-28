# Urban Massage Full-Stack Technical Test

## Overview

We’re looking for you to create a basic RESTful API server to handle the character data we have provided and a SPA to display/interact with this server. There should also be accessible a list of favourite characters as defined by the user of your application.

## Back End

* Using Node and your choice of http framework create a basic RESTful API server (auth not required).

* Create four routes allowing CRUD operations for characters altering/reading the details in the file provided.

* Use environment variables to store configuration details where appropriate.

## Front End

* Using a SPA framework of your choice build the necessary interface to interact with the routes you’ve created above.

* Each character should have a 'Favourite' button which allows the user to save this character as a favourite. Displaying these favourites somehow and the ability to remove them again from the list (and from the character page) should be implemented but is up to you on how and where this is displayed. This can be persisted server side or kept in local storage/memory.

* The design and structure is completely of your choosing. Feel free to use a CSS framework too, the fancier you can make it look the better, however we don't expect it to be an award winning design just something that takes into account your ideas on usability.

* Loading states should be taken into account.

* Handling errors with correct messages when/if the API call fails would be appreciated.

## Notes

* It only needs to work in the latest version of whatever browser you use (i.e. Chrome / Firefox).

* Please include instructions on how to build and setup your project.

* Notes on how you would improve this application given more time would be great.

## Bonus points

These are by no means necessary but if you want to show off!

* You could look to implement features such as the search functionality.

* Exponential backoff in case of file / connection errors.

* LRU Cache where appropriate.

* Implement a database of your choosing to store favourites and character data.

