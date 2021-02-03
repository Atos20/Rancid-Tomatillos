
[![Contributors][contributors-shield]](https://github.com/Atos20/Rancid-Tomatillos/graphs/contributors)
[![Forks][forks-shield]](https://github.com/Atos20/Rancid-Tomatillos/network/members)
[![Issues][issues-shield]](https://github.com/Atos20/Rancid-Tomatillos/issues)

## Rancid Tomatillos _*group project*_
Deployed page: [link](https://rancid-t-omatillos.herokuapp.com/)
Login credentials:
```
Name: Diana,
Email: diana@turing.io
Password: 111111
```

### Contributors 

Orlando Murcio [@Atos20](https://github.com/Atos20)
Ian Holladay [@holladayian](https://github.com/holladayian)

## About

Rancid-Tomatillos is a movie rating app, akin to some popular movie rating sites out there. With this app a user will be able to view a list of movies and their average ratings. Upon clicking a movie "card", a user will by Redirected to a movie ShowPage where more specific detail about the movie will be present, along with trailers to the movie and comments people have left about said movie. This app also features the ability for a user to log in. With this implementation, a user will also gain access to rate movies (and see their ratings affect the movies!), like and filter movies, and leave comments on them as well. 

## Breakdown of Goals

* Build an application unsing React Class Components
* Use React Router to create a multipage experience
* Run unit and integration testing 
* Test asynchronous functionality with the React Testing Library
* Practice professional GitHub workflow


#### Technologies used:

    - React
    - React Router
    - JSX
    - ECMAScript 6 
    - ESLint
    - TDD
    - VSCode 
    - git / Version control
    - SCSS 
    - API Fetch

## Wins

  * Use of functional and class components
  * Use of the `this.state`
  * Ability to lift-up the state from components
  * Wireframe
  * Passing down props to child components
  * Implementation of `react-router`
  * Use of `react-player`
  * Used of project board `issues`, `labels` and `tickets` 

## Future Goals

  * Better organiziation of `scss` file 
  * Granular commits 
  * Smaller PR's
  * Run-through video of the project
  * Finalize `like`, `unlike`, and `remove` comment functionality
  * Add mixins and variables to `SCSS` files
  * Close existing issues, 'tickets'

## Challenges

    - Express.js
    - Testing `async` functionality
    - Controlled `form` compoenets

## Links to this project can be found:

Project Page
[Link to the our project incease you get lost!](https://github.com/Atos20/Rancid-Tomatillos)

Backend Server
[link to Microservice](https://github.com/Atos20/Rancind-tomatillos-microserver)

Project Spec/Rubric
[Link to the rubric we based this off of!](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v2.html)

## In Action

#### Take 1

- Welcome

When the application loads, it requests to the server all movie's that then is render on the page. The user however will need to sign in in order to get learn more about each individual movie.

 The user can see the pplication logo as well as a button to login, to go abck to home and all the movie cards that display information about each movie.

  <img src="https://media.giphy.com/media/HgssLnnP5lnwcROQ9u/giphy.gif" height=auto width=75% alt="welcome message"/>

  #### Take 2
- Login as a user

When the user inputs the following crendntial, name `diana`, email`diana@turing.io`, and password `111111`. The user is greeted with a welcoming message that shows to the user that has logged in succesfully.

  <img src="https://media.giphy.com/media/KhQN8qc4TjfDwykk6P/giphy.gif" height=auto width=75% alt="login"/>

   #### Take 3
- Rate a movie

The user can only rate a movie after it has logged in. The rating option is available to the user only after clicking on a movie card, this action directs the user to the `MoviePage` component which displays more details about the movie selected.

The raiting functionality located underneath the movie title, allows the user to rate a movie by using the dropdown menu and chossing a rate that ranges from 1 to 10. 

  <img src="https://media.giphy.com/media/sL0UhvqrJ1m6xCvfJ3/giphy.gif" height=auto width=75% alt="rate movie"/>

   #### Take 4
- Sorting movies by rating

The viwer has the opportunity to interact with the appilcation even if hasn't logged in with the required credentials. Located by the `ALl movies` title the user can select from the dropdown menu two option to filter all movies.

  <img src="https://media.giphy.com/media/X2BM1bJ3vASKcc7AHu/giphy.gif" height=auto width=75% alt="sort movie by rating"/>

   #### Take 5
- Display Movie Page with trailer

The user can click on any movie card to be directed to the movie details page containing adittional information about the movie.

  <img src="https://media.giphy.com/media/VBFk4wRBgOwGAxmDea/giphy.gif" height=auto width=75% alt="moviepage trailers"/>

   #### Take 6
- Commenting movies

After the user or viwer has been directed to a movie page, at the buttom of the page the user can see the commenting section that allows the user to make a new comment to that specific movie. As a viwer you can only see the comments section but you can't interact with it.

  <img src="https://media.giphy.com/media/zMC2DEcDpEQBde0zez/giphy.gif" height=auto width=75% alt="commenting on movies"/>

   #### Take 7
- Favoriting movies

After the logging in the user user can favorite movies, this action  will persist as long as the Express micro server is running.

  <img src="https://media.giphy.com/media/Clm5JpOBJuJL5CMcB3/giphy.gif" height=auto width=75% alt="favoriting movies"/>

## Set Up

1. On the top right corner of this page, click the **Fork** button.
1. Clone the repository to your computer `git clone <URL>`
1. When you run git clone - git clone [remote-address] [what you want to name the repo]
1. Once you have cloned the repo, change into the directory and install the project dependencies by running `npm install`.
1. Run `npm start` in your terminal. At this point you should be able to interact with the application. Make sure `localhost` is running on port `3000`
1. use the following credentials to log in, user name `diana`, email `diana@turing.io` and password `111111`
1. Like, comment, favorite, watch a movie traile and enjoy. 
1. Enter `control + c` in your terminal to stop the server at any time.

if you would like to contribute to the front-end-side of the project, you can create a PR and send it over.

    - Make sure you are using a PR template
    - if there is not an exixting ticket for the PR make sure you create one
    - if your PR makes reference or closes and existing ticke make sure to add it in your PR

If you would like to work on the back-end-side of the project (which handles favorites and comments) - a repo for the server can be found [here](https://github.com/Atos20/Rancind-tomatillos-microserver). This change will be managed by Orlando Murcio becuase this server is hosted locally and written using `Express.js`

### Microservice

Clone down [this other repo](https://github.com/Atos20/Rancind-tomatillos-microserver)

- `cd` into the repo's directory
- run `npm install`
- run `npm start`

This microservice will run on "localhoast:3001".

### Login

Log into the application with the following credentials

UserName: `Diana`

Email: `diana@turing.io`

Password: `111111`

#### Images

##### WireFrames

Login


  <img src="./readmeIMGs/login.png" height=auto width=75% alt="Login wireframe"/>


First remdition of Homepage


  <img src="./readmeIMGs/homepage1.png" height=auto width=75% alt="homepage1 wireframe"/>


First rendition of MoviePage


  <img src="./readmeIMGs/moviepage1.png" height=auto width=75% alt="moviepage1 wireframe"/>


Second Rendition of Homepage


  <img src="./readmeIMGs/homepage2.png" height=auto width=75% alt="homepage2 wireframe"/>


Second Rendition of MoviePage


  <img src="./readmeIMGs/moviepage2.png" height=auto width=75% alt="moviepage2 wireframe"/>


### Project Managers
- [Leta](https://github.com/letakeane)
- [Khalid](https://github.com/khalidwilliams)



<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Atos20/Rancid-Tomatillos.svg?style=flat-square
[contributors-url]: https://github.com//Atos20/Rancid-Tomatillos/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Atos20/Rancid-Tomatillos.svg?style=flat-square
[forks-url]: https://github.com/Atos20/Rancid-Tomatillos/network/members
[stars-shield]: https://img.shields.io/github/stars/Atos20/Rancid-Tomatillos.svg?style=flat-square 
[stars-url]: https://github.com/Atos20/Rancid-Tomatillos/stargazers
[issues-shield]: https://img.shields.io/github/issues/Atos20/Rancid-Tomatillos.svg?style=flat-square
[issues-url]: https://github.com/Atos20/Rancid-Tomatillos/issues
[license-shield]: https://img.shields.io/github/license/Atos20/Rancid-Tomatillos.svg?style=flat-square
[license-url]: https://github.com/Atos20/Rancid-Tomatillos/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
