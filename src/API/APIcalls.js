const fetcher = {

  fetchAllMovies() {
    const fetchedAllMovies = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    return fetch(fetchedAllMovies)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(data => data)
    },

    fetchSingleMovie(movieID) {
      const fetchedSingleMovie = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`
      return fetch(fetchedSingleMovie)
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
    },

    fetchMovieVideo(movieID) {
      const fetchedMovieVideos = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`
      return fetch(fetchedMovieVideos)
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
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
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data.user)
      




    },

    fetchUserRatings(userID) {
      const fetchedUserRatings = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings`
      return fetch(fetchedUserRatings)
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data.ratings)
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
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
    },

    fetchDeleteUserRating(userID, ratingID) {
      let int = { method: 'DELETE'}
      const fetchedDeleteRating = `https://rancid-tomatillos.herokuapp.com/api/v2/users/${userID}/ratings/${ratingID}`
      return fetch(fetchedDeleteRating, int)
      .then(request => request.json())
      .then(promise => promise)
      .catch(err => err.message)
      // .then(response => {
      //   if(response.ok) {
      //     return response.json()
      //   } else {
      //     throw response
      //   }
      // })
      // .then(data => data)
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
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
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
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
    },

    getMovieComments(movieID){
      const URL = `http://localhost:3001/api/v1/movies/${movieID}/comments`
      return fetch(URL)
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
    },

    getUpdatedMovieComments(movieID, commentID){
      console.log(movieID)
      const URL = `http://localhost:3001/api/v1/movies/${movieID}/comments/${commentID}`
      return fetch(URL)
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
    },

    getUserFavorites() {
      const fetchedDeleteRating = `http://localhost:3001/api/v1/favorites`
      return fetch(fetchedDeleteRating)
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
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
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(data => data)
    }
}

  export default fetcher;
  