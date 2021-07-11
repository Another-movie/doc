import { Link } from 'react-router-dom'

const Movies = ({ movies, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

  const getImage = (url) =>
    url === 'N/A'
      ? 'https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg'
      : url

  return (
    <div className="list-group mb-4">
      {movies.map((movie) => (
        <Link
          to={`/detail/${movie.imdbID}`}
          key={`${movie.Title} - ${movie.imdbID}`}
        >
          <div id="film-card" className="list-group-item">
            <img className="image-cover" src={getImage(movie.Poster)} alt="" />
            <div>
              <h3>{movie.Title}</h3>
              <div>Year: {movie.Year}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Movies
