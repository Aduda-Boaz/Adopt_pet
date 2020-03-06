import React from "react";
import { Link } from "@reach/router";

const Pet = props => {
  const { name, animal, breed, media, location, id } = props;
  let data = ''
  if (media.length){
    data = media[0].small;
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={data} alt={name} />
      </div>
      <div className="info">
          <h1>{name}</h1>
  <h2>{`${animal} -${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;