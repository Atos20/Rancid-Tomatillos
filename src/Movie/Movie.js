import React from 'react';
import './Movie.scss';

/*
movieDetails: {
    average_rating: 7
    backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg"
    budget: 0
    genres: ["Action"]
    id: 718444
    overview: "Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels."
    poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
    release_date: "2020-08-20"
    revenue: 0
    runtime: 106
    tagline: "When the hunter becomes the prey."
    title: "Rogue"
}


movieVideo:{
    videos: Array(1)
    index[0=:
    id: 331
    key: "IpSK2CsKULg"
    movie_id: 718444
    site: "YouTube"
    type: "Trailer"
}

*/
export default function Movie({movieDetails, movieVideo}) {
console.log(movieDetails)//obj
console.log(movieVideo)//array
    return (
        <div>
            <h1 className="name">Hola</h1>
        </div>
    )
}
// display movie information
