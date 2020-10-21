import React from 'react';
import { render, screen, waitFor} from '@testing-library/react';
import {  MemoryRouter } from 'react-router-dom';
import fetcher from '../API/APIcalls';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Comments } from './Comments';
jest.mock('../API/APIcalls');

describe('Comments', () => {
    
    let comments;
    beforeEach(() =>{
          comments = [
              {
                author: "Orlando",
                comment: "this is a comment by me!",
                id: 1603238388485,
                likeStatus: false,
                movieId: 718444,
                replies: [],
                replyCount: 0,
                time: "2020-10-20T23:59:44.480Z",
              }
          ]
          
    });
    //unit test
    it('Should be able to render the comments form', () => {
        render(
            <MemoryRouter>
              <Comments 
                  movieComments={comments}
              />
            </MemoryRouter> 
        );

        const commentTitle = screen.getByRole('heading', { name: /comments/i });
        const commentInputField = screen.getByPlaceholderText('Add your comment here');
        const AddCommentBtn = screen.getByRole('button', { name: /add comment/i });
        const ClearCommentButton = screen.getByRole('button', { name: /add comment/i });

        expect(commentTitle).toBeInTheDocument()
        expect(commentInputField).toBeInTheDocument()
        expect(AddCommentBtn).toBeInTheDocument()
        expect( ClearCommentButton).toBeInTheDocument()
    })
    //unit test
    it('Should be able to display a comment', () => {
 
        render(
            <MemoryRouter>
              <Comments 
                  movieComments={comments}
              />
            </MemoryRouter> 
        );

        const userName = screen.getByRole('heading', { name: /Orlando/i });
        const commentByTheuser = screen.getByText(/this is a comment by me!/i);
        const thumbsUp = screen.getByText('like');
        const likeCount = screen.getByRole('heading', { name: /0/i })

        expect(userName).toBeInTheDocument()
        expect(commentByTheuser).toBeInTheDocument()
        expect(thumbsUp).toBeInTheDocument()
        expect(likeCount).toBeInTheDocument()
    })
    //integration test
    it('Should be able to add a new comment, then the comment should appear on the window', async () =>{
        
        
        // POST comment
        fetcher.addMovieComment.mockResolvedValueOnce([
          {
            author: "Orlando",
            comment: "Mock comment one",
            likeStatus: false,
            replies: [],
            replyCount: 0,
            time: "2050-12-20"
          }
        ]);
        //get comment
        fetcher.getMovieComments.mockResolvedValueOnce([
            {
              author: "Orlando",
              comment: "Mock comment one",
              likeStatus: false,
              replies: [],
              replyCount: 0,
              time: "2050-12-20"
            },
            {
              author: "Sara",
              comment: "mock comment",
              likeStatus: false,
              replies: [],
              replyCount: 0,
              time: "2050-12-20"
            }
          ])

        render(
            <MemoryRouter>
              <Comments 
                  movieComments={comments}
              />
            </MemoryRouter> 
        );
        
        const userName = screen.getByRole('heading', { name: /Orlando/i });
        const commentTitle = screen.getByRole('heading', { name: /comments/i });
        const commentInputField = screen.getByPlaceholderText('Add your comment here');
        const AddCommentBtn = screen.getByRole('button', { name: /add comment/i });
        const ClearCommentButton = screen.getByRole('button', { name: /add comment/i });

        expect(userName).toBeInTheDocument()
        expect(commentTitle).toBeInTheDocument()
        expect(commentInputField).toBeInTheDocument()
        expect(AddCommentBtn).toBeInTheDocument()
        expect( ClearCommentButton).toBeInTheDocument()

        userEvent.type(commentInputField,'mock comment');
        userEvent.click(screen.getByRole('button', { name: /add comment/i }));
    })
})