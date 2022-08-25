import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import { getMissionsAction } from '../redux/missions/missions';

export default function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) dispatch(getMissionsAction());
  }, []);

  return (
    <div className="px-3 container">
      <Table responsive="md" className="my-5" striped>
        <thead className="p-5">
          <tr className="border">
            <th className="border">Mission</th>
            <th className="border">Description</th>
            <th className="border">Status</th>
            <th className="border"> </th>
          </tr>
        </thead>
        <tbody className="p-5">
          {missions.map((mission) => (<Mission mission={mission} key={mission.id} />))}
        </tbody>
      </Table>
    </div>
  );
}
