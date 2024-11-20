# Project Title
TailTap.io

## Overview

TailTap is a platform for skateboarders to find and share information regarding skateboarding locations.

### Problem Space

As a potential, beginner or experienced skateboarder, finding the right skate spot/skate features and accessibility features is integral to your progression in the sport.  Morevoer, as the skateboarding community calls these skate spots home, access to these spaces becomes integral to finding your skate community as well,
which is one of the best parts of the sport.

Whether you are a first time skater or a pro, it can be an arduous and often fruitless search through google maps, instagram, twitter and the like to find your next spot both at home and while travelling.  Each skateboarder requires a unique variety of skate features, accessibility features and diversity of community at different points in their life to get the most out of the activity.  Finding skate spots to accomodate those needs can be overwhelming and stressfull, detracting from the purpose of the activity which is fun.  There is no current single location to find this information, and there is nothing worse than skating 2 hours to a spot only to find out the google maps photos were outdated and they ripped out your favorite feature.

### User Profile
-Potential skateboarders
-Current skateboarders
    -looking to find new spots to skate
    -looking for certain features to skate
    -looking for people to skate with
    -looking to have a place to share and find skate footage


### Features

-As a user;

    -I want to be able to find the closest
    skate spots to my current location
    -I want to be able to find the closest skate spots to any given location
    -I would like to access information regarding these spots such as;
        -Detailed descriptions of features
        -Detailed photos of features
        -Accessibility information
        -General spot occupancy
        -Median spot skill level
        -Social media links to associated skate groups
        -Posted videos from other skaters from the spot
    -I would like users to be able to filter by the following information;
        -distance from location
        -specified skate features
        -accessibility features
        -General spot occupancy
        -Median spot skill level
    

-As a logged in user, I want all the abilities of the regular user as well as;
    
    -I want to be able to post videos on skate spot pages of me skating at that location
    -I want to be able to submit changes to skatepark information to page moderators
    -I want to be able to view socials information of other users
    -I want a user profile page where I can keep my own footage, saved footage of other users
    -I want to be able to comment on and like others videos
    -I want a sidebar on each feature which includes footage of bails/falls on those features

## Implementation

### Tech Stack

Front End
- React w Typescript + Vite
- Client libraries: 
    - react
    - react-router
    - axios

Back End
- Sqlite3 DB
- Node.js architecture
- Server libraries:
    - knex
    - express
    - bcrypt for password hashing

Deployement
- Heroku
- Github


### APIs

1. Google Distance Matrix API:
https://developers.google.com/maps/documentation/distance-matrix/overview

2. Google Geocoding API:
https://developers.google.com/maps/documentation/geocoding/overview#:~:text=The%20Geocoding%20API%20is%20a,Place%20ID%20into%20an%20address.

3. Weather API: https://weatherstack.com/?utm_source=google&utm_medium=cpc&utm_campaign=weatherstack_Search_USCA&gad_source=1&gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7p-f6EFqWJW9jgSP_BQaS_0wNgo3AOcIiWHrHhG06rdHlQPDC1vtFUaAlmMEALw_wcB


### Sitemap

- Home Page
- List Spots
- View and post on spot page
- Register
- Login
- User Homepage

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

---

## Future Implementations
Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

