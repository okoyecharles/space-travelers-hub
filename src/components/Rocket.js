import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Badge } from 'react-bootstrap';
import { reserveRocket } from '../redux/rocket/actions';

function Rocket({
  id, image, name, description, reserved,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(reserveRocket(id));
  };
  return (
    <div className="rocket my-4">
      <div className="rocket__container d-flex gap-4">
        <img className="rocket__image w-25" src={image} alt={id} />
        <div className="rocket__info">
          <h2 className="rocket__title">{name}</h2>
          <p className="rocket__description">
            {reserved && (
            <Badge bg="success" style={{ minWidth: '120px' }} className="mx-2 p-2">
              Reserved
            </Badge>
            )}
            {description}
          </p>
          <Button
            type="button"
            onClick={handleClick}
            variant={!reserved ? 'primary' : 'light'}
            className="p-2 rounded text-center"
            style={{ minWidth: '120px' }}
          >
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </Button>
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
