import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rocket/actions';

function Rocket({
  id, image, name, description, reserved,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reserveRocket(id));
  };
  return (
    <div className="rocket">
      <div className="rocket__container">
        <img className="rocket__image" src={image} alt={id} />
        <div className="rocket__info">
          <h2 className="rocket__title">{name}</h2>
          <p className="rocket__description">{description}</p>
          <button onClick={handleClick} type="button">
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
