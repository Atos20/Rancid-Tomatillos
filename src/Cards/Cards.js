import React, { Component } from 'react'
import fetcher from '../API/APIcalls';
import { Card } from '../Card/Card'
import './Cards.scss'

export default class Cards extends Component {
  constructor(props){
    super(props)
   
  this.state = {
    movies : [],
    error: ''
    }
  }

  async componentDidMount() {
    const promise = await fetcher.fetchAllMovies();
    this.setState({movies: promise.movies})
  }

  injectMovies = () => {
    return this.state.movies.map(movie => {
      return (
          <Card movies={movie}/>
      )
    })
  }

  render() {
    return (
    <>
      <h1 className="cards-title">All movies</h1>
      <section className="card-area">
      {this.injectMovies()}
      </section> 
    </>
  )
  }
}
