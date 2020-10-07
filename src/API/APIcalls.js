let fetcher = {
  fetchAllMovies() {
    const fetchedAllMovies = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    const promise = fetch(fetchedAllMovies)
      .then(response => response.json())
    return promise
      .catch(err => console.log('err', err))
    },

    fetchSingleMovie(movieID) {
      const fetchedSingleMovie = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`
      const promise = fetch(fetchedSingleMovie)
        .then(request => request.json())
      return promise
        .catch(err => console.log('err', err))
    },

    fetchAMoviesVideos(movieID) {
      const fetchedMovieVideos = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`
      const promise = fetch(fetchedMovieVideos)
        .then(request => request.json())
      return promise
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
      const fetchedUser = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/login`
      const promise = fetch(fetchedUser, int)
        .then(request => request.json())
      return promise
        .catch(err => console.log('err', err))
    },

    fetchUserRatings(userID) {
      const fetchedUserRatings = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`
      const promise = fetch(fetchedUserRatings)
        .then(request => request.json())
      return promise
        .catch(err => console.log('err', err))
    },

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
  



/*
https://rancid-tomatillos.herokuapp.com/api/v2
*/