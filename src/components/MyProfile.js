import React from 'react';

const MyProfile = () => {
  const temp = 'test';
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-left mb-3">My Missions</h2>
          <ul className="mb-3 p-0">
            <li className="border m-0 p-3">
              column to display missions-
              {temp}
            </li>
          </ul>
        </div>

        <div className="col">
          <h2 className="text-left mb-3">My Rockets</h2>
          <ul className="mb-3 p-0">
            <li className="border m-0 p-3">
              column to display missions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
