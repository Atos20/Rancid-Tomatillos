let fetcher = {
  fetchAllMovies() {
    const fetchedAllMovies = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    const promise = fetch(fetchedAllMovies)
      .then(response => response.json())
    return promise
      .catch(err => console.log('err', err))
    }
  }
  



/*
https://rancid-tomatillos.herokuapp.com/api/v2
*/