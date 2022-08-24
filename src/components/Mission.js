import React, { useEffect } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsAction, joinMissionAction, leaveMissionAction } from '../redux/missions/missions';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionsAction());
    }
  }, []);

  return (
    <>
      {
        missions.map((msn) => (
          <tr
            key={msn.id}
            className={((missions.indexOf(msn) + 1) % 2 === 0 ? 'bg-light' : '')}
          >
            <th className="border fs-5 flex p-2">
              <p>{msn.name}</p>
            </th>
            <td className="border p-2 pb-5">{msn.description}</td>
            <td className="border p-1 align-middle">
              <Badge
                bg={msn.reserved ? 'primary' : 'secondary'}
                style={{ minWidth: '120px' }}
                className="p-3"
              >
                {msn.reserved ? 'Active Member' : 'Not A Member'}
              </Badge>
            </td>
            <td className="p-2 border align-middle">
              <Button
                type="button"
                onClick={() => {
                  if (!msn.reserved) {
                    dispatch(joinMissionAction(msn.id));
                  } else {
                    dispatch(leaveMissionAction(msn.id));
                  }
                }}
                variant={!msn.reserved ? 'success' : 'danger'}
                className="p-2 rounded text-center"
                style={{ minWidth: '120px' }}
              >
                {!msn.reserved ? 'Join Mission' : 'Leave Mission'}
              </Button>
            </td>
          </tr>
        ))
      }
    </>
  );
};

export default Mission;
