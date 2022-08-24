import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchRockets from '../redux/rocket/actions';

function Rockets() {
  // const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div className="rocket__container">
      <div className="col m-3 p-3 border">
        column to display rockets
      </div>
    </div>
  );
}

export default Rockets;
