import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Rocket({
  id, image, name, description,
}) {
  const [reserved, setReserved] = useState(false);
  const handleClick = () => {
    setReserved((prevState) => !prevState);
  };
  return (
    <div className="rocket">
      <div className="rocket__container">
        <img className="rocket__image" src={image} alt={id} />
        <div className="rocket__info">
          <h2 className="rocket__title">{name}</h2>
          <p className="rocket__description">{description}</p>
          <button onClick={handleClick} type="button">{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
        </div>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
