import React from 'react';


function Quotecard({ image, quote, character }) {
  return (
    <div className="simpson">
      <img
        src={image}
        alt={character}
      />
      <ul>
        <li>
            {quote}{' '}
        </li>
        <li>
            <strong>{character}{' '}</strong>
        </li>
      </ul>
    </div>
  );
};


export default Quotecard;