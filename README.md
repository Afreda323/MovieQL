# MovieQL
This is a Koa and GraphQL backend that queries for movies from MovieDB. 

Just movies querying right now, more will be added later

## Features
- Discover
  - Use a variety of optional fields to discover movies

- Movies
  - Query for movies by ID
  - Get all details for movie
  - Get movie images
  - Get movie videos
  - Find simlar movies
  - Get recommendations based on that movie
  - Search cast and crew of movie

- Movie Lists
  - Find movies based on Popularity
  - Find movies that are coming soon
  - Find top rated movies
  - Find movies that are now playing
  - Find movies based on Popularity

- User
  - Get a guest session
  - Use guest session to rate movies
  - Remove your ratings

### How to use:
- Create a file called .env
- Copy the .env.schema into it. 
- Add your MovieDB API key.
- npm install
- npm start or npm watch
- Proceed to your "localhost:<PORT>/graphql" to view all possible queries and mutations 

## TODO: 
- TV
- People
- Companies
- Netwoks
