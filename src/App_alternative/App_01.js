import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CardList from "../components/Card-List/Card-List";
import Pagination from "../components/Pagination/Pagination";
import { fetchBookData } from "../redux/book.api.call";

function App() {
  const moviesList = useSelector((state) => state.book.bookList);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const moviePerPage = 3;

  useEffect(() => {
    dispatch(fetchBookData());
  }, [dispatch]);

  const lastMovieIndex = currentPage * moviePerPage;
  const firstMovieIndex = lastMovieIndex - moviePerPage;
  const currentMovieList =
    moviesList && moviesList.slice(firstMovieIndex, lastMovieIndex);

  return (
    <div className="App">
      {moviesList && <CardList movies={currentMovieList} />}
      {moviesList && (
        <Pagination
          totalPages={Math.ceil(moviesList.length / moviePerPage)}
          moviePerPage={moviePerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default App;
