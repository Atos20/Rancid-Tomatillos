const fetcher = {

  fetchAllMovies() {
    const fetchedAllMovies = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    return fetch(fetchedAllMovies)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log('err', err))
    },

    fetchSingleMovie(movieID) {
      const fetchedSingleMovie = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`
      return fetch(fetchedSingleMovie)
        .then(request => request.json())
        .then(promise => promise)
        // .catch(err => err)
        .catch(err => console.log('err', err))
    },

    fetchMovieVideo(movieID) {
      const fetchedMovieVideos = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`
      return fetch(fetchedMovieVideos)
        .then(request => request.json())
        .then(promise => promise)
        // .catch(err => err)
        .catch(err => console.log('err', err))
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
        .then(data => data)
        .catch(err =>  err)
    },

    fetchUserRatings(userID) {
      const fetchedUserRatings = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`
      const promise = fetch(fetchedUserRatings)
        .then(request => request.json())
      return promise
        .catch(err => console.log('err', err))
    },

    // movieInfo = { movie_id: <Integer>, rating: <Integer between 1 and 10> }
    fetchCreateUserRating(userID, movieInfo) {
      let int = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieInfo)
      }
      const fetchedUserRating = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`
      const promise = fetch(fetchedUserRating, int)
        .then(request => request.json())
      return promise
        .catch(err => console.log('err', err))
    },

    fetchDeleteUserRating(userID, ratingID) {
      let int = { method: 'DELETE'}
      const fetchedDeleteRating = `https://rancid-tomatillos.herokuapp.com/api/v2//users/${userID}/ratings/${ratingID}`
      const promise = fetch(fetchedDeleteRating, int)
        .then(request => request.json())
      return promise
        .catch(err => console.log('err', err))
    }
  }

  export default fetcher;
  