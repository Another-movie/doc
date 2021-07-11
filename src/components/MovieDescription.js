import { useEffect, useState } from 'react'
import axios from 'axios'

const MovieDescription = (props) => {
  const id = props.match.params.id
  const [film, setFilm] = useState({})

  async function getFilmById() {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=5968f00f`
    )

    const film = response.data
    setFilm(film)
  }

  useEffect(() => {
    getFilmById()
  }, [])

  // Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss"
  // Awards: "Won 4 Oscars. 42 wins & 51 nominations total"
  // BoxOffice: "$171,479,930"
  // Country: "United States, Australia"
  // DVD: "01 Jan 2009"
  // Director: "Lana Wachowski, Lilly Wachowski"
  // Genre: "Action, Sci-Fi"
  // Language: "English"
  // Metascore: "73"
  // Plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
  // Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  // Production: "Village Roadshow Prod., Silver Pictures"
  // Rated: "R"
  // Ratings: (3) [{…}, {…}, {…}]
  // Released: "31 Mar 1999"
  // Response: "True"
  // Runtime: "136 min"
  // Title: "The Matrix"
  // Type: "movie"
  // Website: "N/A"
  // Writer: "Lilly Wachowski, Lana Wachowski"
  // Year: "1999"
  // imdbID: "tt0133093"
  // imdbRating: "8.7"
  // imdbVotes: "1,721,603"
  return (
    <div className="film">
      <img src={film.Poster} alt="" />
      <div className="film-description">
        <h3 className="film-header">{film.Title}</h3>
        <div className="field">Actors: {film.Actors}</div>
        <div className="field">Country: {film.Country}</div>
        <div className="field">BoxOffice: {film.BoxOffice}</div>
        <div className="field">Director: {film.Director}</div>
      </div>
    </div>
  )
}

export default MovieDescription
