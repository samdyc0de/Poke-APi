import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Search from "./Search";
import Cards from "../containers/Cards";

function Poke() {
  const [poke, SetPoke] = useState({ cards: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function Card() {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=24&offset=`)
        .then((res) => {
          const result = res.data.results;
          SetPoke({ cards: result });
          setLoading(false);
        });
    }

    Card();
  }, []);

  async function handleSubmit(search) {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => {
        const result = res.data.results;

        SetPoke({ cards: result, search: "" });
        console.log(result);
      });
  }
  return (
    <Fragment>
      {loading ? (
        <div className="container">
          <h1 className="text-dark text-dark d-flex justify-content-center ">
            loading...
          </h1>
        </div>
      ) : (
        <div className="container my-4">
          <Search onSubmit={handleSubmit} />

          <div className="row">
            {poke.cards.map((card, index) => {
              return <Cards card={card} key={index} />;
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Poke;
