import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsAction } from '../redux/missions/missions';
import fetchRockets from '../redux/rocket/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!missions.length) dispatch(getMissionsAction());
    if (!rockets.length) dispatch(fetchRockets());
  }, []);

  const myMission = missions.filter((mission) => mission.reserved === true);
  const myRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-left mb-3">My Missions</h2>
          <ul className="mb-3 p-0">
            {myMission.length ? (
              myMission.map((mission) => (
                <li className="border m-0 p-3" key={mission.id}>
                  {mission.name}
                </li>
              ))
            ) : (
              <li className="border m-0 p-3">None</li>
            )}
          </ul>
        </div>

        <div className="col">
          <h2 className="text-left mb-3">My Rockets</h2>
          <ul className="mb-3 p-0">
            {myRockets.length ? (
              myRockets.map((rocket) => (
                <li className="border m-0 p-3" key={rocket.id}>
                  {rocket.name}
                </li>
              ))
            ) : (
              <li className="border m-0 p-3">None</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
