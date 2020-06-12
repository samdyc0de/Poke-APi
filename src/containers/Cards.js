import React from "react";

function Cards({ card }) {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const Index = card.url.split("/")[card.url.split("/").length - 2];
  return (
    <div className="col-md-4 my-4 ">
      <div className="card border-danger ">
        <div className="card-header">
          <h5 className="text-danger">{card.name}</h5>
        </div>
        <div className="card-body">
          <img alt="poke" src={`${url}${Index}.png?raw=true`} width="150" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
