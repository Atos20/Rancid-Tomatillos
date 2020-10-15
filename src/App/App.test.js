import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App.js';
import '@testing-library/jest-dom';
import {  MemoryRouter } from 'react-router-dom';
import fetcher from '../API/APIcalls';
jest.mock('../API/APIcalls');

describe('App', () => {
  
  beforeEach(() => {
    
    fetcher.fetchAllMovies.mockResolvedValueOnce({
      movies :[
        {
          average_rating: 6.75,
          backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          id: 694919,
          poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          release_date: "2020-09-29",
          title: "Money Plane"
        }, 
        {
          average_rating: 3,
          backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
          id: 337401,
          poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
          release_date: "2020-09-04",
          title: "Mulan"
        }
      ]
    }) ;

    fetcher.fetchSingleMovie.mockResolvedValueOnce({
      average_rating: 7,
      backdrop_path: "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
      budget: 0,
      genres: (2) ["Comedy", "Action"],
      id: 726739,
      overview: "It's been ten years since the creation of the Great Truce, an elaborate joint-species surveillance system designed and monitored by cats and dogs to keep the peace when conflicts arise. But when a tech-savvy villain hacks into wireless networks to use frequencies only heard by cats and dogs, he manipulates them into conflict and the worldwide battle between cats and dogs is BACK ON. Now, a team of inexperienced and untested agents will have to use their old-school animal instincts to restore order and peace between cats and dogs everywhere.",
      poster_path: "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
      release_date: "2020-10-02",
      revenue: 0,
      runtime: 84,
      tagline: "",
      title: "Cats & Dogs 3: Paws Unite",
    });

    fetcher.fetchMovieVideo.mockResolvedValueOnce([
      {
        id: 303,
        key: "aRuhOJJA56U",
        movie_id: 581392,
        site: "YouTube",  
        type: "Featurette"
      }
    ]);

    fetcher.fetchUser.mockResolvedValueOnce(
      {
        email: "diana@turing.io",
        id: 82,
        name: "Diana"
    }
    )

    fetcher.fetchUserRatings.mockResolvedValueOnce([
      {
        created_at: "2020-10-14T19:59:36.014Z",
        id: 2698,
        movie_id: 592350,
        rating: 1,
        updated_at: "2020-10-14T19:59:36.014Z",
        user_id: 82,
      }
    ])

  });
    
      it('should load homepage components', () => {
        render(
          <MemoryRouter>
            <App />
          </MemoryRouter> 
        );

        const header = screen.getByRole('heading', { name: /rancid tomatillos/i })
        const subHeader = screen.getByRole('heading', { name: /rate your next movie/i })
        const homeButton = screen.getByRole('button', { name: /home/i })
        const loginButton = screen.getByRole('button', { name: /log in/i })
        const sortTitle = screen.getByRole('heading', { name: /sort by/i })
        const sortSelect = screen.getByRole('combobox')
        const sortButton = screen.getByRole('heading', { name: /sort by/i })
  

        expect(header).toBeInTheDocument();
        expect(subHeader).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
        expect(sortTitle).toBeInTheDocument();
        expect(sortSelect).toBeInTheDocument();
        expect(sortButton).toBeInTheDocument();
        
      });
        
      it('Should be able to display movies on load', async () => {
        console.log(waitFor)
        render(
          <MemoryRouter>
            <App />
          </MemoryRouter> 
        );
        const title1 =  await waitFor(() => screen.getByRole('heading', { name: /money plane/i }))
        const title2 =  await waitFor(() => screen.getByRole('heading', { name: /mulan/i }))

        expect(title1).toBeInTheDocument();
        expect(title2).toBeInTheDocument();

      })

      it('A user should be able to login', () => {
        // when the user clicks the login button the login Form should appear 
        // on the page a user should be able to see the form with imput fiels and 2 more buttons 
        //when the user click on the submit button and the information is correct the user is 
        //redirected to the home page but the user see extra elementes, such as the user's name
      })

/* 
Fired Events

   fireEvent.click(homeButton)
   fireEvent.click(loginButton)
   fireEvent.click(sortButton)
   fireEvent.click(homeButton)

It Blocks

  it('Should add a new rating when submitted by a user', () => {

  })
  it('should be able to delete a rating when a user chooses', () => {

  })



*/

  // Implement the below code when we get the router running
  // it('should render the login page', () => {
  //   render(<App />)
  //   expect(screen.getByText("User name")).toBeInTheDocument();
  //   expect(screen.getByText("Email")).toBeInTheDocument();
  //   expect(screen.getByText("password")).toBeInTheDocument();
  // }) 
})
// mock state
