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
      const fetchedSingleMovie = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`
      const promise = fetch(fetchedSingleMovie)
        .then(request => request.json())
      return promise
        .catch(err => console.log('err', err))
    }


  }
  



/*
https://rancid-tomatillos.herokuapp.com/api/v2
*/