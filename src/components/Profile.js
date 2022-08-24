import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsAction } from '../redux/missions/missions';

const Profile = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionsAction());
    }
  }, []);

  const myMission = missions.filter((mission) => mission.reserved === true);

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
            <li className="border m-0 p-3">
              column to display Rockets
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
