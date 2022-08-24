import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../redux/rocket/actions';
import Rocket from './Rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets());
  }, []);

  console.log(rockets);

  return (
    <div className="rocket__container">
      <div className="col m-3 p-3 border">
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.name}
            id={rocket.rocketId}
            description={rocket.description}
            image={rocket.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Rockets;
