import React, { useState } from "react";
import { getMovies } from "./MoviesStocks";
import "bootstrap/dist/css/bootstrap.min.css";

const Movies = () => {
  const [movies, setmovies] = useState(getMovies());
  const [sortKey, setSortKeys] = useState("Asc")
  const [arr,setArr] = useState (getMovies);
  let styleObj = {
    width: "20%",
    color: "blue",
    margin: "30px",
    padding: "5px",
    border: "1px solid firebrick",
  };

  const deleteMovie = (id) => {
    const filtermovie = movies.filter((m) => {
      return m._id !== id;
    });
    setmovies(filtermovie);
  };
  const sortData = (e) => {
    let m = null;
    sortKey === "ASC" ? setSortKeys("DSC") : setSortKeys("ASC"); 
  const sortedData = movies.sort((a,b) => {
      if(sortKey === "ASC") {
      m = 1;
      }
       else if (sortKey ==="DSC") {
         m = -1;
       };
      
      return m*a.title.localeCompare(b.title);
    });
  }

  const selectGenre = (e) => {
    const {value} = e.target;
    const selectedGenre = movies.filter((m) => {
      return m.genre.name===value;
    })
    setArr(selectedGenre);
  }
  return (
    <>
      <div>
        <select style={styleObj} onChange = {selectGenre}>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
        </select>

        <select style={styleObj} onChange={sortData}>
              <option value="">Decending</option>
              <option value="">Ascending</option>
            </select>
      </div>

      <table className="table" style={{ marginTop: "30px" }}>
        <thead className="tabledark">
          <tr>
            <th>S/No.</th>
            <th>Title</th>
            <th>Ratings</th>
            <th>Genre</th>
            <th>Stocks</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((movie, index) => {
            return (
              <tr key={movie._id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>
                  <button
                    className="btn-danger"
                    onClick={() => {
                      deleteMovie(movie._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
