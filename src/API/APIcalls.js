const fetcher = {

  fetchAllMovies() {
    const fetchedAllMovies = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    return fetch(fetchedAllMovies)
      .then(response => response.json())
      .then(data => data)
      .catch(err => err.message)
    },

    fetchSingleMovie(movieID) {
      const fetchedSingleMovie = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`
      return fetch(fetchedSingleMovie)
        .then(request => request.json())
        .then(promise => promise)
        .catch(err => err.message)
    },

    fetchMovieVideo(movieID) {
      const fetchedMovieVideos = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`
      return fetch(fetchedMovieVideos)
        .then(request => request.json())
        .then(promise => promise)
        .catch(err => err.message)
    },

    fetchUser(userInfo) {
      let int = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    }
      const fetchedUser = `https://rancid-tomatillos.herokuapp.com/api/v2/login`
      return fetch(fetchedUser, int)
        .then(request => request.json())
        .then(data => data.user)
        .catch(err => err.message)
    },

    fetchUserRatings(userID) {
      const fetchedUserRatings = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`
      return fetch(fetchedUserRatings)
        .then(request => request.json())
        .then(data => data.ratings)
        .catch(err => err.message)
    },

    fetchCreateUserRating(userID, newRating) {
      let int = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRating)
      }
      const fetchedUserRating = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`
      return fetch(fetchedUserRating, int)
        .then(request => request.json())
        .then(promise => promise)
        .catch(err => err.message)
    },

    fetchDeleteUserRating(userID, ratingID) {
      let int = { method: 'DELETE'}
      const fetchedDeleteRating = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings/${ratingID}`
      return fetch(fetchedDeleteRating, int)
        .then(request => request.json())
        .then(promise => promise)
        .catch(err => err.message)
    },

    addMovieComment(movieID, comment){
      const int = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }
      const URL = `http://localhost:3001/api/v1/movies/${movieID}/comments`
      return fetch(URL, int)
        .then(request => request.json())
        .then(response => response)
        .catch(err => err.message)
    },

    likeMovieComment(movieID, commentID, commentStatus){
      const int = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentStatus)
    }
      const URL = `http://localhost:3001/api/v1/movies/${movieID}/comments/${commentID}`
      return fetch(URL, int)
        .then(request => request.json())
        .then(response => response)
        .catch(err => err.message)
    },

    getMovieComments(movieID){
      const URL = `http://localhost:3001/api/v1/movies/${movieID}/comments`
      return fetch(URL)
        .then(request => request.json())
        .then(response => response)
        .catch(err => err.message)
    },

    getUpdatedMovieComments(movieID, commentID){
      console.log(movieID)
      const URL = `http://localhost:3001/api/v1/movies/${movieID}/comments/${commentID}`
      return fetch(URL)
        .then(request => request.json())
        .then(response => response)
        .catch(err => err.message)
    },

    getUserFavorites() {
      const fetchedDeleteRating = `http://localhost:3001/api/v1/favorites`
      return fetch(fetchedDeleteRating)
      .then(request => request.json())
      .then(promise => promise)
      .catch(err =>  err.message)
    },

    addUserFavorites(movieID) {
      const int = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieID)
      }
      const fetchedDeleteRating = `http://localhost:3001/api/v1/favorites`
      return fetch(fetchedDeleteRating, int)
      .then(request => request.json())
      .then(promise => promise)
      .catch(err => err.message)
    }
}

  export default fetcher;
  