import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Pagination from './Pagination'
import Movies from './Movies'
import axios from 'axios'
import SearchComponent from './SearchComponent'
import MovieDescription from './MovieDescription'

const Main = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('Matrix')
  const [totalMovies, setTotalMovies] = useState(0)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const fetchPosts = async () => {
    setLoading(true)
    const res = await axios.get(
      `http://www.omdbapi.com/?s=${query}&apikey=5968f00f&page=${currentPage}&type=movie`
    )
    setMovies(res.data.Search)
    setTotalMovies(res.data.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [currentPage, query])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const makeQuery = (query) => {
    setQuery(query)
  }

  return (
    <div className="main">
      <Router>
        <Switch>
          <Route path="/detail/:id" component={MovieDescription} />
          <Route path="/">
            <div className="container mt-5">
              <SearchComponent makeQuery={makeQuery} />
              <Movies movies={movies} loading={loading} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={totalMovies}
                paginate={paginate}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Main
